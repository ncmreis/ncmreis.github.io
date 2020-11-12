<template>
  <section id="#home" style="height: 100vh; background-color: #303030" class="align-center justify-center">
    <Navbar
            height="70"
            logo="thorly_logo_white"
            textColor="#FFFFFF"
            colorButton="#FFB347"
    >
    </Navbar>

    <v-container class="align-center">
        <v-layout
          row
          class="align-center justify-center"
        >
          <v-flex md10 xs12>
            <v-container class="align-center fill-height">
              <v-layout row class="justify-center">

                <v-flex md8 class="align-end">
                  <v-card dark tile flat class="transparent">
                    <v-card-title class="text-sm-h3 text-h4 fix" style="font-weight: 600">
                      All your customers matter.
                      <br>
                      Each one is unique.
                    </v-card-title>
                    <v-card-text class="text-sm-h5 text-h6" style="font-weight: 400">
                      Improve your <a style="color: #008FFF">Customer Intelligence</a> to personalize your customers experience.
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex md4>
                  <v-img max-height="1000" contain src="../assets/header.png"></v-img>
                </v-flex>

              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
    </v-container>
  </section>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  name: "Header",
  props: [],
  components: {
    Navbar
  },

  data() {
    return {
      hashSection: null,
      windowHeight: 0,
      show1: true,
      show2: false,
      scrolled: false,
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
  background-color: #2ab7ca;
}

.nav-xs {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 4 !important;
  background-color: #2ab7ca;
}
</style>
