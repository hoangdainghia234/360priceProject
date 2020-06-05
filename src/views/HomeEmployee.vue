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
      title: "Home",
      itemsNav: {
        "/employee": ["Home", "mdi-home"],
        "/employee/evaluation": ["Evaluation Result", "mdi-account-check"],
        "/employee/timeline": ["Timeline", "mdi-chart-timeline"]
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
