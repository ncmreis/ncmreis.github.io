<template>

    <v-card tile class="transparent">

      <Navbar
              :class="{
                'nav': $vuetify.breakpoint.smAndUp,
                'nav-xs': $vuetify.breakpoint.xs,
              }"
              height="70"
              logo="thorly_logo_white"
              textColor="#FFFFFF"
              colorButton="orange"
      ></Navbar>

      <section id="top" style="background-color: #303030; height: 100vh; padding-top: 70px">

        <v-container class="align-center fill-height">

          <v-layout row wrap class="justify-center align-center">

            <v-flex md7 xs12 class="align-center">
              <v-card dark flat class="transparent text-left">
                <v-card-text
                        :class="windowHeight < 500 ? 'white--text text-h4 fix' : 'white--text text-sm-h3 text-h4 fix'"
                >
                  All your customers matter.</br> Each one is unique.
                </v-card-text>
                <v-card-text
                        :class="windowHeight < 500 ? 'text-h6' : 'text-sm-h5 text-h6'">
                  Improve your <a style="color: #008FFF">Customer Intelligence</a> to personalize your customers experience.
                </v-card-text>
              </v-card>
            </v-flex>

            <v-flex md5 xs12 class="hidden-sm-and-down text-center">
              <img style="max-width:100%; max-height:700px; height: auto" src="../assets/header.png">
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <section id="questions" style="background-color: #F7F8FA; overflow: hidden; position: relative;"
      >
        <v-container class="text-center py-md-0 my-12 my-md-0">
          <v-layout
            row
            wrap
            class="white--text align-center"
            align-center
            justify-center
          >

            <v-flex md12 xs12>
              <v-container grid-list-xl>
                <v-layout row wrap class="align-center justify-center">

                  <v-flex md5 xs12 class="pb-0">
                    <v-card flat class="transparent text-md-left text-center py-0 mr-md-6">
                      <v-card-title class="text-sm-h4 text-h5 justify-md-start justify-center fix">
                        Unsufficient customer knowledge is frustrating
                      </v-card-title>
                      <v-card-text class="text-sm-h6 text-subtitle-1 font-weight-regular">
                        If this is you know that we understand and can help.
                      </v-card-text>
                      <v-card-actions>
                        <calendly
                                call="https://calendly.com/ricardo-thorly-education"
                                description="Schedule a call"
                                icon="mdi-phone"
                                button="orange"
                                xlarge="true"
                                class="ml-md-2 justify-center justify-md-start mt-3"
                        >
                        </calendly>
                      </v-card-actions>
                    </v-card>
                  </v-flex>

                  <v-flex md7 class="py-0 hidden-sm-and-down" style="height: 3000px; margin-top: -2400px">
                    <v-row wrap class="anime-md">
                      <v-flex md6 v-for="(question, index) in questions.concat(questions)" :key="index" >
                        <v-card height="226px" class="px-3">
                          <v-icon x-large :color=generator() class="mt-9 mb-3">mdi-help-circle</v-icon>
                          <v-card-text class="justify-center">
                            {{ question }}
                          </v-card-text>
                        </v-card>
                      </v-flex>
                    </v-row>
                  </v-flex>

                  <v-div class="hidden-md-and-up anime-xs-questions-up mt-12 justify-center" style="width: 2200px">
                    <v-row wrap class="mx-3" style="height:176px; width: 2200px; margin-right: 1100px; margin-left: 1100px">
                      <v-card v-for="(question, index) in questions.concat(questions).slice(10,20)" :key="index" width="196px" height="176px" class="mx-3">
                        <v-icon x-large :color="generator()" class="mt-4">mdi-help-circle</v-icon>
                        <v-card-text class="justify-center text-sm-body-2 text-caption">
                          {{ question }}
                        </v-card-text>
                      </v-card>
                    </v-row>
                  </v-div>

                  <v-div class="hidden-md-and-up anime-xs-questions-down my-6 justify-center" style="width: 2200px">
                    <v-row wrap class="mx-3" style="height:176px; width: 2200px; margin-right: 1100px; margin-left: 1100px">
                      <v-card v-for="(question, index) in questions.concat(questions).slice(4,14)" :key="index" width="196px" height="176px" class="mx-3">
                        <v-icon x-large :color="generator()" class="mt-4">mdi-help-circle</v-icon>
                        <v-card-text class="justify-center text-sm-body-2 text-caption">
                          <b>{{ question }}</b>
                        </v-card-text>
                      </v-card>
                    </v-row>
                  </v-div>

                </v-layout>
              </v-container>
            </v-flex>

          </v-layout>
        </v-container>
      </section>

      <section id="call" style="background-color: #1667C0">
        <v-container class="text-center py-12">
          <v-layout
                  row
                  wrap
                  justify-center
                  class="py-12"
          >
            <v-flex md10 xs12>
              <v-card flat class=" transparent">
                <v-card-text class="white--text justify-center fix text-sm-h4 text-h5 font-weight-medium">
                  We can help you improving your Customer Intelligence with a low upfront investment and a structured process.
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

      <section id="benefits" style="background-color: #F7F8FA;"
      >
        <v-container class="text-center py-md-0 my-md-0">
          <v-layout
                  row
                  wrap
                  class="white--text align-center"
                  align-center
                  justify-center
          >

            <v-flex md12 xs12>
              <v-container grid-list-xl>
                <v-layout row wrap class="align-center justify-center my-12">

                  <v-flex md5 xs12 class="pb-0">
                    <v-card flat class="transparent text-md-left text-center py-0">
                      <v-card-title class="text-sm-h4 text-h5 justify-center justify-md-start fix">
                        Benefits of improving your Customer Intelligence
                      </v-card-title>
                      <v-card-text class="text-sm-h6 text-subtitle-1 font-weight-regular">
                        Check what the big players in the market are doing.
                      </v-card-text>
