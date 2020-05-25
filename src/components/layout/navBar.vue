<template>
  <div>
    <v-navigation-drawer v-model="drawer" app color="indigo lighten-5">
      <v-list>
        <div v-for="(item, index) in itemsNav" :key="`item-${index}`">
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="mx-3"></v-divider>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed class="mr-5 transparent">
        <v-icon large>mdi-account</v-icon>
        <span class="">Admin</span>
      </v-btn>
      <v-btn depressed class="mr-5 transparent">
        <v-icon large>mdi-logout-variant</v-icon>
        <span class="">Sign Out</span>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "navBar",
  props: ["title", "itemsNav"],

  data: () => ({
    drawer: null
  })
};
</script>
<style scoped></style>
