<template>
  <div>
    <Header
      title="The services behind your Data Science solutions"
      descriptionInitial=""
      descriptionBlue="From strategic consulting to development and training"
      descriptionFinal="we designed our services to help you using data science & digital technologies"
      button="know more"
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
            <v-flex md10 xs12 class="mt-12">
              <v-card flat class="transparent">
                <v-card-title
                  primary-title
                  class="justify-center fix layout mb-12"
                >
                  <p class="display-2 text-center" style="font-weight: 600">
                    We've probably been there...
                  </p>
                </v-card-title>
                <v-card-text>
                  <p class="text-center headline my-12">
                    We have experience on working for multiple domains,
                    <b style="color: #2C81D6"
                      >including different industries, departments, data,
                      techniques or tools</b
                    >. We believe this sets us apart as we can cross-apply the
                    best practices between all of them.
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex md12 xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-start>
                  <v-flex v-for="type in types" sm4 xs12>
                    <v-card flat class="transparent">
                      <v-img
                        height="250"
                        contain
                        :src="getServiceImgUrl(type.photo)"
                        class="text-center"
                      ></v-img>
                      <v-card-title class="headline fix layout justify-center">
                        <b style="">{{ type.name }}</b>
                      </v-card-title>
                      <v-card-text class="subtitle-1">
                        {{ type.description }}
                      </v-card-text>
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
            <v-flex md10 sm12 xs12 class="mt-12">
              <v-card flat class="transparent">
                <v-card-title
                  primary-title
                  class="justify-center fix layout mb-2"
                >
                  <p class="display-2 text-center" style="font-weight: 600">
                    Reasons to hire us
                  </p>
                </v-card-title>
                <v-card-text>
                  <p class="text-center headline my-12">
                    Thorly is by far the most fun and difficult thing we faced
                    in our professional lives so far but we are building it
                    everyday with the motivation that
                    <b style="color: #2C81D6"
                      >this is the right way to do it.</b
                    >
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex md11 xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-start justify-center>
                  <template v-for="feature in features">
                    <v-flex v-if="feature.title" md4 class="hidden-sm-and-down">
                      <featureServiceCard
                        :title="feature.title"
                        :avatar="feature.avatar"
                        :color="feature.color"
                        :items="feature.items"
                        :Header="1"
                      >
                      </featureServiceCard>
                    </v-flex>

                    <v-flex v-else md2 class="hidden-sm-and-down">
                      <v-card flat class="transparent text-center">
                        <v-card-text
                          class="display-2 justify-center"
                          style="margin-top: 115px"
                        >
                          vs.
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </template>

                  <v-flex sm8 xs10 class="hidden-md-and-up">
                    <v-tabs
                      v-model="model"
                      fixed-tabs
                      background-color="primary"
                      icons-and-text
                    >
                      <v-tab v-for="feature in features" v-if="feature.avatar">
                        {{ feature.title }}
                        <v-avatar size="40">
                          <img :src="getWayImgUrl(feature.avatar)" />
                        </v-avatar>
                      </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="model">
                      <v-tab-item
                        v-for="feature in features"
                        v-if="feature.avatar"
                      >
                        <featureServiceCard
                          :title="feature.title"
                          :avatar="feature.avatar"
                          :color="feature.color"
                          :items="feature.items"
                          class="mt-2"
                        >
                        </featureServiceCard>
                      </v-tab-item>
                    </v-tabs-items>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section id="#services">
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
                    The services for your needs
                  </p>
                </v-card-title>
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
          <div class="mb-12">
            <calendly
              call="https://calendly.com/ricardo-thorly-education"
              :xlarge="true"
              description="Work with us"
            ></calendly>
            <p class="caption mt-1" style="opacity: 0.4"></p>
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
import featureServiceCard from "../components/featureServiceCard";

export default {
  name: "Home",
  components: {
    Header,
    Navbar,
    Footer,
    featureServiceCard,
    Calendly,
  },
  data() {
    return {
      hashSection: null,
      windowHeight: 0,
      model: null,
      scrolled: false,
      features: [
        {
          title: "Thorly",
          avatar: "thorly",
          color: "#2C81D6",
          items: [
            {
              text: "Agile methodologies",
              icon: "mdi-account-multiple-outline",
            },
            { text: "Short iteration cycles", icon: "mdi-repeat" },
            { text: "Prototyping first", icon: "mdi-stairs" },
            { text: "Simple & explainable", icon: "mdi-flag" },
            { text: "In-house knowledge", icon: "mdi-account-convert" },
            {
              text: "User-centered design",
              icon: "mdi-image-filter-center-focus",
            },
          ],
        },
        {},
        {
          title: "Traditional",
          avatar: "traditional",
          color: "orangered",
          items: [
            {
              text: "Waterfall methodologies",
              icon: "mdi-account-multiple-outline",
            },
            { text: "Big & over-planned", icon: "mdi-repeat" },
            { text: "End-product driven", icon: "mdi-stairs" },
            { text: "Complex & jargonized", icon: "mdi-flag" },
            { text: "Outsource dependency", icon: "mdi-account-convert" },
            {
              text: "For decision makers",
              icon: "mdi-image-filter-center-focus",
            },
          ],
        },
      ],
      challenges: [
        {
          name: "One size fits all",
          solution: "Customized",
          description:
            "We do believe in products or mass solutions but we know these are not efficient on improving companies' life. We just work on tailored solutions bearing in mind your problems, needs, team and business goals.",
        },
        {
          name: "Big & over-planned",
          solution: "Short iteration cycles",
          description:
            "Our methodology goes against any waterfall or big & over-planned models, because we don't believe on blind and non-deep decisions. Our short & iterative process allows us to constantly reflect and adapt the solution.",
        },
        {
          name: "End product obsession",
          solution: "Prototyping first",
          description:
            "We run away from any mindset obsession with the final product. We start by working on a POC and constantly test it instead of spending time with a massive solution that can lead to misuse and waste of time and money.",
        },
        {
          name: "Complex & jargonized",
          solution: "Simple & explainable",
          description:
            "We know Data Scientists often sins by opting for black-box, jargon-filled and complex over low hanging-fruit, explainable and simple. Our experience takes us for usable and comprehensible solutions for anyone.",
        },
        {
          name: "Outsource dependency",
          solution: "In-house knowledge",
          description:
            "As independent people, we believe companies should be free to manage on their own our work after we leave. That's why we work close to your team, passing along our knowledge, and deploy fully-documented solutions on your side.",
        },
        {
          name: "For decision makers",
          solution: "User-centered design",
          description:
            'Our startup world experience showed us how people fails miserably on building tools based on "feelings and thoughts". It makes us state that any product or tool we get hands on are designed with end-users consumed on the process.',
        },
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
      types: [
        {
          name: "Industry or Department",
          photo: "industry_department",
          description:
            "We worked for multiple industries and/or across many departments. This allows us to cross best knowledge & practices between all.",
        },
        {
          name: "Data type or size",
          photo: "data",
          description:
            "We have experienced many kinds of data in multiple situations which allows us to work with any size or type of data you have.",
        },
        {
          name: "Technique or Tool",
          photo: "techniques_tools",
          description:
            "As data experts used to deal with problems where no tools exists, we have experience developing our own tools & techniques.",
        },
      ],
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
    },
    getWayImgUrl(pet) {
      var images = require.context("../assets/", false, /\.png$/);
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
