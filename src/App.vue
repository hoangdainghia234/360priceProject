<template>
  <v-app id="inspire">
    <create-evaluation />
    <!-- <createTemplate /> -->
  </v-app>
</template>

<script>
import createEvaluation from "./components/admin/createEvaluation";
// import createTemplate from "./components/admin/createTemplate.vue";

export default {
  name: "App",

  components: {
    // navBar,
    createEvaluation
    // createTemplate
  },

  data: () => ({
    //
  })
};
</script>
