<template>
  <v-app id="inspire">
    <!-- <nav-bar /> -->
    <!-- <create-evaluation /> -->
    <createTemplate />
  </v-app>
</template>

<script>
// import navBar from "./components/layout/navBar";
// import createEvaluation from "./components/admin/createEvaluation";
import createTemplate from "./components/admin/createTemplate.vue";

export default {
  name: "App",

  components: {
    // navBar,
    // createEvaluation
    createTemplate
  },

  data: () => ({
    //
  })
};
</script>
