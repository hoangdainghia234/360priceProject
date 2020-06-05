<template>
  <div>
    <v-content class="ma-5">
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
          <v-btn class="mb-5" @click="returnBack()">
            <span>Go back</span>
            <v-icon class="ml-3">mdi-chevron-double-left</v-icon>
          </v-btn>
          <v-card outlined class="mb-5">
            <v-card-title class="headline">
              <v-icon class="mr-3">mdi-information</v-icon>
              <span>Information</span>
            </v-card-title>
            <v-divider></v-divider>
            <v-container>
              <v-row class="d-flex justify-space-around mb-n5">
                <v-col cols="11" lg="4">
                  <v-row>
                    <v-col cols="5" class="text-end pa-0 pr-7">
                      <p class="ma-0">Full name:</p>
                    </v-col>
                    <v-col cols="7" class="pa-0 indigo--text">
                      <p>{{ fullNameUser }}</p>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="5" class="text-end pa-0 pr-7">
                      <p class="ma-0">Position:</p>
                    </v-col>
                    <v-col cols="7" class="pa-0 indigo--text">
                      <p>{{ appraiseePosition }}</p>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="5" class="text-end pa-0 pr-7">
                      <p class="ma-0">SSU:</p>
                    </v-col>
                    <v-col cols="7" class="pa-0 indigo--text ">
                      <p>{{ appraisee.ssu_id }}</p>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col class="align-center" cols="11" lg="4">
                  <v-row>
                    <v-col cols="5" class="text-end pa-0 pr-7">
                      <p class="ma-0">Rater's name:</p>
                    </v-col>
                    <v-col cols="7" class="pa-0 indigo--text ">
                      <p>{{ fullNameRater }}</p>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="5" class="text-end pa-0 pr-7">
                      <p class="ma-0">Position:</p>
                    </v-col>
                    <v-col cols="7" class="pa-0 indigo--text ">
                      <p>{{ raterPosition }}</p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-card>

          <v-card>
            <v-card-title>
              <div class="headline">
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
                class="pa-5"
              >
                <p class="title">
                  {{ category.name }}
                </p>
                <div
                  class="grey lighten-3"
                  v-for="item in category.items_evaluation"
                  :key="item.id"
                >
                  <div
                    style="height: 13rem;"
                    :class="{ notFillItem: item.notFill }"
                  >
                    <v-row class="text-center align-center">
                      <v-col class="mb-n5" cols="12" md="6" lg="2">
                        <p class="subtitle-1">{{ item.name }}</p>
                      </v-col>
                      <v-col class="body-2 mb-n5" cols="12" md="6" lg="2">
                        <p>{{ item.explaination }}</p>
                      </v-col>
                      <v-col cols="12" class="mb-n7" md="6" lg="5">
                        <div class="ml-2 mr-2">
                          <v-list
                            class="d-flex flex-row justify-space-between mb-3"
                            color="transparent"
                            style="position: relative; z-index: 1; top: 10px; bottom: 0"
                          >
                            <div
                              v-for="point in sortPoints(
                                item.rating_informations
                              )"
                              :key="point.id"
                              class="d-flex justify-center"
                              :class="{
                                active: item.selectedPoint === point.id
                              }"
                            >
                              <p
                                style="position: absolute; bottom: 40px; width: 5rem;"
                                class="ratingName body-2"
                              >
                                {{ point.rating_name }}
                              </p>
                              <v-tooltip
                                top
                                min-width="10rem"
                                max-width="15rem"
                              >
                                <template v-slot:activator="{ on }">
                                  <v-btn
                                    @click="clickPoint(item, point.id)"
                                    fab
                                    small
                                    v-on="on"
                                  >
                                    {{ point.rating_point }}
                                  </v-btn>
                                </template>
                                <span>{{ point.explaination }}</span>
                              </v-tooltip>
                            </div>
                          </v-list>
                          <v-progress-linear
                            color="grey"
                            rounded
                            value="100"
                            style="position: relative; bottom: 30px; z-index: 0"
                          ></v-progress-linear>
                          <div>
                            <p
                              class="mb-n5"
                              style="font-size: 0.8rem"
                              :class="{ notFillPoint: item.notFill }"
                            >
                              {{ displayExplain(item) }}
                            </p>
                          </div>
                        </div>
                      </v-col>
                      <v-col cols="12" md="6" lg="3">
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
                  <v-card-title class="subtitle-1 pa-2 pl-3">
                    Comment:
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-textarea
                    v-model="category.comment"
                    solo
                    label="Sample..."
                    hide-details
                    class=""
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
            <v-dialog v-model="isSubmitted" persistent max-width="50rem">
              <v-card>
                <v-card-title class="headline">
                  <v-icon color="#4caf50" size="40" class="mr-5"
                    >mdi-checkbox-marked-circle-outline</v-icon
                  >
                  <span>Successfully Evaluated</span>
                </v-card-title>
                <v-card-text>{{ successAlert() }}</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="#4caf50"
                    text
                    @click="
                      dialog = false;
                      goBack();
                    "
                    >Go Back</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-btn class="mt-4 ml-5" @click="save">
              <v-icon>mdi-content-save</v-icon>
              <span class="pl-2">Save</span>
            </v-btn>
            <v-snackbar top v-model="snackbar">
              <v-icon color="red">mdi-alert</v-icon>
              {{ submitError }}
              <v-btn color="error" text @click="snackbar = false">
                Close
              </v-btn>
            </v-snackbar>
          </v-row>
        </div>
      </v-container>
    </v-content>
  </div>
