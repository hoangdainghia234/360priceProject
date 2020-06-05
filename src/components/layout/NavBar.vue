<template>
  <div class="navBar">
    <v-navigation-drawer v-model="drawer" app>
      <v-img
        src="https://jobs.hybrid-technologies.vn/wp-content/uploads/2019/01/Hybrid-Technologies-LogoSuite_-fullcolor.png"
        class="ma-10 mb-0 mt-3"
      ></v-img>
      <v-list>
        <v-list-item v-for="(tag, item) in itemsNav" :key="item" link class="">
          <v-icon class="iconNav">{{ tag[1] }}</v-icon>
          <router-link :to="item" class="itemLink">
            {{ tag[0] }}
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar hide-on-scroll aboslute app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="titleNav">{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed class="btn-nav transparent">
        <v-icon class="icon">mdi-account</v-icon>
        <span class="textIcon">{{ userRole }}</span>
      </v-btn>
      <v-btn depressed class="btn-nav transparent" @click="signOut()">
        <v-icon class="icon">mdi-logout-variant</v-icon>
        <span class="textIcon">Sign Out</span>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: ["title", "itemsNav", "userRole"],

  data: () => ({
    drawer: null
  }),

  methods: {
    signOut() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss">
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

.itemLink {
  text-decoration: none;
  color: #000 !important;
  width: 100%;
  line-height: 2.5;
  outline: none;
  font-size: 0.9rem;
  font-weight: 500;
}

.iconNav {
  margin-right: 1rem;
}
</style>
