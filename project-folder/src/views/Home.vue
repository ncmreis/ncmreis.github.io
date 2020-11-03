<template>
  <div>
    <Header
            id="top" name="top"
            title="We build data solutions for business problems"
            descriptionInitial="We are a"
            descriptionBlue="Data Science & Engineering team for hire"
            descriptionFinal="with a human-centered and design thinking approach."
    ></Header>

    <v-card tile class="transparent">
      <Navbar
        v-if="scrolled"
        :class="{
          nav: $vuetify.breakpoint.smAndUp,
          'nav-xs': $vuetify.breakpoint.xs
        }"
        background="back_4"
        height="70"
        logo="thorly_logo_white"
        textColor="#FFFFFF"
        colorButton="orange"
      ></Navbar>

      <section id="services" name="services">
        <v-container class="text-center">
          <v-layout
            row
            wrap
            class="mb-sm-12 white--text align-center"
            align-center
            justify-center
          >
            <v-flex  md10 xs12>
              <v-container class="align-center">
                <v-layout row class="justify-center my-sm-6">
                  <v-flex v-for="service in services" :key="service.name" xs3>
                    <v-card tile flat v-on:click="show = service.name">
                      <div>
                        <v-avatar
                                :size="$vuetify.breakpoint.xs ? 50: 100"
                                :class="show === service.name ? 'elevation-15 mt-6' : 'mt-6'">
                          <img contain height="100%" :src="getServiceImgUrl(service.photo)">
                        </v-avatar>
                      </div>
                      <v-card-title
                              id="#service"
                              class="justify-center text-sm-h6 text-caption mx-0 px-0"
                              :style="show === service.name ? {'color': service.color} : {'color': '#656464'}"><b>{{ service.name }}</b>
                      </v-card-title>
                      <v-system-bar
                              height="5"
                              :color="show === service.name ? service.color : 'gray'"
                               ></v-system-bar>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>

            <v-flex md12 xs12 v-for="service in services" :key="service.name" v-if="show === service.name">
              <v-container grid-list-xl>
                <v-layout row class="align-center justify-center">
                  <v-flex md6 xs12 class="pb-0">
                    <v-card flat class="transparent text-left py-0">
                      <v-card-title class="text-sm-h4 text-h5 fix" style="font-weight: 500;">
                        <a :style="{'color': service.color}">{{ service.description }}</a>
                      </v-card-title>
                      <v-card-text class="text-sm-h6 text-subtitle-1" style="font-weight: 400">
                        {{ service.largeDescription }}
                        <a class="hidden-md-and-up" :style="{'color': service.color}">Check some <b>{{ service.photo }}</b> use cases:</a>
                      </v-card-text>
                    </v-card>
                  </v-flex>

                  <v-flex md6 xs12>
                    <v-container grid-list-xl>
                      <v-layout row class="d-flex align-stretch">
                        <v-flex v-for="caso in service.cases" sm6 xs12>
                          <v-card class="fill-height text-left elevation-12">
                            <v-card-title class='fix' style="font-size: 16px; line-height: 24px; letter-spacing: 0.15px; color: #000000; opacity: 0.75">{{ caso.title }}</v-card-title>
                            <v-card-text style="font-size: 14px; line-height: 20px; letter-spacing: 0.25px">{{ caso.goals }}</v-card-text>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-flex>
                </v-layout>
              </v-container>
              <img style="margin-top: -150px; width: 100%; max-width: 800px; object-fit: cover;" class="align-center" :src=getBlobImgUrl(service.photo)>
            </v-flex>

            <v-flex md10 xs12 class="hidden-sm-and-up">
              <v-container class="align-center pb-0">
                <v-layout row class="justify-center">
                  <v-flex v-for="service in services" :key="service.name" xs3>
                    <v-card tile flat v-on:click="show = service.name, goToSection('#service')">
                      <v-system-bar
                              height="5"
                              :color="show === service.name ? service.color : 'gray'"
                      ></v-system-bar>
                      <v-card-title
                              class="justify-center text-sm-h6 text-caption mx-0 px-0"
                              :style="show === service.name ? {'color': service.color} : {'color': '#656464'}"><b>{{ service.name }}</b>
                      </v-card-title>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>

          </v-layout>
        </v-container>
      </section>

      <section id="#process" style="background-color: #F6F9FD">
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
                  class="justify-center fix layout mb-sm-6"
                >
                  <p class="text-sm-h3 text-h4 text-center" style="font-weight: 600">
                    Human-centered process
                  </p>
                </v-card-title>
                <v-card-text>
                  <p class="text-center text-sm-h5 text-h6" style="font-weight: 400">
                    Iterate faster. Test sooner.
                      <b style="color: #2C81D6">Get quick wins</b>
                  </p>
                </v-card-text>

                <v-img
                        max-height="300px"
                        contain
                        src="../assets/process.png"
                        class="text-center align-end mb-12"
                ></v-img>

                <v-btn
                        color="primary"
                        x-large
                        @click="overlay = !overlay"
                >
                  Know more
                </v-btn>
                <p class="caption mt-1" style="opacity: 0.4">
                  * our process at a glance
                </p>
                <v-overlay
                        :value="overlay"
                        opacity="0.75"
                        class="justify-center"
                        z-index="15"
                >
                  <v-col class="align-center">
                    <v-row class="justify-end">
                      <v-icon
                              large
                              @click="overlay=false"
                      >mdi-close</v-icon>
                    </v-row>
                    <v-row>
                      <video
                              autoplay
                              controls
                              class="text-center"
                              style="max-width: 90vw; max-height: 70vh"
                              @ended="overlay=false"
                      >
                        <source src="../assets/process.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                      </video>
                    </v-row>
                  </v-col>


                </v-overlay>

              </v-card>
            </v-flex>

          </v-layout>
        </v-container>
      </section>

      <section id="#call" style="background-color: #1667C0">
        <v-container class="text-center">
          <v-layout
                  row
                  wrap
                  class="mt-12 white--text"
                  align-center
                  justify-center
          >
            <v-flex md10 xs12>
              <v-card flat class="transparent">
                <v-card-title
                        primary-title
                        class="justify-center fix layout"
                >
                  <p class="white--text text-sm-h3 text-h4 text-center" style="font-weight: 600">
                    Let's brainstorm!
                  </p>
                </v-card-title>
                <v-card-text>
                  <p class="white--text text-center text-sm-h5 text-h6" style="font-weight: 400">
                    Talk to us and schedule your <b style="color: #FFFFFF">free creative session</b>
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <div class="mt-6 mb-12">
            <calendly
                    call="https://calendly.com/ricardo-thorly-education/30min"
                    icon="mdi-phone"
                    :xlarge="true"
                    description="Schedule a call"
                    button="orange"
                    class="justify-center"
            ></calendly>
          </div>
        </v-container>
      </section>

      <section id="#team">
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
                  <p class="text-sm-h3 text-h4 text-center" style="font-weight: 600">
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
                  <p class="text-center text-sm-h5 text-h6" style="font-weight: 400">
                    We are a community of friendly and creative people with a
                    <b style="color: #2C81D6"
                      >flexible lifestyle, eager to be challenged everyday</b
                    >. If this is for you, consider joining and growing along
                    us!
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <div class=" mb-12">
            <v-btn
              color="primary"
              @click="typeformCall()"
              x-large
            >
              Join the team
            </v-btn>
            <p class="caption mt-1" style="opacity: 0.4">
              and get your avatar too
            </p>
          </div>
        </v-container>
      </section>

      <section id="#story" style="background-color: #F6F9FD">
        <v-container class="text-center">
          <v-layout row wrap class="my-6" align-center justify-center>
            <v-flex md12 xs12>
              <v-card flat class="transparent">
                <v-card-text>
                  <p class="text-center text-sm-h5 text-h6" style="font-weight: 400">
                    Part of our story
                  </p>
                </v-card-text>
              </v-card>

              <v-slide-group
                      v-model="model"
                      show-arrows
                      class="my-4 mx-0 px-0"
              >
                <v-slide-item
                        v-for="(company,index) in companies"
                        :key="index"
                        v-slot="{ active, toggle }"
                        mx-0
                >
                  <v-card flat
                          class="mx-sm-6 mx-2 transparent layout align-center"
                          @click="toggle"
                  >
                    <img
                            :src="getCompImgUrl(company.photo)"
                            :width="$vuetify.breakpoint.xs ? 90: 150"
                            contain
                    >
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-flex>
          </v-layout>
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
import slider from "../components/slider";
import { typeform } from "../plugins/typeform.js";

