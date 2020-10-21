<template>
  <div>
    <Header
      title="Rapid prototyping for Data Science solutions"
      descriptionInitial=""
      descriptionBlue="We are a Data Science & Engineering team for hire."
      descriptionFinal="We provide services to help organizations increase their data potential"
      button="Know more"
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

      <section id="#1">
        <v-container class="text-center">
          <v-layout
            row
            wrap
            class="my-12 white--text"
            align-center
            justify-center
          >
            <v-flex md10 xs12 class="my-12">
              <v-card flat class="transparent">
                <v-card-title
                  primary-title
                  class="justify-center fix layout mb-12"
                >
                  <p class="display-2 text-center" style="font-weight: 600">
                    Iterating as quickly as possible
                  </p>
                </v-card-title>
                <v-card-text>
                  <p class="text-center headline"></p>

                  <p class="text-center headline">
                    We work with you on
                    <b style="color: #2C81D6"
                      >out-of-the-box thinking sessions</b
                    >
                    to come up with creative solutions for your problems and
                    implement them in
                    <b style="color: #2C81D6"
                      >small loops of planning, building and testing</b
                    >
                    that keeps us closer to you and your organization's goals.
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex md12 xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-start>
                  <v-flex v-for="service in services" md3 sm6 xs12>
                    <v-hover v-slot:default="{ hover }">
                      <v-card flat class="transparent">
                        <v-img
                          height="200"
                          contain
                          :src="getServiceImgUrl(service.photo)"
                          class="text-center"
                        ></v-img>
                        <v-card-title
                          class="headline fix layout justify-center"
                        >
                          <b style="">{{ service.name }}</b>
                        </v-card-title>
                        <v-card-text class="subtitle-1">
                          {{ service.description }}
                        </v-card-text>
                        <v-overlay absolute opacity="0.95" :value="hover">
                          <v-card-text class="subtitle-1 text-center pt-0">
                            <b style="color: #2C81D6">{{ service.target }}</b>
                            <br />
                            {{ service.largeDescription }}
                          </v-card-text>
                          <v-btn
                            color="primary"
                            :to="'/services/' + service.photo + '/'"
                            >Know more</v-btn
                          >
                        </v-overlay>
                      </v-card>
                    </v-hover>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
          <v-btn class="body-1 mb-12" color="primary" x-large to="/services">
            Explore our services
          </v-btn>
        </v-container>
      </section>

      <section id="#clients" style="background-color: #F6F9FD">
        <v-container class="text-center">
          <v-layout row wrap class="my-12" align-center justify-center>
            <v-flex md8 xs12 class="my-12">
              <v-card flat class="transparent">
                <v-card-title
                  primary-title
                  class="justify-center fix layout mb-12"
                >
                  <p class="display-2 text-center" style="font-weight: 600">
                    Part of our story
                  </p>
                </v-card-title>
                <v-card-text>
                  <p class="text-center headline">
                    Get to know some of the
                    <b style="color: #2C81D6"
                      >great & innovative organizations</b
                    >
                    that made us grow in the recent past.
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex md10 xs11 class="mb-6">
              <v-container grid-list-xl align-center>
                <v-layout row wrap align-center>
                  <v-flex v-for="company in companies" sm3 xs4 class="py-5">
                    <v-img
                      height="75"
                      contain
                      :src="getCompImgUrl(company.photo)"
                      class="text-center"
                    ></v-img>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section id="#jumpstart">
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
                    Simplifying the sales process
                  </p>
                </v-card-title>
                <v-card-text>
                  <p class="text-center headline">
                    We built a set of sessions to jumpstart your data culture in
                    different ways, get closer to your team and
                    <b style="color: #2C81D6"
                      >show you some of the work we can do together</b
                    >
                    without the hassle of multiple rounds of email.
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex md12 xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-start>
                  <v-flex v-for="useCase in useCases" md3 sm6 xs12>
                    <v-hover v-slot:default="{ hover }">
                      <v-card flat class="transparent">
                        <v-img
                          contain
                          :src="getCaseImgUrl(useCase.photo)"
                          class="text-center align-end"
                          style="border-radius: 5px"
                        ></v-img>
                        <v-card-title class="layout subtitle-2 text-left pb-0">
                          {{ useCase.title }}
                        </v-card-title>
                        <v-card-text class="caption layout text-left">
                          {{ useCase.tags }}
                        </v-card-text>
                      </v-card>
                    </v-hover>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
          <div class=" mb-12">
            <!-- <v-btn class="body-1" color="primary" x-large>
              I want to jumpstart
            </v-btn> -->
            <calendly
              call="https://calendly.com/ricardo-thorly-education/30min"
              :xlarge="true"
              description="Discovery call"
            ></calendly>

            <p class="caption mt-1" style="opacity: 0.4">
              Get the right option for your organization
            </p>
          </div>
        </v-container>
      </section>

      <section id="#team" style="background-color: #F6F9FD">
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
                    Be part of team Thor
                  </p>
                </v-card-title>
                <v-img
                  max-height="250"
                  contain
                  src="../assets/team.png"
                  class="text-center align-end"
                ></v-img>
                <v-card-text>
                  <p class="text-center headline">
                    We are a community of friendly and creative people with a
                    <b style="color: #2C81D6"
                      >flexible lifestyle, eager to be challenged everyday and
                      have a good salary</b
                    >. If this is for you, consider joining and growing along
                    us!
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <div class=" mb-12">
            <v-btn class="body-1" color="primary" @click="typeform()" x-large>
              Join the team
            </v-btn>
            <p class="caption mt-1" style="opacity: 0.4">
              and get your avatar too
            </p>
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
import Calendly from "../components/calendly";
import * as typeformEmbed from "@typeform/embed";

