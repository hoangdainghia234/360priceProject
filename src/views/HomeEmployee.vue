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
import NavBar from "../components/layout/NavBar";

export default {
  name: "HomeEmployee",

  components: {
    NavBar
  },

  data: () => {
    return {
      title: "Last evaluation result",
      itemsNav: {
        "/employee": ["Home", "mdi-home"],
        "/employee/evaluation": ["Evaluation Result", "mdi-mouse"],
        "/employee/timeline": ["Timeline", "mdi-account"],
        "/employee/feedback": ["Feedback", "mdi-football-helmet"]
      },
      userRole: "Employee"
    };
  },

  methods: {
    changeTitle(tag) {
      this.title = tag;
    }
  }
};
</script>
