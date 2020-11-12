<template>
  <section
          style="background-color: #303030;"
          height="100%"
          grid-list-xl
          class="px-4"
  >
    <v-layout
      row
      wrap
      align-start
      justify-center
      class="white--text text-left text-sm-center text-md-left pt-8 mb-6 mx-4"
    >
      <v-flex md3 sm12>
        <p class="subtitle-1 text-uppercase mb-4 font-weight-black">
          Our status
        </p>
        <p>
          We are <b>working remote</b> most of the days. We value the
          flexibility to work on our own schedules and environments.
        </p>
      </v-flex>

      <v-spacer></v-spacer>

      <v-flex md2 sm4 xs12 class="mt-md-0 mt-sm-4 mt-4">
        <p class="subtitle-1 text-uppercase mb-4 font-weight-black">About</p>
        <p>
          <calendly
                  call="https://calendly.com/ricardo-thorly-education"
                  description="Hiring Thorly"
                  link=1
                  class="mx-0 justify-md-start justify-sm-center justify-start"
          >
          </calendly>
        </p>
        <p>
          <a @click="typeformCall()" style="text-decoration: underline; color: inherit">Join the team</a>
        </p>
      </v-flex>

      <v-spacer></v-spacer>

      <v-flex md2 sm4 xs12 class="mt-md-0 mt-sm-4 mt-4">
        <p class="subtitle-1 text-uppercase mb-4 font-weight-black">Office</p>
        <p>Rua da Prata, 80<br />1100-420 Lisboa<br />Portugal</p>
      </v-flex>

      <v-spacer></v-spacer>

      <v-flex md2 sm4 xs12 class="mt-md-0 mt-sm-4 mt-4">
        <p class="subtitle-1 text-uppercase mb-4 font-weight-black">Contact</p>
        <p>discover@thorly.tech</p>
        <p>+351 918548827</p>
      </v-flex>
    </v-layout>
    <hr />
    <v-row class="justify-center">
      <v-btn color="white" text class="text-center my-2"
        >THORLY &copy; 2020</v-btn
      >
    </v-row>
  </section>
</template>

<script>

import { typeform } from "../plugins/typeform.js";
import Calendly from "./calendly";

export default {
  name: "Footer",
  components: {
    Calendly,
  },
  methods: {
    goToSection(hashSection) {
      var elmnt = document.getElementById(hashSection);
      elmnt.scrollIntoView({ behavior: "smooth" });
    },
    typeformCall() {
      typeform();
    }
  }
};
</script>

<style scoped></style>
