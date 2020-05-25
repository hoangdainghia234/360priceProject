<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list>
        <v-list-item link style="border: 1px solid #A9A9A9">
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link style="border: 1px solid #A9A9A9">
          <v-list-item-content>
            <v-list-item-title>360 degree evaluation</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link style="border: 1px solid #A9A9A9">
          <v-list-item-content>
            <v-list-item-title>Evaluation template</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link style="border: 1px solid #A9A9A9">
          <v-list-item-content>
            <v-list-item-title>Evaluation criteria</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link style="border: 1px solid">
          <v-list-item-content>
            <v-list-item-title>Employee relationship</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark style="background-color: LightGray" color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="margin: 15px">Create criteria</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon> mdi-account-circle</v-icon>
      <v-toolbar-title style="margin: 15px">Admin</v-toolbar-title>
      <v-icon>mdi-arrow-right-bold-circle</v-icon>
      <v-toolbar-title style="margin: 15px">Sign out</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <!-- <TopComponent /> -->
      <Employee />
    </v-content>
  </v-app>
</template>

<script>
/* import TopComponent from '../components/TopComponent'; */
import Employee from "../components/Employee";

export default {
  props: {
    source: String
  },
  components: {
    /* TopComponent */
    Employee
  },
  data: () => ({
    drawer: null
  })
};
</script>
