<template>
    <div>
        <Header
                title = "The team and culture behind your business solutions"
                descriptionInitial="We believe"
                descriptionBlue="our creative, friendly and assertive mindset"
                descriptionFinal="is the sweet spot to help you find the solutions for your business needs"
                button = "Know more"
        ></Header>

        <v-card>
            <Navbar v-if="scrolled"
                    :class="{'nav':$vuetify.breakpoint.smAndUp,
                     'nav-xs':$vuetify.breakpoint.xs}"
                    background='back_4'
                    height="70"
            ></Navbar>

            <section id="#lisbon">
                <v-container class="text-center">
                    <v-layout
                            row
                            wrap
                            class="my-12 white--text"
                            align-center
                            justify-center
                    >
                        <v-flex md10 xs12 class="mt-12">
                            <v-card flat class="transparent">
                                <v-card-title primary-title class="justify-center fix layout mb-6">
                                    <p class="display-2 text-center" style="font-weight: 600">From Lisbon to the World</p>
                                </v-card-title>
                                <v-img max-height="250" contain src="../assets/lisbon.png" class="text-center align-end"></v-img>
                                <v-card-text>
                                    <p class="text-center headline">
                                        Born and raised in Lisbon, <b style="color: #2C81D6">we studied in the top universities and launched our previous companies in town</b>
                                        but have already <b>worked for USA, Macao, Brazil, Peru, Algeria, Angola and many others</b>.
                                        Currently working remote, we have our office in the Downtown and remain proudly a <b>Lisbon-based company</b>. Be welcome to visit us!

                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <div class=" mb-12">
                        <v-btn class="body-1" color="primary" x-large to="/about">
                            Reach out
                        </v-btn>
                    </div>
                </v-container>
            </section>

            <section id="#1" style="background-color: #F6F9FD">
                <v-container class="text-center">
                    <v-layout
                            row
                            wrap
                            class="my-12"
                            align-center
                            justify-center
                    >
                        <v-flex md10 xs12>
                            <v-card
                                    flat
                                    class="transparent justify-center text-center"
                            >
                                <v-card-title primary-title class="justify-center fix layout mt-6 mb-12 ">
                                    <p class="display-2 text-center" style="font-weight: 600">The DNA behind Thorly</p>
                                </v-card-title>
                                <v-card-text>
                                    <p class="text-center headline mb-6">
                                        We believe a team is all about <b style="color: #2C81D6">people with the right values</b> and it is the key-factor
                                        to create the <b>open-minded, friendly and creative environment</b> we have.
                                        These are our <b>North stars</b>.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex md10 xs12>
                            <v-container grid-list-xl>
                                <v-layout row wrap class="d-flex align-stretch">
                                    <v-flex v-for="value in values" md4 sm6 xs12 >
                                        <v-card dark style="background-color: #2C81D6" class="fill-height elevation-5">
                                            <v-card-title class="fix text-left">
                                                {{ value.name }}
                                            </v-card-title>
                                            <v-card-text class="text-left subtitle-1">
                                                {{ value.description }}
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-flex>

                    </v-layout>
                </v-container>
            </section>

            <section id="#team">
                <v-container class="text-center">
                    <v-layout
                            row
                            wrap
                            class="my-12"
                            align-center
                            justify-center
                    >
                        <v-flex md10 xs12>
                            <v-card
                                    flat
                                    class="transparent justify-center text-center"
                            >
                                <v-card-title primary-title class="justify-center fix layout mt-6 mb-12 ">
                                    <p class="display-2 text-center" style="font-weight: 600">The people behind the DNA</p>
                                </v-card-title>
                                <v-card-text>
                                    <p class="text-center headline mb-6">
                                        We are a mix of <b>data-driven ex-startup founders</b> and
                                        <b>business-oriented top talent in Engineering & Data Science</b>,
                                        with a focus on <b style="color: #2C81D6">tech, data, AI & education</b>. Nice to e-meet you.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex md10 xs12>
                            <v-container grid-list-xl>
                                <v-layout row wrap align-start>
                                    <v-flex v-for="person in people" md4 xs12>
                                        <v-hover
                                                v-slot:default="{ hover }"
                                        >
                                            <v-card flat class="transparent pb-6">
                                                <v-card-text class="text-center">
                                                    <v-avatar size="200">
                                                        <img contain :src="getTeamImgUrl(person.photo)" :alt="person.photo">
                                                    </v-avatar>
                                                </v-card-text>
                                                <v-card-title class="fix layout justify-center">
                                                    <div class="fix headline text-center"> {{ person.name }}</div>
                                                </v-card-title>
                                                <v-card-text class="mt-n4">
                                                    <div class="fix subtitle-1 text-center"> {{ person.position }}</div>
                                                </v-card-text>
                                                <v-overlay
                                                        absolute
                                                        opacity=0.90
                                                        :value="hover"
                                                >
                                                    <v-card-text class="text-center px-6">
                                                        {{ person.description }}
                                                    </v-card-text>
                                                    <div class="text-center">
                                                        <v-btn class="mr-1" icon color="#2C81D6"><v-icon size="24px">mdi-linkedin</v-icon></v-btn>
                                                        <v-btn class="mr-1" icon color="#2C81D6"><v-icon size="24px">mdi-instagram</v-icon></v-btn>
                                                        <v-btn icon color="#2C81D6"><v-icon size="24px">mdi-facebook</v-icon></v-btn>
                                                    </div>
                                                </v-overlay>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-flex>

                    </v-layout>
                    <v-btn align-center class="body-1 mb-12" color="primary" x-large to="/about">
                        Join us!
                    </v-btn>
                </v-container>
            </section>

        </v-card>

        <Footer/>
    </div>
