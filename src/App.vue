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
        "/": ["Dashboard", "mdi-view-dashboard"],
        "/CreateEvaluation": ["360 Degree Evaluation", "mdi-gavel"],
        "/CreateTemplate": ["Evaluation Template", "mdi-book"],
        "/CreateCriteria": ["Evaluation Criteria", "mdi-flag"],
        "/CreateRelationship": ["Employee Relationship", "mdi-account-multiple"]
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