</template>
<script>
export default {
  data() {
    return {
      getData: false,
      employeeEvaluation: "",
      fullNameRater: "",
      fullNameUser: "",
      rater: "",
      appraisee: "",
      raterPosition: "",
      appraiseePosition: "",
      mainpoints: "",
      resultSubmit: [],
      ratingEvaluation: {},
      categories: [],
      snackbar: false,
      showPointExplain: false,
      submitError: "Please fill out all field",
      notFillAll: false,
      isSubmitted: false,
      dialog: false
    };
  },
  methods: {
    initialize() {
      this.rater = this.employeeEvaluation.user;
      this.appraisee = this.employeeEvaluation.evaluation_information.user;
      this.raterPosition = this.rater.users_positions[0].position.name;
      this.appraiseePosition = this.appraisee.users_positions[0].position.name;
      this.mainpoints = this.employeeEvaluation.evaluation_information.evaluation_form.mainpoints;
      this.mainpoints.forEach(categories =>
        categories.categories_evaluation.forEach(category =>
          category.items_evaluation.forEach(item => {
            this.$set(item, "selectedPoint", 0);
            this.$set(item, "notFill", 0);
          })
        )
      );
      this.fullNameRater = this.userName(
        this.rater.first_name,
        this.rater.last_name,
        this.rater.middle_name
      );
      this.fullNameUser = this.userName(
        this.appraisee.first_name,
        this.appraisee.last_name,
        this.appraisee.middle_name
      );
    },

    userName(firstName, lastName, middleName) {
      return firstName + " " + middleName + " " + lastName;
    },

    sortPoints(points) {
      return points.slice().sort(function(a, b) {
        return a.rating_point - b.rating_point;
      });
    },

    clickPoint(item, pointId) {
      item.notFill = 0;
      item.selectedPoint = pointId;
    },

    displayExplain(item) {
      var select = "";
      if (this.notFillAll && !item.selectedPoint) {
        select = "Please fill in !";
      } else {
        item.rating_informations
          .filter(point => point.id === item.selectedPoint)
          .forEach(i => (select = i.explaination));
      }
      return select;
    },

    successAlert() {
      return `Hi ${this.fullNameRater}. Thank you for taking the time and effort to evaluate for ${this.fullNameUser}.`;
    },

    save() {
      alert("Coming soon...");
    },

    submit() {
      var rating_evaluation = [];
      var submitted = true;
      this.mainpoints.forEach(mainPoint =>
        mainPoint.categories_evaluation.forEach(category => {
          category.items_evaluation.forEach(item => {
            if (!item.selectedPoint) {
              item.notFill = 1;
              this.notFillAll = true;
              submitted = false;
            } else {
              rating_evaluation.push({
                rating_info_id: item.selectedPoint,
                comment: item.comment || ""
              });
              this.categories.push({
                category_id: category.id,
                comment: category.comment || "",
                rating_evaluation: rating_evaluation
              });
            }
          });
        })
      );
      if (submitted) {
        this.ratingEvaluation.assessment_id = this.employeeEvaluation.id;
        this.ratingEvaluation.categories = this.categories;
        this.axios
          .post(
            "http://34.72.144.52/api/rating-evaluation",
            this.ratingEvaluation
          )
          .then((this.isSubmitted = true));
      } else {
        return (this.snackbar = true);
      }
    },

    returnBack() {
      this.$router.replace("/employee");
    },

    goBack() {
      this.$router.replace("/employee");
      this.$router.go();
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
        this.getData = true;
      });
  }
};
</script>
<style lang="scss" scoped>
.active {
  button {
    background: #3f51b5 !important;
    color: #fff;
  }

  .ratingName {
    color: #1a237e;
  }
}

.notFillPoint {
  color: #f44336;
}

.notFillItem {
  border: 1px #f44336 solid;
}
</style>
