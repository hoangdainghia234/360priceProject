<template>
  <v-app id="inspire">
    <nav-bar
      :title="title"
      :itemsNav="itemsNav"
      :userRole="userRole"
      @clickTag="changeTitle"
    />
    <router-view />
  </v-app>
</template>

<script>
import navBar from "./components/layout/NavBar";

export default {
  name: "App",

  components: {
    navBar
  },

  data: () => {
    return {
      title: "Dashboard",
      itemsNav: {
        "/": ["Dashboard", "mdi-home"],
        "/CreateEvaluation": ["360 Degree Evaluation", "mdi-mouse"],
        "/CreateTemplate": ["Evaluation Template", "mdi-account"],
        "/CreateCriteria": ["Evaluation Criteria", "mdi-football-helmet"],
        "/CreateRelationship": ["Employee Relationship", "mdi-mouse"]
      },
      userRole: "Admin"
    };
  },

  methods: {
    changeTitle(tag) {
      this.title = tag;
    }
  }
};
</script>
