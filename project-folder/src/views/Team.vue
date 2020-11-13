<template>
    <v-card tile>

      <Navbar
        :class="{
          nav: $vuetify.breakpoint.smAndUp,
          'nav-xs': $vuetify.breakpoint.xs,
        }"
        height="70"
        logo="thorly_logo_white"
        textColor="#FFFFFF"
        colorButton="orange"
      ></Navbar>

      <section id="#header" style="height: 100vh; background-color: #F7F8FA;; padding-top: 70px" class="mb-0 pb-0">
        <v-container class="fill-height mb-0 pb-0">
          <v-layout
                  row
                  wrap
                  align-end
                  justify-center
          >
            <v-flex md12 xs12>
              <v-card flat class="transparent">
                <v-card-title
                        primary-title
                        class="justify-center fix layout mb-0"
                >
                  <p class="text-sm-h3 text-h4 text-center mb-0">
                    Our people = Our culture
                  </p>
                </v-card-title>
                <v-card-text class="my-0">
                  <p class="text-center text-sm-h5 text-h6 my-0" style="font-weight: 400">
                    A
                    <b style="color: #2C81D6"
                    >flexible & positive spirit</b> to enhance <b>creativity</b>
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
              <v-img
                      :max-height="windowHeight<500 ? '35vh' : '325px'"
                      contain
                      src="../assets/team.png"
                      class="text-center align-end my-0"
              ></v-img>
          </v-layout>
        </v-container>
      </section>

      <section id="#lisbon">
        <v-container class="text-center">
          <v-layout
            row
            wrap
            class="my-12 white--text"
            align-center
            justify-center
          >
            <v-flex md10 xs12>
              <v-card flat class="transparent">
                <v-card-title
                  class="justify-center fix layout mt-6 mb-6"
                >
                  <p class="text-sm-h4 text-h5 text-center">
                    From Lisbon to the World
                  </p>
                </v-card-title>
                <v-img
                  max-height="250"
                  contain
                  src="../assets/lisbon.png"
                  class="text-center align-end"
                ></v-img>
                <v-card-text>
                  <p class="text-center text-sm-h6 text-subtitle-1 font-weight-regular">
                    Born and raised in Lisbon,
                    <b style="color: #2C81D6"
                      >we studied in the top universities and launched our
                      previous companies in town</b
                    >
                    but have already
                    <b>worked for the UK, USA, Brazil and others.</b> We work in
                    a remote culture, but have our office in Lisbon Downtown.
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section id="#values" style="background-color: #F7F8FA;">
        <v-container class="text-center">
          <v-layout row wrap class="my-12" align-center justify-center>

            <v-flex md12 xs12>
              <v-container grid-list-xl>
                <v-layout row wrap class="align-center justify-center">

                  <v-flex md5 xs12 class="pb-0">
                    <v-card flat class="transparent text-md-left text-center py-0 mr-md-6">
                      <v-card-title class="text-sm-h4 text-h5 justify-md-start justify-center fix">
                        The DNA behind Thorly
                      </v-card-title>
                      <v-card-text class="text-sm-h6 text-subtitle-1 font-weight-regular">
                        We believe a team is all about <b style="color: #2C81D6">people with the right values</b>
                        and it is the key-factor to create an
                        open-minded, friendly and creative environment.
                      </v-card-text>
                    </v-card>
                  </v-flex>


                  <v-flex md7 xs12>
                    <v-container grid-list-xl>
                      <v-layout row wrap class="d-flex align-stretch">
                        <v-flex v-for="(value,index) in values" :key="index" sm6 xs12>
                          <v-card class="fill-height text-left elevation-5 fix py-6 px-3">
                            <v-card-title class='fix justify-start text-sm-subtitle-1 text-subtitle-2' style="line-height: 20px">{{ value.name }}</v-card-title>
                            <v-card-text class="text-sm-body-2 text-caption">{{ value.description }}</v-card-text>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>

          </v-layout>
        </v-container>
      </section>

      <section id="#team">
        <v-container class="text-center">
          <v-layout row wrap align-center justify-center class="my-12">

            <v-flex md10 xs12>
              <v-card flat class="transparent justify-center text-center">
                <v-card-title class="text-sm-h4 text-h5 justify-center mt-6 mb-md-12 mb-6">
                  Hello, world
                </v-card-title>
                <v-card-text>
                  <p class="text-sm-h6 text-subtitle-1 text-center font-weight-regular">
                    We are a group of data-driven entrepreneurs with a focus on technology, data and machine learning.
                    <b style="color: #2C81D6">Nice to e-meet you!</b>
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex md12 xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-start>
                  <v-flex v-for="person in people" md4 xs12>
                    <v-hover v-slot:default="{ hover }">
                      <v-card flat class="transparent pb-6">
                        <div class="text-center mt-3">
                          <v-avatar :size="$vuetify.breakpoint.xs ? 150 : 200">
                            <img
                              contain
                              :src="getTeamImgUrl(person.photo)"
                              :alt="person.photo"
                            />
                          </v-avatar>
                        </div>
                        <v-card-title class="fix layout justify-center">
                          <div class="fix text-sm-h5 text-h6 font-weight-regular text-center">
                            {{ person.name }}
                          </div>
                        </v-card-title>
                        <v-card-text class="mt-n4">
                          <div class="fix text-sm-subtitle-1 text-subtitle-2 font-weight-regular text-center">
                            {{ person.position }}
                          </div>
                        </v-card-text>
                        <v-overlay absolute opacity="0.90" :value="hover">
                          <v-card-text class="text-sm-body-2 text-caption text-center px-6" :style="$vuetify.breakpoint.xs ? 'line-height: 16px' : ''">
                            {{ person.description }}
                          </v-card-text>
                          <div class="text-center">
                            <v-btn color="primary" icon :href="person.linkedin" target="_blank">
                              <v-icon>mdi-linkedin</v-icon>
                            </v-btn>
                          </div>
                        </v-overlay>
                      </v-card>
                    </v-hover>
                  </v-flex>
                </v-layout>
                <div class="mt-12 mb-12">
                  <v-btn
                          color="orange"
                          class="white--text"
                          @click="typeformCall()"
                          x-large
                  >
                    Join the team
                  </v-btn>
                </div>
              </v-container>
            </v-flex>
          </v-layout>

        </v-container>
      </section>

      <Footer />

    </v-card>

