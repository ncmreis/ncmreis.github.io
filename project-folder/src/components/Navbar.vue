<template>
  <v-toolbar
    :height="height"
    flat
    class="transparent"
    :src="background ? getBackUrl(background) : ''"
  >
    <v-toolbar-title class="align-center">
      <router-link to="/">
        <v-img
          contain
          height="70px"
          width="210px"
          src="../assets/thorly_logo_white.png"
          alt="Thorly"
          class="v-img-cursor ml-n2 hidden-xs-only"
        ></v-img>
        <v-img
          contain
          height="35px"
          width="120px"
          src="../assets/thorly_logo_white.png"
          alt="Thorly"
          class="v-img-cursor hidden-sm-and-up"
        ></v-img>
      </router-link>
    </v-toolbar-title>
    <div class="flex-grow-1"></div>
    <v-toolbar-items class="hidden-sm-and-down align-center">
      <router-link to="/"><v-btn text color="white">Home</v-btn></router-link>
      <router-link to="/services"
        ><v-btn text color="white">Services</v-btn></router-link
      >
      <router-link to="/about"
        ><v-btn text color="white">Meet the team</v-btn></router-link
      >
      <calendly
        call="https://calendly.com/ricardo-thorly-education"
        description="Schedule a call"
        class="ml-6 mr-2"
      >
      </calendly>
    </v-toolbar-items>
    <div class="hidden-md-and-up text-center">
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn fab text flat class="transparent" v-on="on">
            <v-icon color="white">mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item link to="/">Home</v-list-item>
          <v-list-item link to="/services">Services</v-list-item>
          <v-list-item link to="/about">Meet the team</v-list-item>
          <v-list-item>
            <calendly
              description="Schedule a call"
              call="https://calendly.com/ricardo-thorly-education"
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
  props: ["background", "height"],
  methods: {
    getBackUrl(pet) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + pet + ".png");
    },
  },
};
</script>

<style scoped></style>
