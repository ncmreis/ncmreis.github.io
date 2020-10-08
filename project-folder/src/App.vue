<template>
    <v-app>
        <v-parallax src='./assets/back_4.png'  id="#home" :height="windowHeight">
            <v-toolbar flat class="transparent mt-4">
                <v-toolbar-title>
                    <v-img @click="goToSection('#home')"
                    contain
                    height="70px"
                    width="210px"
                    src="./assets/thorly_logo_white.png"
                    alt="Thorly"
                    class="v-img-cursor ml-n2 hidden-xs-only"></v-img>
                    <v-img @click="goToSection('#home')"
                           contain
                           height= "35px"
                           width= "120px"
                           src="./assets/thorly_logo_white.png"
                           alt="Thorly"
                           class="v-img-cursor hidden-sm-and-up"></v-img>
                </v-toolbar-title>
            </v-toolbar>

            <v-container class="justify-center fill-height mb-0">
                <v-flex md8 xs12>
                    <v-layout
                          column
                          align-start
                          justify-center
                          class="white--text d-flex flex-grow-1"
                    >
                        <h1 style="font-size:350%; font-weight: 600" class="hidden-xs-only">
                            We are rethinking our brand, the website will be out soon!</h1>

                        <h2 class="mt-10 hidden-xs-only" style="font-weight:400">
                            Thorly provides <b style="color: #2C81D6">Data Science & Data Engineering</b>
                            services to help companies increase their data potential</h2>

                        <v-btn align-center class="typeform-share button hidden-xs-only body-1 mt-10" color="primary" x-large href="https://form.typeform.com/to/fDXhBnJB"  target="_blank">
                            GET IN TOUCH
                        </v-btn>

                        <h1 style="font-size:200%; font-weight: 600" class="hidden-sm-and-up">
                            We are rethinking our brand, the website will be out soon!</h1>

                        <v-col class="d-flex align-stretch"></v-col>

                        <h2 class="body-1 hidden-sm-and-up">
                            Thorly provides <b style="color: #2C81D6">Data Science & Data Engineering</b>
                            services to help companies increase their data potential</h2>

                        <v-col class="d-flex align-stretch"></v-col>

                        <v-btn align-center class="typeform-share button hidden-sm-and-up" color="primary" small href="https://form.typeform.com/to/fDXhBnJB"  target="_blank">
                            GET IN TOUCH
                        </v-btn>

                    </v-layout>
                </v-flex>
            </v-container>

        </v-parallax>
    </v-app>
</template>

<script>
    (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })();
    import FormHome from './components/FormHome';
import IntroPythonCard from './components/IntroPythonCard';
import PythonDSCard from './components/PythonDSCard';

export default {
  name: 'App',
  components: {
      FormHome,
      IntroPythonCard,
      PythonDSCard
  },
  data () {
    return {
        hashSection: null,
        windowHeight: 0,
        show1: true,
        show2: false,
        scrolled: false,
        people: [
            {name: 'Ricardo Pereira', photo: "ricardo", description: 'Ricardo has co-founded several organisations and companies, to help solving problems that are data related and enhancing different communities. Currently he is teaching Python at Nova SBE and Data science at ELU and Rumos. Ricardo has been contracting for two years, working closely with some of the biggest tech companies in PT.'},
            {name: 'Nuno Reis', photo: "nuno", description: 'Nuno started his career as top student at Técnico Lisboa, where he did research before working for 3 years at Teixeira Duarte. Then he moved on to Data Science and has already founded a fintech and an edtech startup while he was doing Data Science & Data Architecture consultancy. He is currently teaching Data Science fundamentals at EDIT.'},
            {name: 'Luís Sousa', photo: "luis", description: 'Luís has been working as a full-stack developer for more than 10 years. Besides Mathematics, he has been evolved with Physics and radiation for the last 4 years, where he developed software to be deployed in Africa for the oil and gas industry. Lately, he was a Lead Data Scientist at OutSystems and he is teaching Python at Rumos.'}
        ]
    }
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
      openForm: function () {
          window.open("https://share.hsforms.com/1YATh4nJpRzGRDOpSyNdhaQ3vi5m", "_blank");
      },
      getImgUrl(pet) {
          var images = require.context('./assets/img/faces/', false, /\.jpeg$/)
          return images('./' + pet + ".jpeg")
      }
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
                backgroundImage: 'url(./assets/blue.jpg)'
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
.main{
    background: #FFFFFF;
    position: relative;
    z-index: 3;
}

.main-raised{
    margin: 0px 0px -0px;
}

.main-raised-xs{
    margin: -0px 0px -0px;
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
    z-index: 4 !important;
    background-color: #2AB7CA;
}

.nav-xs {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 4 !important;
    background-color: #2AB7CA;
}

.v-img-cursor{
    cursor:pointer;
}

</style>

