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
            :src="require('../assets/new_logo.png')"
            height="5rem"
            contain
            class="mt-5 mb-5"
          ></v-img>
          <div class="d-flex justify-center align-center mb-n5">
            <p v-if="serverError" class="red--text">
              <span>
                <v-icon color="red" class="mr-1 pb-1"
                  >mdi-alert-circle-outline
                </v-icon>
                {{ invalidCredential }}
              </span>
            </p>
          </div>
          <v-card-text>
            <v-form>
              <v-text-field
                outlined
                v-model="form.email"
                label="Email"
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

              <!-- HINT -->
              <v-card-actions class="d-flex justify-center">
                <v-btn icon @click="show = !show">
                  <v-icon>{{
                    show ? "mdi-chevron-up" : "mdi-chevron-down"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="show">
                  <v-simple-table
                    :dense="dense"
                    :fixed-header="fixedHeader"
                    :height="height"
                  >
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Position</th>
                          <th class="text-left">Email</th>
                          <th class="text-left">Password</th>
                          <th class="text-left">Copy</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in accounts" :key="item.email">
                          <td>{{ item.position }}</td>
                          <td>{{ item.email }}</td>
                          <td>{{ item.password }}</td>
                          <td>
                            <v-btn @click="copyData(item)">
                              <v-icon small>
                                mdi-content-copy
                              </v-icon>
                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </div>
              </v-expand-transition>
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
        email: "",
        password: ""
      },
      token: "",
      serverError: false,
      invalidCredential: "Invalid username or password.",
      position: "",
      user: "",
      id: "",
      show: false,
      dense: false,
      fixedHeader: false,
      height: 200,
      accounts: [
        {
          position: "admin",
          email: "admin360evaluation@gmail.com",
          password: "admin12345"
        },
        {
          position: "employee",
          email: "fresher360evaluation@gmail.com",
          password: "fresher12345"
        },
        {
          position: "manager",
          email: "mentor360evaluation@gmail.com",
          password: "mentor12345"
        }
      ],
      status: ""
    };
  },

  methods: {
    successRes(response) {
      if (response.data.original.status === 200) {
        this.status = 200;
        this.token = response.data.original.access_token;
        this.user = response.data.original.user;
        this.position = this.user.users_positions[0].position.name;
        localStorage.setItem("user", JSON.stringify(this.user));
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
      } else {
        this.serverError = true;
      }
    },

    login() {
      this.axios
        .post("/auth/login", this.form)
        .then(response => this.successRes(response))
        .catch(() => {
          if (!this.status) {
            this.serverError = true;
          }
        });
    },

    copyData(item) {
      this.form.email = item.email;
      this.form.password = item.password;
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
