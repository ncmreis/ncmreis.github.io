<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          :x-large="xlarge"
          :x-small="xsmall"
          dark
          v-bind="attrs"
          v-on="on"
          :color="button"
        >
          <v-icon v-if="icon" color="white" left>{{ icon }}</v-icon
          >{{ description }}
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="#2C81D6">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Schedule your call</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <div
          class="calendly-inline-widget"
          :data-url="call"
          style="min-width:320px;height:630px;overflow:hidden;"
        >
          <script
            defer
            type="application/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
          ></script>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["call", "xlarge", "xsmall", "description", "icon", "button"],
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
.cal {
  overflow: hidden;
  background-color: black;
  height: 1500px;
}
</style>
