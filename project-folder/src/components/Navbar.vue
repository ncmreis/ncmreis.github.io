<template>
  <v-toolbar
    :height="height"
    flat
    color="#303030"
  >
    <v-toolbar-title class="align-center">
      <router-link to="/">
        <v-img
          contain
          height="70px"
          width="210px"
          :src=getBackUrl(logo)
          alt="Thorly"
          class="v-img-cursor ml-n2 hidden-xs-only"
          @click="goToSection('top')"
        ></v-img>
        <v-img
          contain
          height="35px"
          width="120px"
          :src=getBackUrl(logo)
          alt="Thorly"
          class="v-img-cursor hidden-sm-and-up"
          @click="goToSection('top')"
        ></v-img>
      </router-link>
    </v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-toolbar-items class="hidden-sm-and-down align-center">
      <router-link style="text-decoration: none" to="/">
        <v-btn text :color="textColor" @click="goToSection('top')">Home</v-btn>
      </router-link>
<!--      <router-link style="text-decoration: none" to="/services">-->
<!--        <v-btn text :color="textColor" @click="goToSection('services')">Services</v-btn>-->
<!--      </router-link>-->
      <router-link style="text-decoration: none" to="/team">
        <v-btn text :color="textColor">Team</v-btn>
      </router-link>
      <calendly
        call="https://calendly.com/ricardo-thorly-education"
        description="Schedule a call"
        class="ml-6 mr-2"
        icon="mdi-phone"
        :button="colorButton"
      >
      </calendly>
    </v-toolbar-items>
    <div class="hidden-md-and-up text-center">
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn fab text class="transparent" v-on="on">
            <v-icon :color="textColor">mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item link to="/" @click="goToSection('top')">Home</v-list-item>
<!--          <v-list-item link to="/#services" @click="goToSection('services')">Services</v-list-item>-->
          <v-list-item link to="/team">Team</v-list-item>
          <v-list-item>
            <calendly
              description="Schedule a call"
              call="https://calendly.com/ricardo-thorly-education"
              :button="colorButton"
            ></calendly>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-toolbar>
</template>

<script>
import Calendly from "./calendly";

export default {
  name: "Navbar",
  components: {
    Calendly,
  },
  props: ["height", "logo", "textColor", "colorButton", "scrolled"],
  methods: {
    getBackUrl(pet) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + pet + ".png");
    },
    goToSection(hashSection) {
      var elmnt = document.getElementById(hashSection);
      elmnt.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped></style>
