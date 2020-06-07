<template>
  <v-app id="inspire">
    <nav-bar :itemsNav="itemsNav" :userRole="userRole" />
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
      itemsNav: [
        {
          name: "Dashboard",
          icon: "mdi-view-dashboard",
          path: "/manager"
        },
        {
          name: "Member Review",
          icon: "mdi-account-box",
          path: "/manager/member-review"
        },
        // {
        //   name: "Reports",
        //   icon: "mdi-book-multiple",
        //   path: "/manager/reports"
        // },
        {
          name: "Timeline",
          icon: "mdi-chart-timeline",
          path: "/manager/timeline"
        }
        // {
        //   name: "Multi-rater Review",
        //   icon: "mdi-account-star",
        //   path: "/manager/multi-rater-review"
        // }
      ],
      userRole: "Manager"
    };
  }
};
</script>
