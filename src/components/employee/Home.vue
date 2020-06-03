<template>
  <div class="">
    <v-content>
      <v-container fluid>
        <h1>Overview</h1>
        <v-simple-table fixed-header height="300px">
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
                <td>{{ item.evaluation_information.user.last_name }}</td>
                <td
                  v-for="position in item.evaluation_information.user.positions"
                  :key="position.id"
                >
                  {{ position.name }}
                </td>
                <td>{{ item.evaluation_information.created_date }}</td>
                <td>{{ item.evaluation_information.end_date }}</td>
                <td class="status">
                  {{ item.is_submitted ? "Rated" : "Not yet rated" }}
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
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
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
      listEvaluation: []
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
      return item.evaluation_information.user.positions[0].name;
    }
  },
  created() {
    this.axios
      .get("http://34.72.144.52/api/evaluations/retrieve/3")
      .then(response => {
        this.listEvaluation = response.data;
        console.log(
          this.listEvaluation[0].evaluation_information.user.positions[0].name
        );
      });
  }
};
</script>

//
<style lang="scss" scoped>
//
</style>
