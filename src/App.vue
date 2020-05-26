<template>
  <v-app id="inspire">
    <nav-bar :title="title" :itemsNav="itemsNav" :userRole="userRole" />
    <router-view />
  </v-app>
</template>

<script>
/* import Login from "./views/Login";*/
import navBar from "./components/layout/navBar";

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
