<template>
  <v-app id="inspire">
    <v-app-bar app color="indigo">
      <v-toolbar-title class="white--text headline"
        >360 Degree Feedback</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn text class="white--text">
        <v-icon>mdi-account</v-icon>
        <i>Employee</i>
      </v-btn>

      <v-btn text class="white--text">
        <v-icon>mdi-logout</v-icon>
        <i>Sign out</i>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Feedback />
    </v-content>
  </v-app>
</template>
<script>
import Feedback from "../components/Feedback.vue";

export default {
  components: {
    Feedback
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>
