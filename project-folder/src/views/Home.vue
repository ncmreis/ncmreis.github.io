<template>
  <div>
    <Header
      title="Rapid prototyping for ML/AI solutions"
      descriptionInitial="Thorly provides"
      descriptionBlue="Data Science & Data Engineering"
      descriptionFinal="services to help companies increase their data potential"
      button="Know more"
    ></Header>

    <v-card>
      <Navbar
        v-if="scrolled"
        :class="{
          nav: $vuetify.breakpoint.smAndUp,
          'nav-xs': $vuetify.breakpoint.xs
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
                    Get your job done in 4 weeks
                  </p>
                </v-card-title>
                <v-card-text>
                  <p class="text-center headline mt-12 mb-6">
                    Our services were designed to develop scalable solutions on
                    <b style="color: #2C81D6">sprints of 2-4 weeks</b>. together
                    with your team and
                    <b style="color: #2C81D6"
                      >without future reliance on us or other external
                      parties</b
                    >.
                  </p>
                  <p class="text-center headline">
                    Our<b style="color: #2C81D6"> full-stack data know-how</b>
                    allows us to develop end-to-end projects. From
                    <b>strategy</b> definition to <b>implementation</b> of
                    innovative solutions.
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
                    The companies that trust us
                  </p>
                </v-card-title>
                <v-card-text>
                  <p class="text-center headline">
                    Get to know some of the
                    <b style="color: #2C81D6"
                      >great & innovative organizations</b
                    >
                    that make us grow everyday. More than clients, these are
                    <b>our partners</b>.
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

      <section id="#cases">
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
                    Some non-confidential projects
                  </p>
                </v-card-title>
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
          <v-btn class="body-1 mb-12" color="primary" x-large to="/services">
            Ready for your project?
          </v-btn>
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
                    We are a community of
                    <b style="color: #2C81D6">friendly and creative people</b>
                    with a
                    <b
                      >flexible lifestyle, eager to be challenged everyday and
                      make good money</b
                    >. If this is for you, consider to join and grow along us!
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
          <div class=" mb-12">
            <v-btn class="body-1" color="primary" x-large to="/about">
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

    <v-flex md10 sm12 xs12>
      <v-container grid-list-xl>
        <v-layout row wrap align-start>
          <v-flex v-for="challenge in challenges" md4 sm6 xs12>
            <v-card hover outlined class="transparent py-6">
              <v-card-title class="headline fix layout justify-center pb-0">
                <b style="color: #2C81D6">{{ challenge.solution }}</b>
              </v-card-title>
              <v-card-text class="overline py-0 red--text" style="opacity: 0.5">
                <s>{{ challenge.name }}</s>
              </v-card-text>
              <v-card-text
                fill-height
                class="subtitle-1 text-left text-justify"
              >
                {{ challenge.description }}
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Navbar,
    Footer
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
            "We can help you by developing a strategic plan, by evaluating your possibilities with you and define the best path for your needs."
        },
        {
          name: "Consulting",
          photo: "consulting",
          description:
            "Build data-driven insights to speed up your business potential",
          target: "Do you want to improve your decision making with data?",
          largeDescription:
            "We work with Data Science & Visualizations most modern techniques to help you getting data-insights and improve your business decisions."
        },
        {
          name: "Development",
          photo: "development",
          description: "Design a tool/product to take advantage from your data",
          target:
            "Do you have plan to develop an internal tool or product using your data?",
          largeDescription:
            'We can get you there faster through a collaborative, iterative and "prototype first" framework we use for product development.'
        },
        {
          name: "Training",
          photo: "training",
          description:
            "Increase your team's data know-how with a tailored academy",
          target:
            "Do you want to increase your team's data literacy and culture?",
          largeDescription:
            "We have done several tailor-made bootcamps, workshops and fast ramp-ups for our partners."
        }
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
        { name: "Tranquilidade", photo: "tranquilidade" }
      ],
      useCases: [
        {
          title: "Gamification 4 universities",
          tags: "Development, data engineering",
          photo: "nova",
          description:
            "Ricardo has co-founded several organisations and companies, to help solving problems that are data related and enhancing different communities. Now he is teaching Python at Nova SBE and Data science at ELU and Rumos. Ricardo has been contracting for two years, working closely with some of the biggest tech companies in PT."
        },
        {
          title: "Personalize education w/ AI",
          tags: "Development, data science & engineering",
          photo: "loki",
          description:
            "Nuno started his career as top student at Técnico Lisboa, where he did research before working for 3 years in the industry. Then he moved on to Data Science and has already founded two startups while he was doing Data Science & Data Architecture consultancy. He is currently teaching Data Science fundamentals at EDIT."
        },
        {
          title: "Churn prediction",
          tags: "Consulting, data science & engineering",
          photo: "chartyn",
          description:
            "Luís has been working as a full-stack developer for more than 10 years. Besides Mathematics, he has been evolved with Physics and Radiation in the last years, where he developed software to be deployed in Africa for the oil and gas industry. Lately, he was a Lead Data Scientist at OutSystems and he is teaching Python at Rumos."
        },
        {
          title: "Data Science Hackathon",
          tags: "Training, data science",
          photo: "catolica",
          description:
            "Luís has been working as a full-stack developer for more than 10 years. Besides Mathematics, he has been evolved with Physics and Radiation in the last years, where he developed software to be deployed in Africa for the oil and gas industry. Lately, he was a Lead Data Scientist at OutSystems and he is teaching Python at Rumos."
        }
      ]
    };
  },
  methods: {
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
    }
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

