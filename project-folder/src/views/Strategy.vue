<template>
  <div>
    <Header
      title="Struggling to establish a plan for your data?"
      descriptionInitial="We can help you"
      descriptionBlue="developing a strategic plan,"
      descriptionFinal="evaluating possibilities and defining the best path for your business needs."
      button="Explore our strategy services"
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
                    Design your data strategy
                  </p>
                </v-card-title>
                <v-card-text>
                  <p class="text-center headline my-12">
                    When you want to move from an idea to a product or
                    you feel you want to do something with your data but you are
                    not sure of what and how to do it.
                    <b style="color: #2C81D6">
                      We can help you with your data strategy, challenge you and
                      work together on defining and prioritising
                    </b>
                    what are the most valuable actions and tools for your
                    business.
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

      <section id="services" style="background-color: #F6F9FD">
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
  name: "Strategy",
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
        // {
        //   name: "Strategy",
        //   photo: "strategy",
        //   description:
        //           "Define a plan for your data considering multiple approaches",
        //   target:
        //           "Do you have data but you are struggling to establish a plan to solve your business problems?",
        //   largeDescription:
        //           "We can help you by developing a strategic plan, by evaluating your possibilities with you and define the best path for your needs.",
        // },
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
      specificServices: [
        {
          name: "Strategic Plan",
          description:
            "We help you understanding and defining your goals having into account the constraints your organization might have."
        },
        {
          name: "Strategic Sessions",
          description:
            "We have a set of brainstorming sessions to generate ideas and help to explore the potential of your data for your business."
        },
        {
          name: "Strategic Mentoring",
          description:
            "We can help you getting started, working on an hourly basis in close collaboration with your team, allowing you to optimize your financial resources."
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