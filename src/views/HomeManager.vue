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
        "/manager": ["Dashboard", "mdi-home"],
        "/manager/member-review": ["Member review", "mdi-mouse"],
        "/manager/reports": ["Reports", "mdi-account"],
        "/manager/timeline": ["Timeline", "mdi-football-helmet"],
        "/manager/multi-rater-review": ["Multi-rater review", "mdi-mouse"]
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
