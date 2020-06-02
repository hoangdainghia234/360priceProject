<template>
  <div>
    <v-content>
      <v-container fluid>
        <v-card outlined class="mb-3">
          <v-card-title>
            <v-icon class="mr-3">mdi-information</v-icon>
            <span>Information</span>
          </v-card-title>
          <v-divider></v-divider>
          <v-container>
            <v-row class="d-flex justify-space-around">
              <v-col cols="11" lg="4">
                <v-row>
                  <v-col cols="3" class="pa-0">
                    <p class="ma-0">Full name:</p>
                  </v-col>
                  <v-col cols="9" class="pa-0">
                    <v-text-field
                      outlined
                      hide-details
                      dense
                      class="ml-4"
                      v-model="fullNameUser"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="3" class="pa-0">
                    <p class="ma-0">Position:</p>
                  </v-col>
                  <v-col cols="9" class="pa-0">
                    <v-text-field
                      outlined
                      hide-details
                      dense
                      class="ml-4"
                      v-model="appraiseePosition"
                      readonly
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="3" class="pa-0">
                    <p class="ma-0">SSU:</p>
                  </v-col>
                  <v-col cols="9" class="pa-0">
                    <v-text-field
                      outlined
                      hide-details
                      dense
                      class="ml-4"
                      v-model="appraisee.ssu_id"
                      readonly
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="11" lg="4">
                <v-row>
                  <v-col cols="3" class="pa-0">
                    <p class="ma-0">Rater's name:</p>
                  </v-col>
                  <v-col cols="9" class="pa-0">
                    <v-text-field
                      outlined
                      hide-details
                      dense
                      class="ml-4"
                      v-model="fullNameRater"
                      readonly
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="3" class="pa-0">
                    <p class="ma-0">Position:</p>
                  </v-col>
                  <v-col cols="9" class="pa-0">
                    <v-text-field
                      outlined
                      hide-details
                      dense
                      class="ml-4"
                      v-model="raterPosition"
                      readonly
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

        <v-card>
          <v-card-title>
            <div class="">
              <v-icon class="mr-3">mdi-checkbox-marked-circle-outline</v-icon>
              <span>Ratings</span>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <div v-for="categories in mainpoints" :key="categories.id">
            <v-container
              fluid
              v-for="category in categories.categories_evaluation"
              :key="category.id"
            >
              <p class="title">
                <i>{{ category.name }}</i>
              </p>
              <div
                class="grey lighten-2"
                v-for="item in category.items_evaluation"
                :key="item.id"
              >
                <div>
                  <v-row class="text-center align-center">
                    <v-col cols="12" md="6" lg="2">
                      <p>{{ item.name }}</p>
                    </v-col>
                    <v-col cols="12" md="6" lg="2">
                      <p>{{ item.explaination }}</p>
                    </v-col>
                    <v-col cols="12" class="" md="6" lg="4">
                      <div class="ml-2 mr-2">
                        <v-list
                          class="d-flex flex-row justify-space-between mb-3"
                          color="transparent"
                          style="position: relative; z-index: 1; top: 10px; bottom: 0"
                        >
                          <div
                            v-for="point in item.rating_informations"
                            :key="point.id"
                            class="d-flex justify-center"
                            :class="{ active: item.selectedPoint === point.id }"
                          >
                            <p
                              style="position: absolute; bottom: 39px"
                              class="body-2"
                            >
                              {{ point.rating_name }}
                            </p>
                            <v-btn
                              @click="clickPoint(item, point.id)"
                              fab
                              small
                            >
                              {{ point.rating_point }}
                            </v-btn>
                          </div>
                        </v-list>
                        <v-progress-linear
                          color="grey"
                          rounded
                          value="100"
                          style="position: relative; bottom: 30px; z-index: 0"
                        ></v-progress-linear>
                        <div class="text-left body-2 ma-0">
                          <p class="text-left body-2 ma-0">
                            {{ displayDesc(item) }}
                          </p>
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="12" md="6" lg="4">
                      <v-textarea
                        v-model="item.comment"
                        solo
                        label="Comment: "
                        class="pr-4 pl-4"
                        hide-details
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </div>
                <v-divider></v-divider>
              </div>

              <v-card class="mt-4 mb-5" outlined>
                <v-card-title class="pa-1">
                  Comment:
                </v-card-title>
                <v-divider></v-divider>
                <v-textarea
                  v-model="category.comment"
                  solo
                  label="Sample..."
                  hide-details
                ></v-textarea>
              </v-card>
            </v-container>
          </div>
        </v-card>

        <v-row class="d-flex justify-center mb-5">
          <v-btn dark class="mt-4" @click="submit">
            <v-icon>mdi-telegram</v-icon>
            <span class="pl-2">Submit</span>
          </v-btn>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>
<script>
export default {
  data() {
    return {
      employeeEvaluation: "",
      fullNameRater: "",
      fullNameUser: "",
      rater: "",
      appraisee: "",
      raterPosition: "",
      appraiseePosition: "",
      mainpoints: "",
      resultSubmit: [],
      categories: []
    };
  },
  methods: {
    initialize() {
      this.rater = this.employeeEvaluation.user;
      this.appraisee = this.employeeEvaluation.evaluation_information.user;
      this.raterPosition = this.rater.positions[0].name;
      this.appraiseePosition = this.appraisee.positions[0].name;
      this.mainpoints = this.employeeEvaluation.evaluation_information.evaluation_form.mainpoints;
      this.mainpoints.forEach(categories =>
        categories.categories_evaluation.forEach(category =>
          category.items_evaluation.forEach(item =>
            this.$set(item, "selectedPoint", 0)
          )
        )
      );
      this.fullNameRater = this.userName(
        this.employeeEvaluation.user.first_name,
        this.employeeEvaluation.user.last_name,
        this.employeeEvaluation.user.middle_name
      );
      this.fullNameUser = this.userName(
        this.employeeEvaluation.evaluation_information.user.first_name,
        this.employeeEvaluation.evaluation_information.user.last_name,
        this.employeeEvaluation.evaluation_information.user.middle_name
      );
    },
    userName(firstName, lastName, middleName) {
      return firstName + " " + middleName + " " + lastName;
    },
    displayDesc(item) {
      var select = "";
      item.rating_informations
        .filter(point => point.id === item.selectedPoint)
        .forEach(i => (select = i.explaination));
      return select;
    },
    submit() {
      // var category_id = "";
      // var comment = "";
      var rating_evaluation = [];
      this.mainpoints.forEach(mainPoint =>
        mainPoint.categories_evaluation.forEach(category => {
          category.items_evaluation.forEach(item => {
            rating_evaluation.push({
              rating_info_id: item.selectedPoint,
              comment: item.comment || ""
            });
            this.categories.push({
              category_id: category.id,
              comment: category.comment || "",
              rating_evaluation: rating_evaluation
            });
          });
        })
      );

      this.categories.assessment_id = this.employeeEvaluation.id;
      this.axios
        .post("http://34.72.144.52/api/rating-evaluation", this.categories)
        .then(response => console.log(response));
    },
    clickPoint(item, pointId) {
      item.selectedPoint = pointId;
    }
  },

  created() {
    var assessorId = this.$route.params.assessorId;
    var evaluationInfoId = this.$route.params.evaluationInfoId;
    this.axios
      .get(
        "http://34.72.144.52/api/evaluations/assessor/" +
          assessorId +
          "/evaluation-info/" +
          evaluationInfoId
      )
      .then(response => {
        this.employeeEvaluation = response.data;
        this.initialize();
      });
  }
};
</script>
<style scoped>
.active > button {
  background: blue !important;
}
</style>