</template>

<script>
        import Navbar from '../components/Navbar';
        import Header from '../components/Header';
        import Footer from '../components/Footer';

        export default {
            name: 'Home',
            components: {
                Header,
                Navbar,
                Footer
            },

            data () {
                return {
                    hashSection: null,
                    windowHeight: 0,
                    scrolled: false,
                    people: [
                        {name: 'Ricardo Pereira', position: 'The pragmatic strategist', photo: "ricardo", description: 'Ricardo has co-founded several organisations and companies, to help solving problems that are data related and enhancing different communities. Now he is teaching Python at Nova SBE and Data science at ELU and Rumos. Ricardo has been contracting for two years, working closely with some of the biggest tech companies in PT.'},
                        {name: 'Nuno Reis', position: 'The outgoing salesman', photo: "nuno", description: 'Nuno started his career as top student at Técnico Lisboa, where he did research before working for 3 years in the industry. Then he moved on to Data Science and has already founded two startups while he was doing Data Science & Data Architecture consultancy. He is currently teaching Data Science fundamentals at EDIT.'},
                        {name: 'Luís Sousa', position: 'The no-filter developer', photo: "luis", description: 'Luís has been working as a full-stack developer for more than 10 years. Besides Mathematics, he has been evolved with Physics and Radiation in the last years, where he developed software to be deployed in Africa for the oil and gas industry. Lately, he was a Lead Data Scientist at OutSystems and he is teaching Python at Rumos.'}
                    ],
                    values: [
                        {name: 'No hard feelings', description: 'Transparency, transparency and... Transparency with constructive criticism is allowed and welcome!'},
                        {name: 'We love troubles', description: 'Which means we need to be open-minded and flexible to be constantly unconfortable chasing solutions.'},
                        {name: "You'll never walk alone", description: 'Nothing more correct! "Not my problem" is not in our dictionary. Be a helper and you will be Thorly loved.'},
                        {name: 'Be a student forever', description: 'But for every student, a professor is needed... One said: True love is knowledge sharing!'},
                        {name: 'Brainstormers', description: 'New ideas are key to go bigger so to be an idiot is very much blessed and appreciated in our team.'},
                        {name: 'Optimists only', description: 'The world is colorful, color means life and life means... Yeah, this is rubbish but we get bored with pessimism.'}
                    ]
                };
            },
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

                getCompImgUrl(pet) {
                    var images = require.context('../assets/companies/', false, /\.png$/)
                    return images('./' + pet + ".png")
                },
                getServiceImgUrl(pet) {
                    var images = require.context('../assets/services/', false, /\.png$/)
                    return images('./' + pet + ".png")
                },
                getTeamImgUrl(pet) {
                    var images = require.context('../assets/img/faces/', false, /\.jpeg$/)
                    return images('./' + pet + ".jpeg")
                },
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
                function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typeform-share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } },

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
        .v-card--reveal {
            align-items: center;
            bottom: 0;
            justify-content: center;
            opacity: .9;
            position: center;
            width: 100%;
        }

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
            z-index: 10 !important;
        }

        .nav-xs {
            position: fixed;
            top: 0px;
            left: 0px;
            right: 0px;
            z-index: 10 !important;
        }

    </style>