<!--                      <v-btn-->
<!--                              color="orange"-->
<!--                              @click="typeformCall()"-->
<!--                              x-large-->
<!--                              class="white&#45;&#45;text ml-md-4 mt-3"-->
<!--                      >-->
<!--                        Download Guide ||| Get our guide for 5 quick wins on your Customer Intelligence-->
<!--                      </v-btn>-->
                    </v-card>
                  </v-flex>

                  <v-flex md7 xs12 class="my-12">
                    <v-container grid-list-xl>
                      <v-layout row wrap class="d-flex align-stretch">
                        <v-flex v-for="usecase in useCases" :key="usecase.company" sm6 xs12>
                          <v-card
                                  class="fill-height text-center elevation-5 fix py-6 px-3"
                                  :href="usecase.link"
                                  target="_blank"
                          >
                            <v-img :src="getCaseImgUrl(usecase.company)" contain max-height="30"></v-img>
                            <v-card-title class='fix justify-center text-sm-subtitle-1 text-subtitle-2 mt-3' style="line-height: 20px">{{ usecase.title }}</v-card-title>
                            <v-card-text class="text-sm-body-2 text-caption">{{ usecase.description }}</v-card-text>
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

      <section id="toolkit" style="overflow: hidden; position: relative;"
      >
        <v-container class="text-center py-md-0 my-12 my-md-0">
          <v-layout
                  row
                  wrap
                  class="white--text align-center"
                  align-center
                  justify-center
          >

            <v-flex md12 xs12>
              <v-container grid-list-xl>
                <v-layout row wrap class="align-center justify-center">

                  <v-flex md6 class="py-0 hidden-sm-and-down" style="height: 2640px; margin-top: -1980px">
                    <v-row wrap class="anime-md-toolkit">
                      <v-flex md6 v-for="(tool, index) in tools.concat(tools)" :key="index" >
                        <v-card height="196px">
                          <v-icon x-large color="#008FFF" class="mt-12">{{ tool.icon }}</v-icon>
                          <v-card-text class="fix justify-center text-sm-subtitle-1 text-subtitle-2 font-weight-medium" style="line-height: 20px">
                            {{ tool.name }}
                          </v-card-text>
                        </v-card>
                      </v-flex>
                    </v-row>
                  </v-flex>

                  <v-flex md6 xs12 class="pb-0 pl-md-12">
                    <v-card flat class="transparent text-center text-md-left py-0">
                      <v-card-title class="text-sm-h4 text-h5 justify-center justify-md-start fix">
                        Customer Intelligence toolkit
                      </v-card-title>
                      <v-card-text class="text-sm-h6 text-subtitle-1 font-weight-regular">
                        We use Data Science and Software Development under a Design Thinking methodology to build your toolkit.
                      </v-card-text>
                      <v-card-actions>
                        <calendly
                                call="https://calendly.com/ricardo-thorly-education"
                                description="Schedule a call"
                                icon="mdi-phone"
                                button="orange"
                                xlarge=""
                                class="ml-md-2 mt-3 justify-center justify-md-start"
                        >
                        </calendly>
                      </v-card-actions>
                    </v-card>
                  </v-flex>

                  <v-div class="hidden-md-and-up anime-xs-tools-up mt-12 justify-center" style="width: 1800px">
                    <v-row wrap class="mx-3" style="height:126px; width: 1800px; margin-right: 900px; margin-left: 900px">
                      <v-card v-for="(tool, index) in tools.concat(tools).slice(10,20)" :key="index" width="156px" height="126px" class="mx-3">
                        <v-icon large color="#008FFF" class="mt-4">{{ tool.icon }}</v-icon>
                        <v-card-text class="justify-center" style="line-height: 20px; font-weight: 500">
                          {{ tool.name }}
                        </v-card-text>
                      </v-card>
                    </v-row>
                  </v-div>

                  <v-div class="hidden-md-and-up anime-xs-tools-down my-6 justify-center" style="width: 1800px">
                    <v-row wrap class="mx-3" style="height:126px; width: 1800px; margin-right: 900px; margin-left: 900px">
                      <v-card v-for="(tool, index) in tools.concat(tools).slice(4,14)" :key="index" width="156px" height="126px" class="mx-3">
                        <v-icon large color="#008FFF" class="mt-4">{{ tool.icon }}</v-icon>
                        <v-card-text class="justify-center" style="line-height: 20px; font-weight: 500">
                          {{ tool.name }}
                        </v-card-text>
                      </v-card>
                    </v-row>
                  </v-div>

                </v-layout>
              </v-container>
            </v-flex>

          </v-layout>
        </v-container>
      </section>

      <section id="plan" style="background-color: #1667C0">
        <v-container class="text-center py-12">
          <v-layout
                  row
                  wrap
                  justify-center
                  class="py-12"
          >
            <v-flex md10 xs12>
              <v-card flat class="transparent justify-center">

                <v-card-text class="white--text justify-center fix text-sm-h4 text-h5" style="font-weight: 500;">
                  Start improving your Customer Intelligence today
                </v-card-text>

                <v-stepper light class="transparent elevation-0 mt-12 hidden-sm-and-down" alt-labels>
                  <v-stepper-header>
                    <v-stepper-step step="1" class="transparent">
                      <a style="color: #ffffff; font-weight: 500" class="subtitle text-center">Schedule a call</a>
                    </v-stepper-step>

                    <v-divider style="margin: 48px -55px 0;"></v-divider>

                    <v-stepper-step step="2">
                      <a style="color: #ffffff; font-weight: 500" class="subtitle text-center">Get a plan for your customer intelligence</a>
                    </v-stepper-step>

                    <v-divider style="margin: 48px -55px 0;"></v-divider>

                    <v-stepper-step step="3">
                      <a style="color: #ffffff; font-weight: 500" class="subtitle text-center">Start working</a>
                    </v-stepper-step>

                    <v-divider style="margin: 48px -55px 0;"></v-divider>

                    <v-stepper-step step="4">
                      <a style="color: #ffffff; font-weight: 500" class="subtitle text-center">Personalized customer experience</a>
                    </v-stepper-step>
                  </v-stepper-header>
                </v-stepper>

                <v-stepper light class="transparent elevation-0 mt-12 hidden-md-and-up justify-center" vertical alt-labels>
                  <v-stepper-step step="1" class="py-3">
                    <a style="color: #ffffff; font-weight: 500" class="subtitle text-center">Schedule a call</a>
                  </v-stepper-step>
