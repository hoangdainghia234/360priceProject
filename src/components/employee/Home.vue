<template>
  <div class="">
    <v-content>
      <v-container fluid>
        <div
          class="d-flex justify-center align-center"
          v-if="!getData"
          style="height: 70vh"
        >
          <v-progress-circular
            indeterminate
            color="#3f51b5"
          ></v-progress-circular>
        </div>
        <div v-if="getData">
          <h1>Overview</h1>
          <v-simple-table fixed-header>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Index</th>
                  <th class="text-left">Evaluated User</th>
                  <th class="text-left">Position</th>
                  <th class="text-left">Start Date</th>
                  <th class="text-left">End Date</th>
                  <th class="text-left">Status</th>
                  <th class="text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in listEvaluation"
                  :key="`item-${index}`"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ fullname(item) }}</td>
                  <td>{{ getPosition(item) }}</td>
                  <td>{{ item.evaluation_information.created_date }}</td>
                  <td>{{ item.evaluation_information.end_date }}</td>
                  <td class="d-flex align-center">
                    <v-chip :color="item.is_submitted ? 'info' : 'error'">
                      {{ item.is_submitted ? "Rated" : "Not yet rated" }}
                    </v-chip>
                  </td>
                  <td>
                    <v-btn
                      @click="
                        evaluateNav(
                          item.assessor_user_id,
                          item.evaluation_information.id
                        )
                      "
                      :disabled="item.is_submitted === 1"
                    >
                      Rating
                    </v-btn>
                    <v-btn
                      @click="review"
                      v-if="item.is_submitted === 1"
                      class="ml-3"
                    >
                      Review
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  position: "",
  data() {
    return {
      getData: false,
      listEvaluation: [],
      id: "",
      user: ""
    };
  },
  methods: {
    evaluateNav(assessor_id, evaluate_id) {
      this.$router.push({
        name: "feedback",
        params: {
          assessorId: assessor_id,
          evaluationInfoId: evaluate_id
        }
      });
    },

    getPosition(item) {
      var positionName = "";
      item.evaluation_information.user.users_positions.forEach(
        users_position => (positionName = users_position.position.name)
      );
      return positionName;
    },

    review() {
      alert("Coming soon...");
    },

    fullname(item) {
      var lastName = item.evaluation_information.user.last_name;
      var firstName = item.evaluation_information.user.first_name;
      var middleName = item.evaluation_information.user.middle_name;
      var fullname = firstName + " " + middleName + " " + lastName;
      return fullname;
    }
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.id = this.user.id;
    this.axios.get("/evaluations/retrieve/" + this.id).then(response => {
      this.listEvaluation = response.data;
      this.getData = true;
    });
  }
};
</script>

//
<style lang="scss" scoped>
.status {
  width: 5rem;
}
</style>
