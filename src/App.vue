<template>
  <v-app id="inspire">
    <nav-bar :title="title" :itemsNav="itemsNav" :userRole="userRole" />
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
      title: "Create 360 Degree Evaluation",
      itemsNav: {
        "/": "Dashboard",
        "/CreateEvaluation": "360 Degree Evaluation",
        "/CreateTemplate": "Evaluation Template",
        "/CreateCriteria": "Evaluation Criteria",
        "/CreateRelationship": "Employee Relationship"
      },
      userRole: "Admin"
    };
  }
};
</script>
