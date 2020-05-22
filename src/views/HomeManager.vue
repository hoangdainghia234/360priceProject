<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-toolbar class="d-flex justify-center white--text" color="indigo">
        <v-toolbar-title class="headline">DASHBOARD</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <div v-for="i in 5" :key="i">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>{{ listItem[i] }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="indigo">
      <v-app-bar-nav-icon
        large
        class="white--text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text headline">
        Member review
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text class="white--text">
        <v-icon>mdi-account</v-icon>
        <i>Manager</i>
      </v-btn>
      <v-btn text class="white--text">
        <v-icon>mdi-logout</v-icon>
        <i>Sign out</i>
      </v-btn>
    </v-app-bar>

    <v-content>
      <MemberReview />
    </v-content>
  </v-app>
</template>
<script>
// import Menu from '../components/Menu'
import MemberReview from "../components/MemberReview.vue";

export default {
  components: {
    MemberReview
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    listItem: [
      "",
      "Dashboard",
      "Member review",
      "Reports",
      "Timeline",
      "Multi-rater review"
    ]
  })
};
</script>
