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
  name: "HomeManager",

  components: {
    NavBar
  },

  data: () => {
    return {
      title: "Dashboard",
      itemsNav: {
        "/manager": ["Dashboard", "mdi-view-dashboard"],
        "/manager/member-review": ["Member review", "mdi-account-box"],
        "/manager/reports": ["Reports", "mdi-book-multiple"],
        "/manager/timeline": ["Timeline", "mdi-chart-timeline"],
        "/manager/multi-rater-review": [
          "Multi-rater review",
          "mdi-account-star"
        ]
      },
      userRole: "Manager"
    };
  },

  methods: {
    changeTitle(tag) {
      this.title = tag;
    }
  }
};
</script>
