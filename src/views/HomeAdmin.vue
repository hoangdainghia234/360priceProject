<template>
  <v-app id="inspire">
    <nav-bar :itemsNav="itemsNav" :userRole="userRole" />
    <router-view />
  </v-app>
</template>

<script>
import NavBar from "../components/layout/NavBar";

export default {
  name: "HomeAdmin",

  components: {
    NavBar
  },

  data: () => {
    return {
      itemsNav: [
        {
          name: "Dashboard",
          icon: "mdi-view-dashboard",
          path: "/admin"
        },
        {
          name: "360 Degree Evaluation",
          icon: "mdi-book",
          path: "/admin/create-evaluation"
        },
        {
          name: "Evaluation Template",
          icon: "mdi-bookmark",
          path: "/admin/create-template"
        },
        {
          name: "Evaluation Criteria",
          icon: "mdi-flag",
          path: "/admin/create-criteria"
        }
      ],
      userRole: "Admin"
    };
  }
};
</script>
