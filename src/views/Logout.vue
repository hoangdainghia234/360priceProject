<template>
  <div class="logout"></div>
</template>

<script>
export default {
  created() {
    let token = localStorage.getItem("access_token") || null;
    this.axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    this.axios
      .post("http://34.72.144.52/api/auth/logout")
      .then(response => {
        console.log(response);
        console.log("logout successfully");
        localStorage.removeItem("access_token");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");
        localStorage.removeItem("position");

        this.$router.go({
          name: "Login"
        });
      })
      .catch(error => {
        console.log("Error");
        console.log(error);
      });
  }
};
</script>

<style></style>
