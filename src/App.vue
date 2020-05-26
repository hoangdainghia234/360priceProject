<template>
  <v-app id="inspire">
    <nav-bar :title="title" :itemsNav="itemsNav" :userRole="userRole" />
    <router-view />
  </v-app>
</template>

<script>
import NavBar from "./components/layout/NavBar";

export default {
  name: "App",

  components: {
    NavBar
  },

  data: () => {
    return {
      // title: "Last evaluation result",
      // itemsNav: {
      //   "/employee": "Home",
      //   "/employee/evaluation": "Evaluation Result",
      //   "/employee/timeline": "Timeline",
      //   "/employee/feedback": "Feedback"
      // },
      // userRole: "Employee"

      //------Manager------
      title: "Member review",
      itemsNav: {
        "/manager": "Dashboard",
        "/manager/member-review": "Member review",
        "/manager/reports": "Reports",
        "/manager/timeline": "Timeline",
        "/manager/multi-rater-review": "Multi-rater review"
      },
      userRole: "Manager"
    };
  }
};
</script>
