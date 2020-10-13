<template>
    <div>
        <Header
                title = "From ML/AI prototypes to scalable solutions"
                descriptionInitial="Thorly provides"
                descriptionBlue="Data Science & Data Engineering"
                descriptionFinal="services to help companies increase their data potential"
                button = "Know more"
        ></Header>

        <v-card>
            <Navbar v-if="scrolled"
                    :class="{'nav':$vuetify.breakpoint.smAndUp,
                     'nav-xs':$vuetify.breakpoint.xs}"
                    background='back_4'
                    height="70"
            ></Navbar>

            <section id="#1" >
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
                                <v-card-title primary-title class="justify-center fix layout mb-12">
                                    <p class="display-2 text-center" style="font-weight: 600">Get your job done in 4 weeks</p>
                                </v-card-title>
                                <v-card-text>
                                    <p class="text-center headline mb-6">
                                        Our services were designed to develop scalable solutions on <b style="color: #2C81D6">sprints of 2-4 weeks</b>
                                        together with your team and <b style="color: #2C81D6">without future reliance on us or other external parties</b>.
                                    </p>
                                    <p class="text-center headline mb-12">
                                        <b style="color: #2C81D6">Our full-stack data know-how</b> allows us to develop end-to-end projects.
                                        From <u><b>strategy</b></u> definition to <u><b>implementation</b></u> of innovative solutions.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-flex>

                        <v-flex md12 xs12>
                            <v-container grid-list-xl>
                                <v-layout row wrap align-start>
                                    <v-flex v-for="service in services" md3 sm6 xs12>
                                        <v-card flat class="transparent">
                                            <v-img height="200" contain :src="getServiceImgUrl(service.photo)" class="text-center"></v-img>
                                            <v-card-title class="headline fix layout justify-center">
                                                <b style="">{{ service.name }}</b>
                                            </v-card-title>
                                            <v-card-text class="subtitle-1">
                                                {{ service.description }}
                                            </v-card-text>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-flex>

                    </v-layout>
                    <v-btn class="body-1 mb-12" color="primary" x-large to="/services">
                        Dig into our services
                    </v-btn>
                </v-container>
            </section>

            <section id="#clients" style="background-color: #F6F9FD">
                <v-container class="text-center">
                    <v-layout
                            row
                            wrap
                            class="my-12"
                            align-center
                            justify-center
                    >

                        <v-flex md8 xs12 class="my-12">
                            <v-card flat class="transparent">
                                <v-card-title primary-title class="justify-center fix layout mb-12">
                                    <p class="display-2 text-center" style="font-weight: 600">The companies that trust us</p>
                                </v-card-title>
                                <v-card-text>
                                    <p class="text-center headline">
                                        Get to know some of the <b style="color: #2C81D6">great & innovative organizations</b> that make us grow everyday.
                                        More than clients, these are <b><u>our partners</u></b>.
                                    </p>
                                </v-card-text>
                            </v-card>
                        </v-flex>


                        <v-flex md10 xs11 class="mb-6">
                            <v-container grid-list-xl align-center>
                                <v-layout row wrap align-center>
                                    <v-flex v-for="company in companies" sm3 xs4 class="px-10 py-5">
                                        <v-img height="75" contain :src="getCompImgUrl(company.photo)" class="text-center"></v-img>
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
                                    <p class="display-2 text-center" style="font-weight: 600">The brains behind business</p>
                                </v-card-title>
                                <v-card-text>
                                    <p class="text-center headline mb-6">
                                        We are a mix of <b><u>business-oriented geeks & data-driven entrepreneurs</u></b> with a
                                        <b style="color: #2C81D6">focus on tech, data, AI & education</b>.
                                        These are the stories behind us. Nice to e-meet you.
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
                        Know more about us
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