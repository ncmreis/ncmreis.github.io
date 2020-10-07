<template>
    <v-app>
        <v-parallax src='./assets/back_4.png'  id="#home" :height="windowHeight">
            <v-toolbar flat class="transparent mt-4">
                <v-toolbar-title>
                    <v-img @click="goToSection('#home')"
                    contain
                    height="70px"
                    width="210px"
                    src="./assets/thorly_logo_white.png"
                    alt="Thorly"
                    class="v-img-cursor ml-n2 hidden-xs-only"></v-img>
                    <v-img @click="goToSection('#home')"
                           contain
                           height= "35px"
                           width= "120px"
                           src="./assets/thorly_logo_white.png"
                           alt="Thorly"
                           class="v-img-cursor hidden-sm-and-up"></v-img>
                </v-toolbar-title>
                <div class="flex-grow-1"></div>
                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn text color="white" @click="goToSection('#manifesto')">Manifesto</v-btn>
                    <v-btn text color="white" @click="goToSection('#services')">Services</v-btn>
                    <v-btn text color="white" @click="goToSection('#team')">Team</v-btn>
                    <v-btn text color="white" @click="goToSection('#contacts')">Contacts</v-btn>
                </v-toolbar-items>
                <div class="hidden-md-and-up text-center">
                    <v-menu bottom left>
                        <template v-slot:activator="{ on }">
                            <v-btn fab text flat class="transparent" v-on="on">
                              <v-icon color="white">mdi-menu</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item @click="goToSection('#manifesto')">Manifesto</v-list-item>
                            <v-list-item @click="goToSection('#services')">Services</v-list-item>
                            <v-list-item @click="goToSection('#team')">Team</v-list-item>
                            <v-list-item @click="goToSection('#contacts')">Contacts</v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </v-toolbar>

            <v-container class="justify-center fill-height mb-0">
                <v-flex md8 xs12>
                    <v-layout
                          column
                          align-start
                          justify-center
                          class="white--text d-flex flex-grow-1"
                    >
                        <h1 style="font-size:350%; font-weight: 600" class="hidden-xs-only">
                            Rapid ML/AI solutions to take value from your data</h1>

                        <h2 class="mt-10 hidden-xs-only" style="font-weight:400">
                            Thorly provides <b style="color: #2C81D6">Data Science & Data Engineering</b>
                            services to help companies increase their data potential</h2>

                        <v-btn align-center class="hidden-xs-only body-1 mt-10" color="primary" x-large @click="goToSection('#contacts')">
                            GET IN TOUCH
                        </v-btn>

                        <h1 style="font-size:225%; font-weight: 600" class="hidden-sm-and-up">
                            Rapid ML/AI solutions to take value from your data</h1>

                        <v-col class="d-flex align-stretch"></v-col>

                        <h2 class="body-1 hidden-sm-and-up">
                            Thorly provides <b style="color: #2C81D6">Data Science & Data Engineering</b>
                            services to help companies increase their data potential</h2>

                        <v-col class="d-flex align-stretch"></v-col>

                        <v-btn align-center class="hidden-sm-and-up" color="primary" small @click="goToSection('#contacts')">
                            GET IN TOUCH
                        </v-btn>

                    </v-layout>
                </v-flex>
            </v-container>

        </v-parallax>

        <v-card class="main cursor"
              :class="{'main-raised':$vuetify.breakpoint.smAndUp,
                     'main-raised-xs':$vuetify.breakpoint.xs}"
              >

            <v-toolbar v-if="scrolled"
                     :class="{'nav':$vuetify.breakpoint.smAndUp,
                     'nav-xs':$vuetify.breakpoint.xs}"
                     height="70"
                     src = "./assets/back_4.png"
                     flat>
              <v-toolbar-title>
                  <v-img @click="goToSection('#home')"
                  contain
                  height="50px"
                  width="160px"
                  src="./assets/thorly_logo_white.png"
                  alt="Thorly"
                  class="v-img-cursor"></v-img>
              </v-toolbar-title>
              <div class="flex-grow-1"></div>       <v-toolbar-items class="hidden-xs-only">
                  <v-btn text color="white" @click="goToSection('#manifesto')">Manifesto</v-btn>
                  <v-btn text color="white" @click="goToSection('#services')">Services</v-btn>
                  <v-btn text color="white" @click="goToSection('#team')">Team</v-btn>
                  <v-btn text color="white" @click="goToSection('#contacts')">Contacts</v-btn>
              </v-toolbar-items>
              <v-btn elevation="5" class="ml-4 d-none d-sm-block justify-end" color="primary" @click="goToSection('#contacts')">Get in touch</v-btn>
              <v-btn small fab color="primary" class="d-sm-none" @click="goToSection('#contacts')">
                  <v-icon>mdi-email</v-icon>
              </v-btn>
            </v-toolbar>

            <section id="#manifesto" style="background-color: #fafafa">
            <v-container>
                <v-layout
                        row
                        wrap
                        class="my-12"
                        align-center
                        justify-center
                >
                    <v-flex md8 xs12 class="mb-12">
                        <v-card
                                flat
                                class="transparent justify-center text-center"
                        >
                            <v-card-title primary-title class="justify-center fix layout mt-6 mb-12 ">
                                <p class="display-2 text-center" style="font-weight: 600">Get your job done in 4 weeks</p>
                            </v-card-title>
                            <v-card-text>
                                <p class="text-center headline mb-6">
                                    Our services were designed to help you developing efficient & scalable solutions
                                    <b style="color: #2C81D6">without future reliance on us or other external parties</b>
                                </p>
                                <p class="text-center headline">
                                    We work with your team on <b style="color: #2C81D6">sprints of 2 to 4 weeks</b> with short iteration
                                    cycles and hand over fully-documented deliverables deployed on your side
                                </p>
                            </v-card-text>

                            <v-btn align-center v-if="windowHeight>500" class="body-1 mt-12" color="primary" x-large @click="goToSection('#contacts')">
                                I want to leverage my data
                            </v-btn>
                        </v-card>
                    </v-flex>

                </v-layout>
            </v-container>
            </section>

            <v-parallax id="#services" src='./assets/back_4.png' height="100%">
              <v-container class="text-center">
                  <v-layout
                          row
                          wrap
                          class="my-12 white--text"
                          align-center
                          justify-center
                  >

                    <v-flex md8 xs12 class="mt-12">
                        <v-card flat class="transparent white--text">
                            <v-card-title primary-title class="justify-center fix layout mb-12">
                                <p class="display-2 text-center" style="font-weight: 600">From our services to your value</p>
                            </v-card-title>
                            <v-card-text>
                                <p class="text-center headline mb-6 white--text">
                                    <b style="color: #2C81D6">Our full-stack data know-how</b> allows us to develop end-to-end data services.
                                    From <u><b>strategy</b></u> definition to <u><b>implementation</b></u> of innovative solutions.
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-flex>

                    <v-flex md10 xs12 >
                        <v-container grid-list-xl>
                            <v-layout row wrap align-start>

                                <v-flex sm4 xs12>
                                    <v-card>
                                        <v-card-text class="text-center">
                                            <v-icon color="#2C81D6" size="100" class="mt-6">mdi-arrow-decision</v-icon>
                                        </v-card-text>
                                        <v-card-title primary-title class="fix layout justify-center mb-6">
                                            <div class="fix display-1 text-center">Data Strategy</div>
                                        </v-card-title>
                                        <v-card-text>
                                                <v-list
                                                        three-line
                                                        class="transparent"
                                                >
                                                    <v-list-item>
                                                        <v-list-item-content>
                                                            <v-list-item-title>Content filtering</v-list-item-title>
                                                            <v-list-item-subtitle>Set the content filtering level to restrict appts that can be downloaded</v-list-item-subtitle>
                                                        </v-list-item-content>
                                                    </v-list-item>

                                                    <v-list-item>
                                                        <v-list-item-content>
                                                            <v-list-item-title>Password</v-list-item-title>
                                                            <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                                </v-list>

                                        </v-card-text>
                                    </v-card>
                                </v-flex>

                                <v-flex sm4 xs12>
                                    <v-card>
                                        <v-card-text class="text-center">
                                            <v-icon color="#2C81D6" size="100" class="mt-6">mdi-database</v-icon>
                                        </v-card-text>
                                        <v-card-title primary-title class="fix layout justify-center mb-6">
                                            <div class="fix display-1 text-center">Data Engineering</div>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-list
                                                    three-line
                                                    class="transparent"
                                            >
                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Content filtering</v-list-item-title>
                                                        <v-list-item-subtitle>Set the content filtering level to restrict appts that can be downloaded</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>

                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Password</v-list-item-title>
                                                        <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list>

                                        </v-card-text>
                                    </v-card>
                                </v-flex>

                                <v-flex sm4 xs12>
                                    <v-card>
                                        <v-card-text class="text-center">
                                            <v-icon color="#2C81D6" size="100" class="mt-6">mdi-chart-gantt</v-icon>
                                        </v-card-text>
                                        <v-card-title primary-title class="fix layout justify-center mb-6">
                                            <div class="fix display-1 text-center">Data Science</div>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-list
                                                    three-line
                                                    class="transparent"
                                            >
                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Content filtering</v-list-item-title>
                                                        <v-list-item-subtitle>Set the content filtering level to restrict appts that can be downloaded</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>

                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-list-item-title>Password</v-list-item-title>
                                                        <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list>

                                        </v-card-text>
                                    </v-card>
                                </v-flex>

                            </v-layout>
                        </v-container>
                    </v-flex>

                </v-layout>
                <v-btn v-if="windowHeight>500" class="body-1 mb-12" color="primary" x-large @click="goToSection('#contacts')">
                  I need your services
                </v-btn>
            </v-container>
            </v-parallax>

            <section id="#team">
            <v-container class="text-center">
                <v-layout
                      row
                      wrap
                      class="my-12"
                      align-center
                      justify-center
                >
                    <v-flex md8 xs12>
                        <v-card
                              flat
                              class="transparent justify-center text-center"
                      >
                          <v-card-title primary-title class="justify-center fix layout mt-6 mb-12 ">
                              <p class="display-2 text-center" style="font-weight: 600">Meet the team</p>
                          </v-card-title>
                          <v-card-text>
                              <p class="text-center headline mb-6">
                                  We are a mix of <b><u>business-oriented geeks & data-driven entrepreneurs</u></b> with a
                                  <b style="color: #2C81D6">focus on technology, data, AI & education</b>.
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
                                        open-delay="200"
                                >
                                <v-card flat class="transparent pb-6">
                                    <v-card-text class="text-center">
                                        <v-avatar size="150">
                                            <img :src="getImgUrl(person.photo)" :alt="person.photo">
                                        </v-avatar>
                                    </v-card-text>
                                    <v-card-title primary-title class="fix layout justify-center">
                                        <div class="fix headline text-center"> {{ person.name }}</div>
                                    </v-card-title>
                                    <div class="text-center">
                                        <v-btn class="mr-1" icon color="#2C81D6"><v-icon size="24px">mdi-linkedin</v-icon></v-btn>
                                        <v-btn class="mr-1" icon color="#2C81D6"><v-icon size="24px">mdi-instagram</v-icon></v-btn>
                                        <v-btn icon color="#2C81D6"><v-icon size="24px">mdi-facebook</v-icon></v-btn>
                                    </div>
                                    <v-overlay
                                            absolute
                                            opacity=0.80
                                            :value="hover"
                                    >
                                        <v-card-text class="text-center px-6">
                                            {{ person.description }}
                                        </v-card-text>
                                    </v-overlay>
                                </v-card>
                                </v-hover>
                            </v-flex>
                          </v-layout>
                        </v-container>
                    </v-flex>

                </v-layout>
                <v-btn align-center v-if="windowHeight>500" class="body-1 mb-12" color="primary" x-large @click="goToSection('#contacts')">
                    I want to meet the team
                </v-btn>
            </v-container>
            </section>

        </v-card>

        <v-parallax id="#contacts" src='./assets/back_4.png' height="100%">
            <v-container class="text-center mt-4" grid-list-xl>
                <v-layout row wrap align-start class="text-center text-md-left mb-4">
                    <v-flex sm12 md3>
                      <p class="subtitle-1 text-uppercase mb-4 font-weight-bold">Our status</p>
                      <p>Currently working remote. We love to brainstrom, have good conversations and discuss
                          new ideas. Feel free to get in touch. </p>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                      <p class="subtitle-1 text-uppercase mb-4 font-weight-bold">About</p>
                      <p><a href="#!" style="color: inherit; text-decoration: none">Work with us</a></p>
                      <p><a href="#!" style="color: inherit; text-decoration: none">Join the team</a></p>
                      <p><a href="#!" style="color: inherit; text-decoration: none">Read our blog</a></p>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <p class="subtitle-1 text-uppercase mb-4 font-weight-bold">Office</p>
                        <p>Rua da Prata, 80<br>1100-420 Lisboa<br>Portugal</p>
                    </v-flex>
                    <v-flex xs12 sm4 md3>
                      <p class="subtitle-1 text-uppercase mb-4 font-weight-bold">Contact</p>
                      <p>info@thorly.co</p>
                      <p>+ 351 918 548 827</p>
                      <p>
                          <v-btn class="white--text mr-1" icon><v-icon size="24px">mdi-linkedin</v-icon></v-btn>
                          <v-btn class="white--text mr-1" icon><v-icon size="24px">mdi-instagram</v-icon></v-btn>
                          <v-btn class="white--text mr-1" icon><v-icon size="24px">mdi-facebook</v-icon></v-btn>
                      </p>
                    </v-flex>
                </v-layout>
                <hr />
                <v-row class="justify-center">
                      <v-btn color="white" text class="text-center mt-2">THORLY &copy; 2020 - Privacy policy</v-btn>
                </v-row>
            </v-container>
        </v-parallax>

    </v-app>