export default {
  name: "Home",
  components: {
    Header,
    Navbar,
    Footer,
    Calendly,
    slider
  },

  data() {
    return {
      show: "Strategy",
      hashSection: null,
      windowHeight: 0,
      scrolled: false,
      model: null,
      dialog: false,
      overlay: false,
      services: [
        {
          name: "Strategy",
          color: "#FFB347",
          photo: "strategy",
          description:
            "We help you with planning sessions, strategic reports and mentoring.",
          target:
            "Do you have data but you are struggling to establish a plan to solve your business problems?",
          largeDescription:
            "A few hours on the whiteboard can save months of work. We try to bring this mindset to our clients for every work we do.",
          cases: [
            {title: "Design Thinking Approach", goals: "Fast problem definition\n" + "\n" + "Empathy with the user\n" + "\n" + "Fast cycles "},
            {title: "Project & Product Scope", goals: "Company ACME was trying to understand how they could leverage their data to retain more customers."},
            {title: "Quick wins", goals: "Quick wins goes first, before big planning. Focus on defining valuable problems to unlock business value."},
            {title: "Data planning", goals: "Company ACME was trying to understand how they could leverage their data to retain more customers."}
          ]
        },
        {
          name: "Analytics",
          color: "#A7A0E0",
          photo: "analytics",
          description:
                  "We help you with planning sessions, strategic reports and mentoring.",
          target:
                  "Do you have data but you are struggling to establish a plan to solve your business problems?",
          largeDescription:
                  "A few hours on the whiteboard can save months of work. We try to bring this mindset to our clients for every work we do.",
          cases: [
            {title: "Data Analysis", goals: "Fast problem definition\n" + "\n" + "Empathy with the user\n" + "\n" + "Fast cycles "},
            {title: "Machine Learning", goals: "Company ACME was trying to understand how they could leverage their data to retain more customers."},
            {title: "Business Insights", goals: "Quick wins goes first, before big planning. Focus on defining valuable problems to unlock business value."},
            {title: "Visualization", goals: "Company ACME was trying to understand how they could leverage their data to retain more customers."}
          ]
        },
        {
          name: "Engineering",
          color: "#FF9E7E",
          photo: "engineering",
          description:
                  "We help you with planning sessions, strategic reports and mentoring.",
          target:
                  "Do you have data but you are struggling to establish a plan to solve your business problems?",
          largeDescription:
                  "A few hours on the whiteboard can save months of work. We try to bring this mindset to our clients for every work we do.",
          cases: [
            {title: "Developing Data Tools", goals: "Fast problem definition\n" + "\n" + "Empathy with the user\n" + "\n" + "Fast cycles "},
            {title: "Prototype / MVP", goals: "Company ACME was trying to understand how they could leverage their data to retain more customers."},
            {title: "Data Pipelines", goals: "Quick wins goes first, before big planning. Focus on defining valuable problems to unlock business value."},
            {title: "...", goals: "Company ACME was trying to understand how they could leverage their data to retain more customers."}
          ]
        },
        {
          name: "Training",
          color: "#FA86B7",
          photo: "training",
          description:
                  "We help you with planning sessions, strategic reports and mentoring.",
          target:
                  "Do you have data but you are struggling to establish a plan to solve your business problems?",
          largeDescription:
                  "A few hours on the whiteboard can save months of work. We try to bring this mindset to our clients for every work we do.",
          cases: [
            {title: "Hackathon for culture", goals: "Fast problem definition\n" + "\n" + "Empathy with the user\n" + "\n" + "Fast cycles "},
            {title: "Jumpstarts", goals: "Company ACME was trying to understand how they could leverage their data to retain more customers."},
            {title: "Tailor-made programs", goals: "Quick wins goes first, before big planning. Focus on defining valuable problems to unlock business value."},
            {title: "Bootcamps", goals: "Company ACME was trying to understand how they could leverage their data to retain more customers."}
          ]
        },
      ],
      companies: [
        { name: "Católica Lisbon", photo: "catolica" },
        { name: "Kepler Forensic Partners", photo: "kepler" },
        { name: "Chartyn", photo: "chartyn" },
        { name: "NOVA SBE", photo: "nova" },
        { name: "Outsystems", photo: "outsystems" },
        { name: "Tranquilidade", photo: "tranquilidade" },
        { name: "Técnico Lisboa", photo: "ist" },
        { name: "Teixeira Duarte", photo: "td" },
        { name: "ISQ", photo: "isq" }

        // { name: "EDIT", photo: "edit" },
        // { name: "ELU", photo: "elu" },
        // { name: "Rumos", photo: "rumos" },
      ],
      useCases: [
        {
          title:
            "Creative Session - Identify data problems and prototype tools",
          overlayTitle: "Identify problems and prototype tools",
          tags: "Design Thinking, Strategy, 2h",
          largeDescription:
            "A design thinking session to show you how to get value out of your data and how to prototype technological solutions.",
          photo: "loki"
        },
        {
          title: "Data Session - Storytelling with Data",
          overlayTitle: "Make your data sing",
          tags: "Visualization and Storytelling, 1h",
          largeDescription:
            "We show you what the best practices of Data Visualization and Storytelling can do for your internal communication and decision making.",
          photo: "nova"
        },
        {
          title: "Technology Demo - The art of prototyping",
          overlayTitle: "Live demo for Analytics",
          tags: "Prototype, Engineering, 2h",
          largeDescription:
            "In this session we can show you what are the (typically) necessary decisions and tools to build a valuable prototype.",
          photo: "chartyn"
        },
        {
          title:
            "Data Session - How can Data Science help my business problems?",
          overlayTitle: "Improving client retention",
          tags: "Consulting, Data science, 2h",
          largeDescription:
            "We will walk you through a real life business case using DS to improve client retention. This is a session open to technical and non-technical people.",
          photo: "catolica"
        }
      ]
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
      this.scrolled = window.scrollY > window.innerHeight - 70;
    },

    getCompImgUrl(pet) {
      var images = require.context("../assets/companies/", false, /\.png$/);
      return images("./" + pet + ".png");
    },
    getServiceImgUrl(pet) {
      var images = require.context("../assets/services/", false, /\.png$/);
      return images("./" + pet + ".png");
    },
    getBlobImgUrl(pet) {
      var images = require.context("../assets/services/", false, /\.png$/);
      return images("./blob_" + pet + ".png");
    },
    getCaseImgUrl(pet) {
      var images = require.context("../assets/cases/", false, /\.jpg$/);
      return images("./" + pet + ".jpg");
    },
    getTeamImgUrl(pet) {
      var images = require.context("../assets/img/faces/", false, /\.jpeg$/);
      return images("./" + pet + ".jpeg");
    }
  },
  created: function() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },

  destroyed: function() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    var section=this.$router.currentRoute.hash.replace("#", "");
    if (section)
      this.$nextTick(()=> window.document.getElementById(section).scrollIntoView());
  },

  computed: {
    headerStyle() {
      return {
        backgroundImage: "url(../assets/blue.jpg)"
      };
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
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
