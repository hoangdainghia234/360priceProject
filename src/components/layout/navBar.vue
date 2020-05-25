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
    <v-app-bar hide-on-scroll aboslute app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed class="btn-nav transparent">
        <v-icon class="icon">mdi-account</v-icon>
        <span class="textIcon">Admin</span>
      </v-btn>
      <v-btn depressed class="btn-nav transparent">
        <v-icon class="icon">mdi-logout-variant</v-icon>
        <span class="textIcon">Sign Out</span>
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
<style lang="scss">
@media screen and (max-width: 600px) {
  .btn-nav {
    .icon {
      margin-right: 1px !important;
      font-size: 1.5rem !important;
    }

    .textIcon {
      font-size: 0.8rem !important;
    }
  }
}

@media screen and (max-width: 960px) {
  .btn-nav {
    .icon {
      margin-right: 3px !important;
      font-size: 1.6rem !important;
    }

    .textIcon {
      font-size: 0.8rem !important;
    }
  }
}

.btn-nav {
  .icon {
    margin-right: 5px;
    font-size: 2rem;
  }

  .textIcon {
    font-size: 1rem;
  }
}
</style>
