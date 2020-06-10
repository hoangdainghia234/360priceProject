<template>
  <div class="navBar">
    <v-navigation-drawer v-model="drawer" app>
      <v-img :src="require('./new_logo.png')" class="ma-7 mb-0 mt-3"></v-img>
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
        <span class="textIcon">{{ name }}</span>
      </v-btn>
      <v-btn depressed class="btn-nav transparent">
        <v-icon class="icon">mdi-logout-variant</v-icon>
        <router-link to="/logout" class="textIcon">
          Sign Out
        </router-link>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: ["itemsNav", "userRole"],

  data: () => ({
    drawer: null,
    name: ""
  }),

  methods: {
    changeTitle(itemsNav) {
      var title = "";
      itemsNav.forEach(item => {
        if (item.path === this.$route.path) {
          title = item.name;
        }
      });
      return title;
    }
  },

  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.name =
      this.user.first_name +
      " " +
      this.user.middle_name +
      " " +
      this.user.last_name;
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
    color: #fff;
    text-decoration: none;
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
