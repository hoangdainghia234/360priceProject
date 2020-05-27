<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-content>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                  <v-toolbar dark flat style="background: white">
                    <div class="text-center" style="width: 100%">
                      <v-toolbar-title style="color: black"
                        >LOGIN</v-toolbar-title
                      >
                    </div>
                  </v-toolbar>
                  <v-card-text>
                    <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                      <v-text-field
                        outlined
                        v-model="Username"
                        :counter="10"
                        :rules="userNameRules"
                        label="Username"
                        required
                      ></v-text-field>
                      <v-text-field
                        outlined
                        v-model="Password"
                        :rules="passwordRules"
                        label="Password"
                        type="password"
                        required
                      ></v-text-field>
                      <v-card-actions>
                        <v-row>
                          <v-col cols="6">
                            <v-checkbox
                              left
                              v-model="checkbox"
                              :rules="[
                                v => !!v || 'You must agree to continue!'
                              ]"
                              label="Remember Me"
                              required
                            ></v-checkbox>
                          </v-col>
                          <v-col>
                            <v-btn
                              depressed
                              color="success"
                              dark
                              style="float: right"
                              @click="login()"
                            >
                              Sign in
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-actions>
                      <v-col cols="12">
                        <v-btn
                          depressed
                          color="error"
                          class="mr-4"
                          @click="reset"
                          style="width: 80% ;margin: auto 50px"
                        >
                          With ESA Account
                        </v-btn>
                      </v-col>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-content>
      </v-app>
    </v-app>
  </div>
</template>
<script>
import router from "../router/index";

export default {
  data: () => ({
    valid: true,
    Username: "",
    userNameRules: [
      v => !!v || "Username is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    Password: "",
    passwordRules: [v => !!v || "Password is required"],
    checkbox: false,
    lazy: false
  }),

  methods: {
    reset() {
      this.$refs.form.reset();
    },
    login() {
      if (this.Username == "admin") {
        console.log("hello");
        router.push({ name: "admin" });
      }
      if (this.Username == "employee") {
        router.push({ name: "employee" });
      }
      if (this.Username == "manager") {
        router.push({ name: "manager" });
      }
    }
  }
};
</script>
