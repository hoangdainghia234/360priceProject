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
        "/admin": ["Dashboard", "mdi-view-dashboard"],
        "/admin/CreateEvaluation": ["360 Degree Evaluation", "mdi-book"],
        "/admin/CreateTemplate": ["Evaluation Template", "mdi-bookmark"],
        "/admin/CreateCriteria": ["Evaluation Criteria", "mdi-flag"],
        "/admin/CreateRelationship": [
          "Employee Relationship",
          "mdi-account-network"
        ]
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
