<template>
  <v-app id="inspire">
    <nav-bar :title="title" :itemsNav="itemsNav" :userRole="userRole" />
    <router-view />
    <!-- <create-evaluation /> -->
    <!-- <createTemplate /> -->
  </v-app>
</template>

<script>
import navBar from "./components/layout/navBar";
// import createEvaluation from "./views/createEvaluation";

export default {
  name: "App",

  components: {
    navBar
    // createEvaluation
    // createTemplate
  },

  data: () => {
    return {
      title: "Create 360 Degree Evaluation",
      itemsNav: {
        "/": "Dashboard",
        "/createEvaluation": "360 Degree Evaluation",
        "/createTemplate": "Evaluation Template",
        "/createCriteria": "Evaluation Criteria",
        "/createRelationship": "Employee Relationship"
      },
      userRole: "Admin"
    };
  }
};
</script>
