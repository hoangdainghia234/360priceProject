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
  name: "HomeAdmin",

  components: {
    NavBar
  },

  data: () => {
    return {
      title: "Dashboard",
      itemsNav: {
        "/admin": ["Dashboard", "mdi-home"],
        "/admin/CreateEvaluation": ["360 Degree Evaluation", "mdi-mouse"],
        "/admin/CreateTemplate": ["Evaluation Template", "mdi-account"],
        "/admin/CreateCriteria": ["Evaluation Criteria", "mdi-football-helmet"],
        "/admin/CreateRelationship": ["Employee Relationship", "mdi-mouse"]
      },
      userRole: "Admin"
    };
  },

  methods: {
    changeTitle(tag) {
      this.title = tag;
    }
  }
};
</script>