export default {
  name: "Home",
  components: {
    Header,
    Navbar,
    Footer,
    Calendly,
  },

  data() {
    return {
      hashSection: null,
      windowHeight: 0,
      scrolled: false,
      services: [
        {
          name: "Strategy",
          photo: "strategy",
          description:
            "Define a plan for your data considering multiple approaches",
          target:
            "Do you have data but you are struggling to establish a plan to solve your business problems?",
          largeDescription:
            "We can help you by developing a strategic plan, by evaluating your possibilities with you and define the best path for your needs.",
        },
        {
          name: "Consulting",
          photo: "consulting",
          description:
            "Build data-driven insights to speed up your business potential",
          target: "Do you want to improve your decision making with data?",
          largeDescription:
            "We work with Data Science & Visualizations most modern techniques to help you getting data-insights and improve your business decisions.",
        },
        {
          name: "Development",
          photo: "development",
          description: "Design a tool/product to take advantage from your data",
          target:
            "Do you have plan to develop an internal tool or product using your data?",
          largeDescription:
            'We can get you there faster through a collaborative, iterative and "prototype first" framework we use for product development.',
        },
        {
          name: "Training",
          photo: "training",
          description:
            "Increase your team's data know-how with a tailored academy",
          target:
            "Do you want to increase your team's data literacy and culture?",
          largeDescription:
            "We have done several tailor-made bootcamps, workshops and fast ramp-ups for our partners.",
        },
      ],
      companies: [
        { name: "Católica Lisbon", photo: "catolica" },
        { name: "Kepler Forensic Partners", photo: "kepler" },
        { name: "Chartyn", photo: "chartyn" },
        { name: "Outsystems", photo: "outsystems" },
        { name: "Técnico Lisboa", photo: "ist" },
        { name: "Teixeira Duarte", photo: "td" },
        { name: "EDIT", photo: "edit" },
        { name: "ELU", photo: "elu" },
        { name: "Rumos", photo: "rumos" },
        { name: "NOVA SBE", photo: "nova" },
        { name: "ISQ", photo: "isq" },
        { name: "Tranquilidade", photo: "tranquilidade" },
      ],
      useCases: [
        {
          title: "Data strategy in a nutshell",
          tags: "Strategy, Consulting, Data science, 1h",
          photo: "loki",
        },
        {
          title: "Make your data talk",
          tags: "Storytelling, Data Visualization, 1h",
          photo: "nova",
        },
        {
          title: "Building a cockpit for your data",
          tags: "Prototype, Engineering, 2h",
          photo: "chartyn",
        },
        {
          title: "Predict churn in a blink",
          tags: "Consulting, Training, Data science, 2h",
          photo: "catolica",
        },
      ],
    };
  },
  methods: {
    typeform() {
      const url = "https://rgilpereira.typeform.com/to/pJsbSIXz";
      const options = {
        mode: "drawer_right",
      };
      typeformEmbed.makePopup(url, options).open();
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
    getCaseImgUrl(pet) {
      var images = require.context("../assets/cases/", false, /\.jpg$/);
      return images("./" + pet + ".jpg");
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
