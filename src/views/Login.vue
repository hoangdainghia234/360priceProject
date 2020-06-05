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
            <p v-if="serverError" class="red--text">
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
import router from "../router/index";

export default {
  data() {
    return {
      form: {
        email: "nghia7873@gmail.com",
        password: "fresher12345"
      },
      token: "",
      serverError: "",
      invalidCredential: "",
      position: ""
    };
  },

  // computed: {
  //   isValidatedForm() {
  //     return this.form.username != "" && this.form.password != "";
  //   }
  // },

  methods: {
    // login() {
    //   event.preventDefault();
    //   if (this.form.email == "admin") {
    //     console.log("hello");
    //     router.push({ name: "admin" });
    //   } else if (this.form.email == "employee") {
    //     router.push({ name: "employee" });
    //   } else if (this.form.email == "manager") {
    //     router.push({ name: "manager" });
    //   } else {
    //     this.logIn = true;
    //   }
    // },

    login() {
      this.fetchApiLogin();
      console.log("log in...");
    },

    fetchApiLogin() {
      this.axios
        .post("http://34.72.144.52/api/auth/login", this.form)
        .then(response => {
          console.log(response.data);
          this.token = response.data.original.access_token;
          this.position =
            response.data.original.user.users_positions[0].position.name;
          localStorage.setItem("user", response.data.original.user);
          localStorage.setItem("position", this.position);
          localStorage.setItem("access_token", this.token);
          localStorage.setItem("isLoggedIn", true);

          if (this.position == "Fresher") {
            router
              .push({
                path: "/employee"
              })
              .catch(error => console.log(error));
          } else {
            router
              .go({
                name: "employee"
              })
              .catch(error => console.log(error));
          }
          console.log("login successfully");
        })
        .catch(error => {
          // this.invalidCredential = error.response.data.error;
          // if (this.invalidCredential) this.serverError = "";
          // if (error.response.data.errors)
          //   this.serverError = Object.values(error.response.data.errors);
          // this.password = "";
          console.log(error);
        });
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
