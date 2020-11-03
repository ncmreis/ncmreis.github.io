<template>
  <v-toolbar
    :height="height"
    flat
    class="transparent"
    :src="background ? getBackUrl(background) : ''"
  >
    <v-toolbar-title class="align-center">
      <router-link to="/#top">
        <v-img
          contain
          height="70px"
          width="210px"
          :src=getBackUrl(logo)
          alt="Thorly"
          class="v-img-cursor ml-n2 hidden-xs-only"
        ></v-img>
        <v-img
          contain
          height="35px"
          width="120px"
          :src=getBackUrl(logo)
          alt="Thorly"
          class="v-img-cursor hidden-sm-and-up"
        ></v-img>
      </router-link>
    </v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-toolbar-items class="hidden-sm-and-down align-center">
      <router-link style="text-decoration: none" to="/#top">
        <v-btn text :color="textColor">Home</v-btn>
      </router-link>
      <router-link style="text-decoration: none" to="/#services">
        <v-btn text :color="textColor">Services</v-btn>
      </router-link>
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
          <v-btn fab text flat class="transparent" v-on="on">
            <v-icon :color="textColor">mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item link to="/#top"">Home</v-list-item>
          <v-list-item link to="/#services">Services</v-list-item>
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
  props: ["background", "height", "logo", "textColor", "colorButton"],
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