</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { typeform } from "../plugins/typeform.js";
import Calendly from "../components/calendly";

export default {
  name: "Home",
  components: {
    Calendly,
    Navbar,
    Footer
  },

  data() {
    return {
      hashSection: null,
      windowHeight: 0,
      scrolled: false,
      people: [
        {
          name: "Ricardo Pereira",
          position: "The pragmatic strategist",
          photo: "ricardo",
          linkedin: "https://www.linkedin.com/in/ricardojgpereira/",
          description:
            "I come from a mixed Engineering and Management background. I have crossed paths with Data Science years ago and since then it's been more of a passion than a job. With the interesection of my background and my interests, it is very likely you'll see me brainstorming with your team about crazy ideas as well as writing code for your prototype.",
        },
        {
          name: "Nuno Reis",
          position: "The outgoing salesman",
          photo: "nuno",
          linkedin: "https://www.linkedin.com/in/nunocmreis/",
          description:
            "With a passion for engineering, I started my career with a 3 years experience in the industry. I then moved on to Data Science and had already founded two companies, where I fell in love for education, before starting Data Science consultancy. We'll cross paths if you need help on training your team or solving a data-driven business problem.",
        },
        {
          name: "Luís Sousa",
          position: "The no-filter developer",
          photo: "luis",
          linkedin: "https://www.linkedin.com/in/lu%C3%ADs-miguel-sousa-088641183/",
          description:
            "Luís has been working as a full-stack developer for more than 10 years. Besides Mathematics, he has been evolved with Physics and Radiation in the last years, where he developed software to be deployed in Africa for the oil and gas industry. Lately, he was a Lead Data Scientist at OutSystems and he is teaching Python at Rumos.",
        },
      ],
      values: [
        {
          name: "No hard feelings",
          description:
            "Feedback is highly welcomed. We ask our clients to do it and we do it as well. Our goal is to help.",
        },
        {
          name: "We love troubles",
          description:
            "Which means we need to be open-minded and flexible to be constantly uncomfortable searching for new solutions.",
        },
        // {
        //   name: 'Never say "Not my problem"',
        //   description:
        //     '"Not my problem" is something our team avoids. If there is something we can help you with we are ok with the extra hours.',
        // },
        {
          name: "Learning Continuously",
          description:
            "The field we work changes ridiculously fast. We create incentives and have the structure to make our team able to learn daily.",
        },
        // {
        //   name: "Brainstorm often",
        //   description:
        //     "New ideas are key to go bigger so. In the process, lots of stupid ideas get in the mix. That's fine, please keep the stupid ideas coming.",
        // },
        {
          name: "Optimism is preferred",
          description:
            "As entrepreneurs and being used to navigate environments without already pre-established solutions, we survive by being optimists. We like that.",
        },
      ],
    };
  },
  methods: {
    typeformCall() {
      typeform();
    },
    goToSection(hashSection) {
      var elmnt = document.getElementById(hashSection);
      elmnt.scrollIntoView({ behavior: "smooth" });
    },
    menuItems() {
      return this.menu;
    },
    handleResize() {
      this.windowHeight = window.innerHeight;
    },
    handleScroll() {
      this.scrolled = window.scrollY > window.innerHeight - 100;
    },

    getCompImgUrl(pet) {
      var images = require.context("../assets/companies/", false, /\.png$/);
      return images("./" + pet + ".png");
    },
    getServiceImgUrl(pet) {
      var images = require.context("../assets/services/", false, /\.png$/);
      return images("./" + pet + ".png");
    },
    getTeamImgUrl(pet) {
      var images = require.context("../assets/img/faces/", false, /\.png$/);
      return images("./" + pet + ".png");
    },
  },
  created: function() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },

  destroyed: function() {
    window.removeEventListener("resize", this.handleResize);
  },

  computed: {
    headerStyle() {
      return {
        backgroundImage: "url(../assets/blue.jpg)",
      };
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
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
