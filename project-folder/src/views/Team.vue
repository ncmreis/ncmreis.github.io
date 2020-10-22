<template>
  <div>
    <Header
      title="Get to know our team, culture and cool avatars."
      descriptionInitial="We are a mix of"
      descriptionBlue="good old friends, data geeks and technology enablers"
      descriptionFinal="looking for a sustainable and mentally sane business model."
      button="Check our culture"
    ></Header>

    <v-card>
      <Navbar
        v-if="scrolled"
        :class="{
          nav: $vuetify.breakpoint.smAndUp,
          'nav-xs': $vuetify.breakpoint.xs,
        }"
        background="back_4"
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
                <v-card-title
                  primary-title
                  class="justify-center fix layout mb-6"
                >
                  <p class="display-2 text-center" style="font-weight: 600">
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
                  <p class="text-center headline">
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
          <div class=" mb-12">
            <v-btn class="body-1" color="primary" x-large to="/about">
              Reach out to us
            </v-btn>
            <p class="caption mt-1" style="opacity: 0.4">
              Visit us and grab a coffee
            </p>
          </div>
        </v-container>
      </section>

      <section id="#1" style="background-color: #F6F9FD">
        <v-container class="text-center">
          <v-layout row wrap class="my-12" align-center justify-center>
            <v-flex md10 xs12>
              <v-card flat class="transparent justify-center text-center">
                <v-card-title
                  primary-title
                  class="justify-center fix layout mt-6 mb-12 "
                >
                  <p class="display-2 text-center" style="font-weight: 600">
                    The DNA behind Thorly
                  </p>
                </v-card-title>
                <v-card-text>
                  <p class="text-center headline mb-6">
                    We believe a team is all about
                    <b style="color: #2C81D6">people with the right values</b>
                    and it is the key-factor to create the
                    <b>open-minded, friendly and creative environment</b> we
                    have.
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md10 xs12>
              <v-container grid-list-xl>
                <v-layout row wrap class="d-flex align-stretch">
                  <v-flex v-for="value in values" md6 sm6 xs12>
                    <v-card flat class="transparent fill-height">
                      <v-card-title class="headline justify-center fix">
                        <b>{{ value.name }}</b>
                      </v-card-title>
                      <v-card-text class="subtitle-1">
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
          <v-layout row wrap class="my-12" align-center justify-center>
            <v-flex md10 xs12>
              <v-card flat class="transparent justify-center text-center">
                <v-card-title
                  primary-title
                  class="justify-center fix layout mt-6 mb-12 "
                >
                  <p class="display-2 text-center" style="font-weight: 600">
                    Hello, world
                  </p>
                </v-card-title>
                <v-card-text>
                  <p class="text-center headline mb-6">
                    We are a group of data-driven entrepreneurs working in
                    <b
                      >Engineering & Data Science, with a focus on technology,
                      data and machine learning.
                    </b>
                    <b style="color: #2C81D6">Nice to e-meet you!</b>
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md10 xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-start>
                  <v-flex v-for="person in people" md4 xs12>
                    <v-hover v-slot:default="{ hover }">
                      <v-card flat class="transparent pb-6">
                        <v-card-text class="text-center">
                          <v-avatar size="200">
                            <img
                              contain
                              :src="getTeamImgUrl(person.photo)"
                              :alt="person.photo"
                            />
                          </v-avatar>
                        </v-card-text>
                        <v-card-title class="fix layout justify-center">
                          <div class="fix headline text-center">
                            {{ person.name }}
                          </div>
                        </v-card-title>
                        <v-card-text class="mt-n4">
                          <div class="fix subtitle-1 text-center">
                            {{ person.position }}
                          </div>
                        </v-card-text>
                        <v-overlay absolute opacity="0.90" :value="hover">
                          <v-card-text class="text-center px-6">
                            {{ person.description }}
                          </v-card-text>
                          <div class="text-center">
                            <v-btn class="mr-1" icon color="#2C81D6"
                              ><v-icon size="24px">mdi-linkedin</v-icon></v-btn
                            >
                            <v-btn class="mr-1" icon color="#2C81D6"
                              ><v-icon size="24px">mdi-instagram</v-icon></v-btn
                            >
                            <v-btn icon color="#2C81D6"
                              ><v-icon size="24px">mdi-facebook</v-icon></v-btn
                            >
                          </div>
                        </v-overlay>
                      </v-card>
                    </v-hover>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
          <div class=" mb-12">
            <v-btn
              class="body-1"
              color="primary"
              @click="typeformCall()"
              x-large
            >
              Join us
            </v-btn>
          </div>
        </v-container>
      </section>
    </v-card>

    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { typeform } from "../plugins/typeform.js";

export default {
  name: "Home",
  components: {
    Header,
    Navbar,
    Footer,
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
          description:
            "I come from a mixed Engineering and Management background. I have crossed paths with Data Science years ago and since then it's been more of a passion than a job. With the interesection of my background and my interests, it is very likely you'll see me brainstorming with your team about crazy ideas as well as writing code for your prototype.",
        },
        {
          name: "Nuno Reis",
          position: "The outgoing salesman",
          photo: "nuno",
          description:
            "Nuno started his career as top student at Técnico Lisboa, where he did research before working for 3 years in the industry. Then he moved on to Data Science and has already founded two startups while he was doing Data Science & Data Architecture consultancy. He is currently teaching Data Science fundamentals at EDIT.",
        },
        {
          name: "Luís Sousa",
          position: "The no-filter developer",
          photo: "luis",
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
            "The field we work changes ridicously fast. We create incentives and have the structure to make our team able to learn daily.",
        },
        // {
        //   name: "Brainstorm often",
        //   description:
        //     "New ideas are key to go bigger so. In the process, lots of stupid ideas get in the mix. That's fine, please keep the stupid ideas coming.",
        // },
        {
          name: "Optimists are prefered",
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
      var images = require.context("../assets/img/faces/", false, /\.jpeg$/);
      return images("./" + pet + ".jpeg");
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
    },
    function() {
      var qs,
        js,
        q,
        s,
        d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = "typeform-share",
        b = "https://embed.typeform.com/";
      if (!gi.call(d, id)) {
        js = ce.call(d, "script");
        js.id = id;
        js.src = b + "embed.js";
        q = gt.call(d, "script")[0];
        q.parentNode.insertBefore(js, q);
      }
    },
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
