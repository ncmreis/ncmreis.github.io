<template>
  <div>
    <Header
      title="Can data improve your decision making?"
      descriptionInitial="We can help you"
      descriptionBlue="using your data to answer business questions"
      descriptionFinal="with focus on delivering value and no endless presentations."
      button="Explore our consulting services"
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
            <v-flex md10 xs12 class="mt-12">
              <v-card flat class="transparent">
                <v-card-title
                  primary-title
                  class="justify-center fix layout mb-12"
                >
                  <p class="display-2 text-center" style="font-weight: 600">
                    Pace matters. Even in consulting
                  </p>
                </v-card-title>
                <v-card-text>
                  <p class="text-center headline my-12">
                    Most business questions can be answered using data. Perhaps some
                    challenges you face are hard to explain to your stakeholders,
                    other might seem too advanced or simply you just lack the necessary time.
                    <b style="color: #2C81D6">We bring a fresh approach to help you develop and iterate
                      fast on these ideas</b>, without wasting your time with endless presentations.
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex md12 xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-start>
                  <v-flex
                    v-for="specificService in specificServices"
                    md4
                    sm6
                    xs12
                  >
                    <v-card flat class="transparent">
                      <v-card-title class="headline fix layout justify-center">
                        <b style="">{{ specificService.name }}</b>
                      </v-card-title>
                      <v-card-text class="subtitle-1">
                        {{ specificService.description }}
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
          <v-btn class="body-1 mb-12" color="primary" x-large to="/services">
            Let's talk about this
          </v-btn>
        </v-container>
      </section>

      <section style="background-color: #F6F9FD" id="other services">
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
                  class="justify-center fix layout mb-12"
                >
                  <p class="display-2 text-center" style="font-weight: 600">
                    Other services we provide
                  </p>
                </v-card-title>
              </v-card>
            </v-flex>

            <v-flex md12 xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-start>
                  <v-flex v-for="service in services" sm4 xs12>
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
                          >Explore more</v-btn
                          >
                        </v-overlay>
                      </v-card>
                    </v-hover>
                  </v-flex>
                </v-layout>
              </v-container>
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

export default {
  name: "Consulting",
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
      challenges: [
        {
          name: "One size fits all",
          solution: "Customized",
          description:
            "We do believe in products or mass solutions but we know these are not efficient on improving companies' life. We just work on tailored solutions bearing in mind your problems, needs, team and business goals."
        },
        {
          name: "Big & over-planned",
          solution: "Short iteration cycles",
          description:
            "Our methodology goes against any waterfall or big & over-planned models, because we don't believe on blind and non-deep decisions. Our short & iterative process allows us to constantly reflect and adapt the solution."
        },
        {
          name: "End product obsession",
          solution: "Prototyping first",
          description:
            "We run away from any mindset obsession with the final product. We start by working on a POC and constantly test it instead of spending time with a massive solution that can lead to misuse and waste of time and money."
        },
        {
          name: "Complex & jargonized",
          solution: "Simple & explainable",
          description:
            "We know Data Scientists often sins by opting for black-box, jargon-filled and complex over low hanging-fruit, explainable and simple. Our experience takes us for usable and comprehensible solutions for anyone."
        },
        {
          name: "Outsource dependency",
          solution: "In-house knowledge",
          description:
            "As independent people, we believe companies should be free to manage on their own our work after we leave. That's why we work close to your team, passing along our knowledge, and deploy fully-documented solutions on your side."
        },
        {
          name: "For decision makers",
          solution: "User-centered design",
          description:
            'Our startup world experience showed us how people fails miserably on building tools based on "feelings and thoughts". It makes us state that any product or tool we get hands on are designed with end-users consumed on the process.'
        }
      ],
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
        // {
        //   name: "Consulting",
        //   photo: "consulting",
        //   description:
        //           "Build data-driven insights to speed up your business potential",
        //   target: "Do you want to improve your decision making with data?",
        //   largeDescription:
        //           "We work with Data Science & Visualizations most modern techniques to help you getting data-insights and improve your business decisions.",
        // },
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
      specificServices: [
        {
          name: "Analytics & Machine Learning",
          description:
            "From Machine Learning to Data Exploration, we are used to work with a variety of solutions and technologies. If it involves data, it is likely that we have crossed paths with a problem like yours in the past."
        },
        {
          name: "Data Visualization",
          description:
            "We are considered Data Visualization geeks and we like to have this mindset while working with our clients. We don't build Dashboards or charts to simply display information, instead we try to tell stories with the data behind it."
        },
        {
          name: "Tailor-made",
          description:
            "Sometimes our clients don't have a problem well defined - yes, this is common. If you are looking to build something with the data you already have, it is likely that we can work together."
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
    getImgUrl(pet) {
      var images = require.context("../assets/img/faces/", false, /\.jpeg$/);
      return images("./" + pet + ".jpeg");
    },
    getServiceImgUrl(pet) {
      var images = require.context("../assets/services/", false, /\.png$/);
      return images("./" + pet + ".png");
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