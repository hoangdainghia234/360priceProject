<template>
  <div class="navBar">
    <v-navigation-drawer v-model="drawer" app>
      <v-img
        src="https://jobs.hybrid-technologies.vn/wp-content/uploads/2019/01/Hybrid-Technologies-LogoSuite_-fullcolor.png"
        class="ma-10 mb-0 mt-3"
      ></v-img>
      <v-list>
        <v-list-item
          v-for="(item, index) in itemsNav"
          :key="index"
          link
          class=""
        >
          <v-icon class="iconNav">{{ item.icon }}</v-icon>
          <router-link :to="item.path" class="itemLink">
            {{ item.name }}
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar hide-on-scroll aboslute app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="titleNav">{{
        changeTitle(itemsNav)
      }}</v-toolbar-title>
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
  props: ["itemsNav", "userRole"],

  data: () => ({
    drawer: null
  }),

  methods: {
    signOut() {
      this.$router.push("/");
    },
    changeTitle(itemsNav) {
      var title = "";
      itemsNav.forEach(item => {
        if (item.path === this.$route.path) {
          title = item.name;
        }
      });
      return title;
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
