<template>
  <v-app id="inspire">
    <nav-bar :itemsNav="itemsNav" :userRole="userRole" />
    <router-view />
  </v-app>
</template>

<script>
import NavBar from "../components/layout/NavBar";

export default {
  name: "HomeEmployee",

  components: {
    NavBar
  },

  data: () => {
    return {
      itemsNav: [
        {
          name: "Home",
          icon: "mdi-home",
          path: "/employee"
        },
        {
          name: "Evaluation Result",
          icon: "mdi-account-check",
          path: "/employee/evaluation"
        }
        // {
        //   name: "Timeline",
        //   icon: "mdi-chart-timeline",
        //   path: "/employee/timeline"
        // }
      ],
      userRole: "Employee"
    };
  }
};
</script>
