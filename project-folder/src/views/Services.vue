<template>
  <div>
    <Header
            title = "The services behind your business potential"
            descriptionInitial="Our services was thought to help you"
            descriptionBlue="saving costs and increase revenues"
            descriptionFinal="through data science and digital technologies"
            button = "know more"
    ></Header>

    <v-card>
      <Navbar v-if="scrolled"
              :class="{'nav':$vuetify.breakpoint.smAndUp,
                     'nav-xs':$vuetify.breakpoint.xs}"
              background='back_4'
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
                <v-card-title primary-title class="justify-center fix layout mb-12">
                  <p class="display-2 text-center" style="font-weight: 600">The services for your needs</p>
                </v-card-title>
              </v-card>
            </v-flex>

            <v-flex md12 xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-start>
                  <v-flex v-for="service in services" md3 sm6 xs12>
                    <v-hover
                            v-slot:default="{ hover }"

                    >
                      <v-card flat class="transparent">
                        <v-img height="200" contain :src="getServiceImgUrl(service.photo)" class="text-center"></v-img>
                        <v-card-title class="headline fix layout justify-center">
                          <b style="">{{ service.name }}</b>
                        </v-card-title>
                        <v-card-text class="subtitle-1">
                          {{ service.description }}
                        </v-card-text>
                        <v-overlay
                                absolute
                                opacity=0.95
                                :value="hover"
                        >
                          <v-card-text class="subtitle-1 text-center">
                            {{ service.largeDescription }}
                          </v-card-text>
                          <v-btn color="primary" outlined :to="'/services/' + service.photo + '/'">Explore more</v-btn>
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

      <section id="process" style="background-color: #F6F9FD" >
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
                <v-card-title primary-title class="justify-center fix layout mb-2">
                  <p class="display-2 text-center" style="font-weight: 600">The way to do it</p>
                </v-card-title>
                  <v-card-text>
                      <p class="text-center headline my-12">
                          Thorly is by far the <b><u>most fun and difficult</u></b> thing we faced in our professional lives so far.
                          But we are building it everyday with the motivation that <b style='color: #2C81D6'>this is the right way to do it.</b>
                      </p>
                  </v-card-text>
              </v-card>
            </v-flex>

            <v-flex md12 xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-start>
                  <v-flex v-for="challenge in challenges" md4 sm6 xs12>
                      <v-card flat class="transparent">
                        <v-card-text class="overline py-0">
                          <s>{{ challenge.name }}</s>
                        </v-card-text>
                          <v-card-title class="headline fix layout justify-center pt-0">
                              <b style='color: #2C81D6'>{{ challenge.solution }}</b>
                          </v-card-title>
                        <v-card-text class="subtitle-1">
                          {{ challenge.description }}
                        </v-card-text>
                      </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>

          </v-layout>

        </v-container>
      </section>

        <section id="whom">
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
                            <v-card-title primary-title class="justify-center fix layout mb-12">
                                <p class="display-2 text-center" style="font-weight: 600">Our competitive advantage</p>
                            </v-card-title>
                            <v-card-text>
                                <p class="text-center headline my-12">
                                    We have experience on working for multiple domains, <b style='color: #2C81D6'>independently on the industry, department, data, techniques or tools</b>.
                                    We believe <b><u>this approach sets us apart</u></b> as we can cross-apply the best practices between all of them.
                                </p>
                            </v-card-text>
                        </v-card>
                    </v-flex>

                    <v-flex md12 xs12>
                        <v-container grid-list-xl>
                            <v-layout row wrap align-start>
                                <v-flex v-for="type in types" sm4 xs12>
                                    <v-card flat class="transparent">
                                        <v-img height="250" contain :src="getServiceImgUrl(type.photo)" class="text-center"></v-img>
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
                <v-btn class="body-1 mb-12" color="primary" x-large>
                    Work with us
                </v-btn>
            </v-container>
        </section>

    </v-card>

    <Footer/>

  </div>
</template>

<script>
  import Navbar from '../components/Navbar';
  import Header from '../components/Header';
  import Footer from '../components/Footer';

  export default {
    name: 'Home',
    components: {
      Header,
      Navbar,
      Footer
    },
    data () {
      return {
        hashSection: null,
        windowHeight: 0,
        scrolled: false,
        challenges: [
            {name: 'One size fits all', solution: 'Costumized', description: 'Boost the data literacy of your internal team'},
            {name: 'Big & over-planned', solution: 'Short iteration cycles', description: 'Boost the data literacy of your internal team'},
            {name: 'Final product obsession', solution: 'Prototyping first', description: 'Boost the data literacy of your internal team'},
            {name: 'Complex & jargonized', solution: 'Simple and explainable', description: 'Boost the data literacy of your internal team'},
            {name: 'Outsource dependency', solution: 'In-house knowledge', description: 'Boost the data literacy of your internal team'},
            {name: 'For decision makers', solution: 'User-centered design', description: 'Boost the data literacy of your internal team'},
        ],
        services: [
          {name: 'Strategy', photo: 'strategy', description: 'Define a plan for your data by consider different approaches', largeDescription: 'You are a business leader wondering how to take value from your data but not sure how to do it? We can help you by developing a strategic plan for your data, by evaluating all the possibilities and define the best path for your business data.'},
          {name: 'Consulting', photo: 'consulting', description: 'Build data-driven insights to speed up your business potential', largeDescription: ''},
          {name: 'Development', photo: 'development', description: 'Design a tool/product to take advantage from your data', largeDescription: ''},
          {name: 'Training', photo: 'training', description: "Increase your team's data know-how with a tailored academy", largeDescription: ''}
        ],
          types: [
              {name: 'Industries or Departments', photo: 'industry_department', description: 'We work for any industry and/or across multiple departments. This allows us to cross knowledge and best practices between these.'},
              {name: 'Data types or sizes', photo: 'data', description: 'As we have experienced many kinds of data, we are able to work with any size or type of data you have.'},
              {name: 'Techniques or Tools', photo: 'techniques_tools', description: 'As experts on data science techniques used to deal with problems where no tools exists, we have experience developing our own tools & techniques  '},
              ],

      };
    },
    methods: {
      goToSection(hashSection) {
        var elmnt = document.getElementById(hashSection);
        elmnt.scrollIntoView({behavior: 'smooth'});
      },
      menuItems() {
        return this.menu
      },
      handleResize() {
        this.windowHeight = window.innerHeight;
      },
      handleScroll () {
        this.scrolled = window.scrollY > (window.innerHeight-100);
      },
      getImgUrl(pet) {
        var images = require.context('../assets/img/faces/', false, /\.jpeg$/)
        return images('./' + pet + ".jpeg")
      },
      getServiceImgUrl(pet) {
        var images = require.context('../assets/services/', false, /\.png$/)
        return images('./' + pet + ".png")
      },
    },
    created: function() {
      window.addEventListener('resize', this.handleResize)
      this.handleResize();
    },

    destroyed: function() {
      window.removeEventListener('resize', this.handleResize)
    },

    computed: {
      headerStyle() {
        return {
          backgroundImage: 'url(../assets/blue.jpg)'
        };
      },
    },
    beforeMount () {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  };
</script>

<style lang="scss" scoped>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
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
