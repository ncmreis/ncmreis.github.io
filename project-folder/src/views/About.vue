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


        </v-card>

        <Footer/>
    </div>
    
</template>

<script>
    import Navbar from '../components/Navbar';
    import Header from '../components/Header';
    import Footer from '../components/Footer';


    export default {
        name: "About",
        components: {
            Header,
            Navbar,
            Footer
        },
    }
</script>

<style scoped>

</style>