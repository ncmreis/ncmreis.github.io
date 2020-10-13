<template>
    <v-parallax src='../assets/back_4.png'  id="#home" :height="windowHeight">

        <Navbar height="80"></Navbar>

        <v-container class="justify-center fill-height mb-0">
            <v-flex md8 xs12>
                <v-layout
                        column
                        align-start
                        justify-center
                        class="white--text d-flex flex-grow-1"
                >
                    <h1 style="font-size:350%; font-weight: 600" class="hidden-xs-only">
                        {{ title }}</h1>

                    <h2 class="mt-10 hidden-xs-only" style="font-weight:400">
                        {{ descriptionInitial }}<b style='color: #2C81D6'>{{' ' + descriptionBlue + ' '}}</b> {{ descriptionFinal }}</h2>

                    <v-btn align-center class="hidden-xs-only body-1 mt-10" color="primary" x-large @click="goToSection('#1')">
                        {{ button }}
                    </v-btn>

                    <h1 style="font-size:225%; font-weight: 600" class="hidden-sm-and-up">
                        {{ title }}</h1>

                    <v-col class="d-flex align-stretch"></v-col>

                    <h2 class="body-1 hidden-sm-and-up">
                        {{ descriptionInitial }}<b style='color: #2C81D6'>{{' ' + descriptionBlue + ' '}}</b> {{ descriptionFinal }}</h2>

                    <v-col class="d-flex align-stretch"></v-col>

                    <v-btn align-center class="hidden-sm-and-up" color="primary" small @click="goToSection('#1')">
                        {{ button }}
                    </v-btn>

                </v-layout>
            </v-flex>
        </v-container>

    </v-parallax>
</template>

<script>
    import Navbar from '../components/Navbar';

    export default {
        name: "Header",
        props: ['title', 'descriptionInitial', 'descriptionBlue','descriptionFinal', 'button'],
        components: {
            Navbar
        },

        data () {
            return {
                hashSection: null,
                windowHeight: 0,
                show1: true,
                show2: false,
                scrolled: false
            }},
        methods: {
            goToSection(hashSection) {
                var elmnt = document.getElementById(hashSection);
                elmnt.scrollIntoView({behavior: 'smooth'});
            },
            menuItems() {
                return this.menu
            },
            handleResize() {
                this.windowHeight = window.innerHeight;
            },
            handleScroll () {
                this.scrolled = window.scrollY > (window.innerHeight-100);
            },
            getImgUrl(pet) {
                var images = require.context('../assets/img/faces/', false, /\.jpeg$/)
                return images('./' + pet + ".jpeg")
            }
        },
        created: function() {
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },

        destroyed: function() {
            window.removeEventListener('resize', this.handleResize)
        },

        computed: {
            headerStyle() {
                return {
                    backgroundImage: 'url(../assets/blue.jpg)'
                };
            },
        },
        beforeMount () {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.handleScroll);
        }
    };
</script>

<style lang="scss" scoped>
    .fix {
        overflow-wrap: anywhere;
        word-wrap: break-word;
        word-break: normal;
        hyphens: auto;
    }

    .cursor {
        cursor: auto;
    }

    .nav {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        z-index: 4 !important;
        background-color: #2AB7CA;
    }

    .nav-xs {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        z-index: 4 !important;
        background-color: #2AB7CA;
    }

</style>