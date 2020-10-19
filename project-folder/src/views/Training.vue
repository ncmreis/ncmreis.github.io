<template>
  <div>
    <Header
      title="Are you feeling a shortage of Data Science talent?"
      descriptionInitial="We can help you"
      descriptionBlue="build and improve your data-driven culture"
      descriptionFinal="by working with your organization to develop in-house Data Science knowledge."
      button="Explore our training services"
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
                    Education tailored for your company
                  </p>
                </v-card-title>
                <v-card-text>
                  <p class="text-center headline my-12">
                    Building a data-culture inside an organization is one of the
                    most rewarding and hard tasks for management team. Your
                    organization needs general acceptance of data decisions and
                    we have seen this getting tricky when someone does not have
                    data literacy nor basic understanding of data science.
                    <b style="color: #2C81D6"
                      >We can work with your team developing these skills and
                      improving the decision making abilities.</b
                    >
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex md12 xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-start>
                  <v-flex
                    v-for="specificService in specificServices"
                    md3
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
        </v-container>
      </section>

      <section id="why us" style="background-color: #F6F9FD">
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
                  class="justify-center fix layout mb-2"
                >
                  <p class="display-2 text-center" style="font-weight: 600">
                    The reasons to hire us
                  </p>
                </v-card-title>
                <v-card-text>
                  <p class="text-center headline my-12">
                    Thorly is by far the
                    <b><u>most fun and difficult</u></b> thing we faced in our
                    professional lives so far. But we are building it everyday
                    with the motivation that
                    <b style="color: #2C81D6"
                      >this is the right way to do it.</b
                    >
                  </p>
                  <p class="text-center headline my-12">
                    Thorly is by far the
                    <b><u>most fun and difficult</u></b> thing we faced in our
                    professional lives so far. But we are building it everyday
                    with the motivation that
                    <b style="color: #2C81D6"
                      >this is the right way to do it.</b
                    >
                  </p>
                  <p class="text-center headline my-12">
                    Thorly is by far the
                    <b><u>most fun and difficult</u></b> thing we faced in our
                    professional lives so far. But we are building it everyday
                    with the motivation that
                    <b style="color: #2C81D6"
                      >this is the right way to do it.</b
                    >
                  </p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section id="other services">
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
                          <v-card-text class="subtitle-1 text-center">
                            {{ service.largeDescription }}
                          </v-card-text>
                          <v-btn
                            color="primary"
                            outlined
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
  name: "Training",
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
          largeDescription:
            "You are a business leader wondering how to take value from your data but not sure how to do it? We can help you by developing a strategic plan for your data, by evaluating all the possibilities and define the best path for your business."
        },
        {
          name: "Consulting",
          photo: "consulting",
          description:
            "Build data-driven insights to speed up your business potential",
          largeDescription:
            "Are you looking to solve a specific business problem or make a better informed decision with data? We work with Data Science & Visualizations most modern techniques to get data-insights and help you solve those challenges with data."
        },
        {
          name: "Development",
          photo: "development",
          description: "Design a tool/product to take advantage from your data",
          largeDescription:
            'Do you have an idea to design and build an end-to-end tool or product with data science or engineering needs? We have experience on it using a fast, iterative and "prototype first" mindset to build it for the end-users together with your team '
        }
        //{name: 'Training', photo: 'training', description: "Increase your team's data know-how with a tailored academy", largeDescription: "Are you willing to increase your team's data literacy and you believe data should be in the heart of your team decisions? As programming & data science professors, we have already create tailored academies and workshops for our partners."}
      ],
      types: [
        {
          name: "Industry or Department",
          photo: "industry_department",
          description:
            "We worked for multiple industries and/or across many departments. This allows us to cross best knowledge & practices between all."
        },
        {
          name: "Data type or size",
          photo: "data",
          description:
            "We have experienced many kinds of data in multiple situations which allows us to work with any size or type of data you have."
        },
        {
          name: "Technique or Tool",
          photo: "techniques_tools",
          description:
            "As data experts used to deal with problems where no tools exists, we have experience developing our own tools & techniques."
        }
      ],
      specificServices: [
        {
          name: "Bootcamps",
          description:
            "We have off-the-shelf programs of Data Science, Python, Data Literacy and Storytelling with Data. All of them, we have built different possible experiences that you can use in your organization. Some of these experiences are gamified, self-paced, guided or tutored. If you need data training, it is likely we have an offer for you."
        },
        {
          name: "Tailor-made training",
          description:
            "We know your needs may be more specific and require details we have not covered in our current offers. By using our framework, we can quickly design together a course for your organization. This framework requires you and the target audience to answer a couple of questions and be available for one brainstorming session after that. Usually we can get this designed in 1-2 weeks."
        },
        {
          name: "Jumpstart",
          description:
            "We know that getting started after a course or training can be very hard. We offer a 4-8 weeks program to work together with your team in your organization's problems. This way, you can see in practice what you got to learn during our programs. By doing this, we can help you understanding what are the good practices for collaborative working and data projects in general."
        },
        {
          name: "Hackathon for Culture",
          description:
            "One of the most special programs we have its a one day hackathon designed for individuals with no experience at all to get their hands dirty with the basics of Data Science and Machine Learning in general, as well as the workflow of a typical project. We have seen excellent results in this methodology both for culture as well as motivational for teams and individuals."
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