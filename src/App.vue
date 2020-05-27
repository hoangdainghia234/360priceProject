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
import NavBar from "./components/layout/NavBar";
/* import Login from "./views/Login";*/

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
      title: "Dashboard",
      itemsNav: {
        "/manager": ["Dashboard", "mdi-home"],
        "/manager/member-review": ["Member review", "mdi-mouse"],
        "/manager/reports": ["Reports", "mdi-account"],
        "/manager/timeline": ["Timeline", "mdi-football-helmet"],
        "/manager/multi-rater-review": ["Multi-rater review", "mdi-mouse"]
      },
      userRole: "Manager"

      // title: "Dashboard",
      // itemsNav: {
      //   "/": ["Dashboard", "mdi-home"],
      //   "/CreateEvaluation": ["360 Degree Evaluation", "mdi-mouse"],
      //   "/CreateTemplate": ["Evaluation Template", "mdi-account"],
      //   "/CreateCriteria": ["Evaluation Criteria", "mdi-football-helmet"],
      //   "/CreateRelationship": ["Employee Relationship", "mdi-mouse"]
      // },
      // userRole: "Manager"
    };
  },

  methods: {
    changeTitle(tag) {
      this.title = tag;
    }
  }
};
</script>
