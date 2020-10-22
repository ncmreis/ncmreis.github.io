<template>
  <v-parallax
    src="../assets/back_4.png"
    height="100%"
    grid-list-xl
  >
    <v-layout
      row
      wrap
      align-start
      justify-center
      class="text-center text-md-left mt-8 mb-6 mx-4"
    >
      <v-flex md3 sm12>
        <p class="subtitle-1 text-uppercase mb-4 font-weight-bold">
          Our status
        </p>
        <p>
          We are <b>working remote</b> most of the days. We value the
          flexibility to work on our own schedules and environments.
        </p>
      </v-flex>

      <v-spacer></v-spacer>

      <v-flex md2 sm4 xs6>
        <p class="subtitle-1 text-uppercase mb-4 font-weight-bold">About</p>
        <p>
          <router-link to="/services" style="color: inherit;"
            >Hiring Thorly</router-link>
        </p>
        <p>
          <router-link to="/team" style="color: inherit;"
            >Meet the team</router-link>
        </p>
      </v-flex>

      <v-spacer></v-spacer>

      <v-flex md2 sm4 xs6>
        <p class="subtitle-1 text-uppercase mb-4 font-weight-bold">Office</p>
        <p>Rua da Prata, 80<br />1100-420 Lisboa<br />Portugal</p>
      </v-flex>

      <v-spacer></v-spacer>

      <v-flex md2 sm4 xs12>
        <p class="subtitle-1 text-uppercase mb-4 font-weight-bold">Contact</p>
        <p>discover@thorly.tech</p>
        <p>+351 918548827</p>
<!--        <p>-->
<!--          <v-btn class="white&#45;&#45;text" icon-->
<!--            ><v-icon size="24px">mdi-linkedin</v-icon></v-btn-->
<!--          >-->
<!--        </p>-->
      </v-flex>
    </v-layout>
    <hr />
    <v-row class="justify-center">
      <v-btn color="white" text class="text-center my-2"
        >THORLY &copy; 2020</v-btn
      >
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped></style>
