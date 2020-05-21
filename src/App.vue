<template>
  <v-app id="inspire">
    <nav-bar />
    <create-evaluation />
  </v-app>
</template>

<script>
import navBar from "./components/layout/navBar";
import createEvaluation from "./components/admin/createEvaluation";

export default {
  name: "App",

  components: {
    navBar,
    createEvaluation
  },

  data: () => ({
    //
  })
};
</script>