</template>

<script>
import FormHome from './components/FormHome';
import IntroPythonCard from './components/IntroPythonCard';
import PythonDSCard from './components/PythonDSCard';

export default {
  name: 'App',
  components: {
      FormHome,
      IntroPythonCard,
      PythonDSCard
  },
  data () {
    return {
        hashSection: null,
        windowHeight: 0,
        show1: true,
        show2: false,
        scrolled: false,
        people: [
            {name: 'Ricardo Pereira', photo: "ricardo", description: 'Ricardo has co-founded several organisations and companies, to help solving problems that are data related and enhancing different communities. Currently he is teaching Python at Nova SBE and Data science at ELU and Rumos. Ricardo has been contracting for two years, working closely with some of the biggest tech companies in PT.'},
            {name: 'Nuno Reis', photo: "nuno", description: 'Nuno started his career as top student at Técnico Lisboa, where he did research before working for 3 years at Teixeira Duarte. Then he moved on to Data Science and has already founded a fintech and an edtech startup while he was doing Data Science & Data Architecture consultancy. He is currently teaching Data Science fundamentals at EDIT.'},
            {name: 'Luís Sousa', photo: "luis", description: 'Luís has been working as a full-stack developer for more than 10 years. Besides Mathematics, he has been evolved with Physics and radiation for the last 4 years, where he developed software to be deployed in Africa for the oil and gas industry. Lately, he was a Lead Data Scientist at OutSystems and he is teaching Python at Rumos.'}
        ]
    }
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
      openForm: function () {
          window.open("https://share.hsforms.com/1YATh4nJpRzGRDOpSyNdhaQ3vi5m", "_blank");
      },
      getImgUrl(pet) {
          var images = require.context('./assets/img/faces/', false, /\.jpeg$/)
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
                backgroundImage: 'url(./assets/blue.jpg)'
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
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: center;
    width: 100%;
}
.main{
    background: #FFFFFF;
    position: relative;
    z-index: 3;
}

.main-raised{
    margin: 0px 0px -0px;
}

.main-raised-xs{
    margin: -0px 0px -0px;
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

.v-img-cursor{
    cursor:pointer;
}

</style>