<!--                  <v-stepper-content step="1" class="justify-center"></v-stepper-content>-->
                  <div style="margin-left: auto; margin-right: auto; background-color: gray; height: 40px; width: 1px"></div>

                  <v-stepper-step step="2" class="py-3">
                    <a style="color: #ffffff; font-weight: 500" class="subtitle text-center">Get a plan for your customer intelligence</a>
                  </v-stepper-step>
<!--                  <v-stepper-content step="2"></v-stepper-content>-->
                  <div style="margin-left: auto; margin-right: auto; background-color: gray; height: 40px; width: 1px"></div>

                  <v-stepper-step step="3" class="py-3">
                    <a style="color: #ffffff; font-weight: 500" class="subtitle text-center">Start working</a>
                  </v-stepper-step>
<!--                  <v-stepper-content step="3"></v-stepper-content>-->
                  <div style="margin-left: auto; margin-right: auto; background-color: gray; height: 40px; width: 1px"></div>

                  <v-stepper-step step="4" class="py-3">
                    <a style="color: #ffffff; font-weight: 500" class="subtitle text-center">Personalized customer experience</a>
                  </v-stepper-step>
<!--                  <v-stepper-content step="4"></v-stepper-content>-->

                </v-stepper>

              </v-card>
            </v-flex>
          </v-layout>
          <div class="mt-md-6 mt-0 mb-12">
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

      <section id="story" >
        <v-container class="text-center">
          <v-layout row wrap class="my-12" align-center justify-center>
            <v-flex md12 xs12>
              <v-card flat class="transparent">
                <v-card-text>
                  <p class="text-center text-body-2">
                    Part of our story
                  </p>
                </v-card-text>
              </v-card>

              <v-slide-group
                      v-model="model"
                      show-arrows
                      class="mb-4 mx-0 px-0"
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

      <Footer/>
    </v-card>

