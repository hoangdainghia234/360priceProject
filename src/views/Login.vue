<template>
  <div
    id="login"
    class="d-flex align-center"
    style="height: 100vh; width: 100vw"
  >
    <v-content>
      <v-container class="d-flex justify-center" fluid>
        <v-card class="card" width="27rem">
          <v-img
            src="https://jobs.hybrid-technologies.vn/wp-content/uploads/2019/01/Hybrid-Technologies-LogoSuite_-fullcolor.png"
            height="8rem"
            contain
            class="mt-5 mb-5"
          ></v-img>
          <div class="d-flex justify-center align-center">
            <p v-if="false" class="red--text">
              <span v-for="(error, index) in serverError" :key="index">
                <v-icon color="red" class="mr-1 pb-1"
                  >mdi-alert-circle-outline
                </v-icon>
                {{ error[0] }}
              </span>
            </p>
          </div>
          <v-card-text>
            <v-form>
              <v-text-field
                outlined
                v-model="form.email"
                label="Username"
                @keyup.enter="login"
              ></v-text-field>
              <v-text-field
                outlined
                v-model="form.password"
                label="Password"
                type="password"
                @keyup.enter="login"
              ></v-text-field>
              <v-card-actions>
                <v-btn
                  color="#061d45"
                  dark
                  style="float: right"
                  @click="login"
                  width="100%"
                >
                  Log in
                </v-btn>
              </v-card-actions>
              <v-card-actions>
                <v-btn @click="accessOn" color="#ed1b2f" dark width="100%">
                  With ESA Account
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-container>
    </v-content>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "nghia7873@gmail.com",
        password: "fresher12345"
      },
      token: "",
      // serverError: "",
      // invalidCredential: "",
      position: "",
      user: ""
    };
  },

  // computed: {
  //   isValidatedForm() {
  //     return this.form.username != "" && this.form.password != "";
  //   }
  // },

  methods: {
    successRes(response) {
      this.token = response.data.original.access_token;
      this.user = response.data.original.user;
      this.position = this.user.users_positions[0].position.name;
      localStorage.setItem("user", this.user);
      localStorage.setItem("position", this.position);
      localStorage.setItem("access_token", this.token);
      localStorage.setItem("isLoggedIn", true);

      if (this.position.toLowerCase() === "fresher") {
        this.$router.push({ path: "employee" });
      } else if (this.position.toLowerCase() === "manager") {
        this.$router.push({ path: "manager" });
      } else if (this.position.toLowerCase() === "admin") {
        this.$router.push({ path: "admin" });
      } else {
        this.$router.go();
      }
      console.log("login successfully");
    },

    failRes(error) {
      // this.invalidCredential = error.response.data.error;
      // if (this.invalidCredential) this.serverError = "";
      // if (error.response.data.errors)
      //   this.serverError = Object.values(error.response.data.errors);
      // this.password = "";
      console.log(error);
      console.log("Fail");
    },

    login() {
      this.axios
        .post("/auth/login", this.form)
        .then(response => this.successRes(response))
        .catch(error => this.failRes(error));
    },

    accessOn() {
      alert("Coming soon..");
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  background-image: url("../assets/bg_login_page.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.card {
  background-color: #ffffff70;
}
</style>