</template>

<script>
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Calendly from "../components/calendly";

import { typeform } from "../plugins/typeform.js";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    Calendly
  },

  data() {
    return {
      show: "Strategy",
      hashSection: null,
      windowHeight: 0,
      windowHeight2: this.windowHeight - 70,
      mycolor: '#'+(Math.random()*0xFFFFFF<<0).toString(16),
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
          // target:
          //   "Do you have data but you are struggling to establish a plan to solve your business problems?",
          largeDescription:
            "A few hours on the whiteboard can save months of work. We try to bring this mindset to our clients for every work we do.",
          cases: [
            {title: "Creative sessions", goals: "A set of brainstorming sessions to generate ideas and help you explore the business potential of your data."},
            {title: "Strategic planning", goals: "We help you understanding and defining your data goals having into account the constraints your organization might have."},
            {title: "Project & Product Scope", goals: "Quick wins goes first, before big planning. Focus on prioritizing valuable problems to unlock business value."},
            {title: "It's your call...", goals: "Your problem is unique, but you know it requires a data science or engineering capability that you don't have. We're your team."}
          ]
        },
        {
          name: "Analytics",
          color: "#A7A0E0",
          photo: "analytics",
          description:
                  "We use your data to answer business questions with focus on delivering value.",
          target:
                  "Do you have data but you are struggling to establish a plan to solve your business problems?",
          largeDescription:
                  "Most business questions can be answered using data. We bring a fresh approach to help you iterate fast on these problems, without endless presentations.",
          cases: [
            {title: "Data Analysis", goals: "Big or small data of any type, we use our broad range of analytical skills to make data talk and solve important problems."},
            {title: "Machine Learning", goals: "From regressions to natural language processing or time series, it is likely we have crossed paths with a problem like yours."},
            {title: "Visualization", goals: "We build data-driven interfaces to tell stories behind the data. We keep it simple and explainable so it is useful for anyone."},
            {title: "You name it...", goals: "You want to build something with your data but you don't know how to name it? It is common and likely that we can work together."}
          ]
        },
        {
          name: "Engineering",
          color: "#FF9E7E",
          photo: "engineering",
          description:
                  "We build with you tailor-made data tools in small, incremental and cost-effective steps.",
          target:
                  "Do you have data but you are struggling to establish a plan to solve your business problems?",
          largeDescription:
                  "To build a tool around data may feel a hard-to-navigate problem. We have experience on building it and demonstrate it's value to the stakeholders, with a prototype first approach.",
          cases: [
            {title: "Prototype", goals: "Our place to work is where we transform ideas into v1.0 products in few weeks, choosing what delivers more business value."},
            {title: "Production tool", goals: "After several build-test cycles focused on end-user, we build robust products considering scalability and maintenance costs."},
            {title: "Pipelines for data", goals: "From ETL to Data Pipelines, we have experience on building efficient tools to consolidate data from multiple sources."},
            {title: "Your tool...", goals: "Sometimes it's hard to define what we need from a tool. Yes, it's common, we've been there. We help you to define and building it."}
          ]
        },
        {
          name: "Training",
          color: "#FA86B7",
          photo: "training",
          description:
                  "We help you on building a data-driven culture and developing in-house data knowledge.",
          target:
                  "Do you have data but you are struggling to establish a plan to solve your business problems?",
          largeDescription:
                  "It's tricky when someone does not have enough data literacy or basic understanding of data science. We can help you using our programs based on personalized education and gamification.",
          cases: [
            {title: "Hackathon for culture", goals: "A 1-day event designed to teach the basics of Data Science, with hands-on learning, gamification and lot's of fun."},
            {title: "Jumpstarts", goals: "This program was designed to get you started on-job after training. We work with you to apply in practice what you learnt."},
            {title: "Bootcamps", goals: "From Python, Data Science, Data Literacy or Storytelling, it is likely we have gamified, self-paced or tutored programs for your needs."},
            {title: "Tailor-made training", goals: "For specific needs we have not covered in our standard offers, we can design in 1-2 weeks a course for your team using our framework."}
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
          title: "No Customer left behind: drive growth with personalization",
          company: "mckinsey",
          description: "Personalization at scale can drive between 5-15% revenue growth for companies in many industries.",
          link: "https://www.mckinsey.com/business-functions/marketing-and-sales/our-insights/no-customer-left-behind"
        },
        {
          title: "Intelligent Marketing starts with Customer Intelligence",
          company: "forbes",
          description: "One of the most powerful commodities that brands have today is customer intelligence.",
          link: "https://www.forbes.com/sites/forbestechcouncil/2020/04/14/intelligent-marketing-starts-with-customer-intelligence/?sh=6c47bcffa867"
        },
        {
          title: "The dividends of digital marketing",
          company: "bcg",
          description: "The best marketers now use data for end-to-end measurement and messaging to reach the right consumers.",
          link: "https://www.bcg.com/publications/2019/dividends-digital-marketing-maturity"
        },
        {
          title: "Marketing’s holy grail: digital personalization at scale",
          company: "mckinsey",
          description: "The secret to kick-starting this change is to empower a small group of the right people.",
          link: "https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/marketings-holy-grail-digital-personalization-at-scale"
        }
      ],
      questions: [
              'Struggling to understand your customer behaviour?',
              'Spend endless hours on building and analysing marekting reports?',
              "You feel you don't really know your customer?",
              'Lost on what to offer to each customer?',
              'There’s too many customers to make individual offers?',
              'Your customer information is spread all over the place?',
              'Unable to predict what your customer is going to do?',
              'Afraid your customer is leaving for your competition?',
              'To improve your current customer relationship is expensive?',
              'Improve your customer relationship at scale takes to long with few results?',
              'Unsure of the best investment options to increase your customer satisfaction?',
              'Hidden insights in your customer data?',
      ],
      tools: [
        {name: "Machine Learning Algorithms", icon: "mdi-chart-timeline"},
        {name: "Live Dashboards", icon: "mdi-chart-areaspline"},
        {name: "Clickable Prototypes", icon: "mdi-cursor-pointer"},
        {name: "Advanced Data Analytics", icon: "mdi-chart-bar-stacked"},
        {name: "Data Pipelines", icon: "mdi-cube-send"},
        {name: "User-centered Technology", icon: "mdi-account-circle"},
        {name: "UI mock-ups", icon: "mdi-television-guide"},
        {name: "Automated reports", icon: "mdi-file-chart"},
        {name: "End-to-end tools", icon: "mdi-loop"},
        {name: "Mobile apps", icon: "mdi-cellphone-android"},
        {name: "User-personalized websites", icon: "mdi-camera-metering-center"},
        {name: "Real-time Insights", icon: "mdi-lan-connect"},
      ]
    };
  },
  methods: {
    generator() {
      this.mycolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      return this.mycolor;
    },
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
      this.scrolled = window.scrollY > 0 // window.innerHeight - 70;
    },
    getCaseImgUrl(pet) {
      var images = require.context("../assets/cases/", false, /\.png$/);
      return images("./" + pet + ".png");
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

<style lang="scss">

  .v-application--is-ltr .v-stepper--vertical .v-stepper__step__step {
    margin-right: 0px !important;
  }

  .v-stepper__step__step {
    height: 48px;
    width: 48px;
    font-size: 1.5rem;
  }

  .anime-xs-tools-up {
    position: relative;
    animation: moverighttool 60s infinite;
    animation-timing-function: linear;
    animation-delay: 0s;
  }

  @keyframes moverighttool {
    0%   {left:0px; top:0px;}
    25%  {left:440px; top:0px;}
    50% {left:0px; top:0px;}
    75% {left:-440px; top:0px;}
    100% {left:0px; top:0px;}
  }

  .anime-xs-tools-up:hover {
    animation-play-state: paused;
  }

  .anime-xs-tools-down {
    position: relative;
    animation: movelefttool 60s infinite;
    animation-timing-function: linear;
    animation-delay: 0s;
  }

  @keyframes movelefttool {
    0%   {left:0px; top:0px;}
    25%  {left:-440px; top:0px;}
    50% {left:0px; top:0px;}
    75% {left:440px; top:0px;}
    100% {left:0px; top:0px;}
  }

  .anime-xs-tools-down:hover {
    animation-play-state: paused;
  }

  .anime-xs-questions-up {
    position: relative;
    animation: moveleft 90s infinite;
    animation-timing-function: linear;
    animation-delay: 0s;
  }

  @keyframes moveleft {
    0%   {left:0px; top:0px;}
    25%  {left:-560px; top:0px;}
    50% {left:0px; top:0px;}
    75% {left:560px; top:0px;}
    100% {left:0px; top:0px;}
  }

  .anime-xs-questions-up:hover {
    animation-play-state: paused;
  }

  .anime-xs-questions-down {
    position: relative;
    animation: moveright 90s infinite;
    animation-timing-function: linear;
    animation-delay: 0s;
  }

  @keyframes moveright {
    0%   {left:0px; top:0px;}
    25%  {left:560px; top:0px;}
    50% {left:0px; top:0px;}
    75% {left:-560px; top:0px;}
    100% {left:0px; top:0px;}
  }

  .anime-xs-questions-down:hover {
    animation-play-state: paused;
  }

  .anime-md {
    position: relative;
    animation: mymove 60s infinite;
    animation-timing-function: linear;
    animation-delay: 0s;
  }

  @keyframes mymove {
    from {top: 0px;}
    to {top: 1500px;}
  }

  .anime-md:hover {
    animation-play-state: paused;
  }

  .anime-md-toolkit {
    position: relative;
    animation: movetools 20s infinite;
    animation-timing-function: linear;
    animation-delay: 0s;
  }

  @keyframes movetools {
    from {top: 0px;}
    to {top: 1320px;}
  }

  .anime-md-toolkit:hover {
    animation-play-state: paused;
  }

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
