<template>
  <div class="">
    <v-content>
      <v-container fluid>
        <v-row class="pr-3 pl-3 pr-sm-5 pl-sm-5 pr-md-7 pl-md-7">
          <v-col>
            <v-card>
              <v-card-subtitle class="d-flex algin-center">
                <v-icon class="mr-3">mdi-information</v-icon>
                <span class="header-card">Evaluation Information</span>
              </v-card-subtitle>

              <v-divider class="mx-0"></v-divider>

              <v-card-text class="evaluation-info">
                <v-row class="evaluation-line" dense>
                  <v-col cols="5" sm="4" md="3" lg="2">
                    <p class="subtitle-1">Template:</p>
                  </v-col>
                  <v-col cols="7" sm="8" md="4" lg="3" xl="2">
                    <v-select
                      v-model="selectedTemplate"
                      :items="template"
                      item-text="name"
                      item-value="id"
                      placeholder="Choose template..."
                      outlined
                      dense
                      hide-details
                    ></v-select>
                  </v-col>
                </v-row>

                <v-row class="evaluation-line" dense>
                  <v-col cols="5" sm="4" md="3" lg="2">
                    <p class="subtitle-1">Period of review:</p>
                  </v-col>

                  <v-col cols="7" sm="8" md="4" lg="3" xl="2">
                    <v-menu
                      ref="periodOfReview"
                      v-model="periodOfReview"
                      :close-on-content-click="false"
                      :return-value.sync="dates"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="dateRangeText"
                          append-icon="mdi-calendar"
                          readonly
                          solo
                          dense
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="dates" range no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="periodOfReview = false"
                          >Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.periodOfReview.save(dates)"
                          >OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>

                <v-row class="evaluation-line" dense>
                  <v-col cols="5" sm="4" md="3" lg="2">
                    <p class="subtitle-1">Start:</p>
                  </v-col>
                  <v-col cols="7" sm="8" md="4" lg="3" xl="2">
                    <v-menu
                      ref="menuRecur"
                      v-model="menuRecur"
                      :close-on-content-click="false"
                      :return-value.sync="dateRecur"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="dateRecur"
                          append-icon="mdi-calendar"
                          readonly
                          solo
                          dense
                          v-on="on"
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="dateRecur" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text @click="menuRecur = false">
                          Cancel
                        </v-btn>
                        <v-btn text @click="$refs.menuRecur.save(dateRecur)"
                          >OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>

                  <v-col class="ml-7 mt-n3">
                    <v-radio-group v-model="radiosDate">
                      <v-radio label="No end date" value=""></v-radio>
                      <v-radio :value="dateRecurEnd">
                        <template v-slot:label>
                          <div class="radio-recur-text align-center">
                            <span>End by:</span>
                            <v-menu
                              ref="menuRecurEnd"
                              v-model="menuRecurEnd"
                              :close-on-content-click="false"
                              :return-value.sync="dateRecurEnd"
                              transition="scale-transition"
                              offset-y
                              min-width="290px"
                            >
                              <template v-slot:activator="{ on }">
                                <v-text-field
                                  v-model="dateRecurEnd"
                                  append-icon="mdi-calendar"
                                  readonly
                                  solo
                                  dense
                                  v-on="on"
                                  class="ml-3 ml-sm-6 mt-5"
                                ></v-text-field>
                              </template>
                              <v-date-picker
                                v-model="dateRecurEnd"
                                no-title
                                scrollable
                              >
                                <v-spacer></v-spacer>
                                <v-btn
                                  text
                                  color="primary"
                                  @click="menuRecurEnd = false"
                                  >Cancel
                                </v-btn>
                                <v-btn
                                  text
                                  @click="$refs.menuRecurEnd.save(dateRecurEnd)"
                                  >OK
                                </v-btn>
                              </v-date-picker>
                            </v-menu>
                          </div>
                        </template>
                      </v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <v-card class="mt-10 pb-5">
              <v-card-subtitle class="d-flex algin-center">
                <v-icon class="mr-3">mdi-account-settings</v-icon>
                <span class="header-card">Appraisee & Raters</span>
              </v-card-subtitle>

              <v-divider class="mx-0"></v-divider>

              <v-card-text class="evaluation-info">
                <v-row class="evaluation-line" dense>
                  <v-col cols="5" sm="4" md="3" lg="2">
                    <p class="subtitle-1">Appraisee name:</p>
                  </v-col>
                  <v-col cols="7" sm="8" md="4" lg="3" xl="2">
                    <v-select
                      v-model="appraisee"
                      :items="users"
                      item-text="fullName"
                      item-value="id"
                      placeholder="Choose one..."
                      outlined
                      dense
                      hide-details
                    ></v-select>
                  </v-col>
                </v-row>

                <v-row class="evaluation-line" dense>
                  <v-col cols="5" sm="4" md="3" lg="2">
                    <p class="subtitle-1">Raters:</p>
                  </v-col>
                </v-row>

                <v-row class="evaluation-line mt-n5" dense>
                  <v-col
                    cols="5"
                    sm="4"
                    md="3"
                    lg="2"
                    class="d-flex justify-center"
                  >
                    <label class="subtitle-1">Name:</label>
                  </v-col>
                  <v-col cols="7" sm="8" md="4" lg="3" xl="2">
                    <multiselect
                      v-model="raters"
                      :options="selectRaters()"
                      :multiple="true"
                      :close-on-select="false"
                      :clear-on-select="false"
                      :preserve-search="true"
                      placeholder="Pick some"
                      label="fullName"
                      track-by="fullName"
                    >
                      <template
                        slot="selection"
                        slot-scope="{ values, search, isOpen }"
                      >
                        <span
                          class="multiselect__single"
                          v-if="values.length &amp;&amp; !isOpen"
                        >
                          {{ values.length }} options selected
                        </span>
                      </template>
                    </multiselect>
                    <v-list>
                      <v-list-item
                        class="rater-items"
                        v-for="rater in raters"
                        :key="rater.id"
                        dense
                      >
                        <!-- <v-list-item-avatar>
                          <v-img :src="rater.avatar"></v-img>
                        </v-list-item-avatar> -->

                        <v-list-item-content>
                          <v-list-item-title
                            v-text="rater.fullName"
                          ></v-list-item-title>
                          <v-list-item-content
                            v-text="getPosition(rater)"
                          ></v-list-item-content>
                        </v-list-item-content>

                        <v-list-item-icon class="mt-5 ml-2">
                          <v-icon
                            v-if="rater.position === 'Leader'"
                            color="indigo"
                          >
                            mdi-star
                          </v-icon>
                        </v-list-item-icon>
                      </v-list-item>
                    </v-list>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <div class="text-center mt-10">
              <v-btn class="btn-bottom mr-7" large @click="publish"
                >Publish
              </v-btn>
              <v-btn class="btn-bottom" large @click="reset">Reset</v-btn>
            </div>
            <v-snackbar top v-model="snackbar">
              <v-icon color="red">mdi-alert</v-icon>
              {{ submitError }}
              <v-btn color="error" text @click="snackbar = false">
                Close
              </v-btn>
            </v-snackbar>
            <v-dialog v-model="isSubmitted" persistent max-width="50rem">
              <v-card>
                <v-card-title class="headline">
                  <v-icon color="#4caf50" size="40" class="mr-5"
                    >mdi-checkbox-marked-circle-outline</v-icon
                  >
                  <span>Successfully Created</span>
                </v-card-title>
                <v-card-text>{{ successAlert() }}</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="#4caf50" text @click="isSubmitted = false"
                    >Go Back</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  name: "createEvaluation",

  components: {
    Multiselect
  },

  props: {},

  data: () => {
    return {
      template: [],
      users: [],
      selectedTemplate: "",
      radiosDate: "",
      appraisee: "",
      raters: "",
      dates: ["2020-07-01", "2020-07-10"],
      dateRecur: new Date().toISOString().substr(0, 10),
      dateRecurEnd: new Date().toISOString().substr(0, 10),
      periodOfReview: false,
      menuRecur: false,
      menuRecurEnd: false,
      checkRecurrence: true,
      evaluation: {},
      sortDates: "",
      ratersId: [],
      snackbar: false,
      submitError: "",
      submit: false,
      isSubmitted: false
    };
  },
  created() {
    this.axios
      .get("/evaluation-information/get_appraisee_raters")
      .then(response => {
        this.template = response.data.template;
        this.users = response.data.user;
        this.users.forEach(
          user =>
            (user.fullName =
              user.first_name + " " + user.middle_name + " " + user.last_name)
        );
      })
      .catch(error => console.log(error));
  },

  computed: {
    dateRangeText() {
      if (this.dates.length === 2) {
        if (this.dates[0] > this.dates[1]) {
          return this.dates
            .slice()
            .reverse()
            .join(" ~ ");
        }
      }
      return this.dates.join(" ~ ");
    }
  },

  methods: {
    publish() {
      this.validateData();
      if (this.submit) {
        this.evaluation.evaluated_user_id = this.appraisee;
        this.evaluation.period_of_review_start = this.dateRangeText.slice(
          0,
          10
        );
        this.evaluation.period_of_review_end = this.dateRangeText.slice(13, 23);
        this.evaluation.created_date = this.dateRecur;
        if (
          this.evaluation.created_date < this.evaluation.period_of_review_end
        ) {
          this.submitError =
            "The start date must be greater than the last date of period of review";
          this.snackbar = true;
          return;
        }
        if (this.radiosDate) {
          this.evaluation.end_date = this.dateRecurEnd;
          if (this.evaluation.end_date < this.evaluation.created_date) {
            this.submitError =
              "The end date must be greater than the start date";
            this.snackbar = true;
            return;
          }
        } else {
          this.evaluation.end_date = null;
        }
        this.evaluation.evaluation_form_id = this.selectedTemplate;
        this.raters.forEach(rater => this.ratersId.push(rater.id));
        this.evaluation.assessor_user_id = this.ratersId;
<<<<<<< HEAD
=======
        let token = localStorage.getItem("access_token") || null;
        this.axios.defaults.headers.common["Authorization"] = "Bearer " + token;
>>>>>>> dungbm-test
        this.axios
          .post(
            "/evaluation-information/add-evaluation-information",
            this.evaluation
          )
          .then(response => {
            console.log(response);
            this.isSubmitted = true;
            this.reset();
          })
          .catch(error => console.log(error));
        this.isSubmitted = true;
      }
    },

    validateData() {
      let message = [
        "The template is required",
        "The period of review is required two different dates",
        "The end date option is required to check",
        "The appraisee name is required",
        "The raters is required",
        "The start date must be greater than the last date of period of review",
        "The end date must be greater than the start date"
      ];
      if (!this.selectedTemplate) {
        this.submitError = message[0];
        this.snackbar = true;
        this.submit = false;
        return;
      }

      if (this.dateRangeText.length < 20) {
        this.submitError = message[1];
        this.snackbar = true;
        this.submit = false;
        return;
      }

      if (this.radiosDate === "") {
        this.submitError = message[2];
        this.snackbar = true;
        this.submit = false;
        return;
      }

      if (!this.appraisee) {
        this.submitError = message[3];
        this.snackbar = true;
        this.submit = false;
        return;
      }

      if (!this.raters) {
        this.submitError = message[4];
        this.snackbar = true;
        this.submit = false;
        return;
      }

      this.submit = true;
    },

    successAlert() {
      return `Thank you`;
    },

    selectRaters() {
      return this.users.filter(user => user.id !== this.appraisee);
    },

    getPosition(rater) {
      let positionRater = "";
      rater.positions.forEach(position => (positionRater = position.name));
      return positionRater;
    },

    reset() {
      (this.raters = ""), (this.selectedTemplate = ""), (this.appraisee = "");
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
.rater-items {
  border-radius: 20px;
  border: 1px solid gray;
  margin-top: 1rem;
}

.evaluation-info {
  padding-right: 5rem !important;
  padding-left: 5rem !important;
}

.header-card {
  font-weight: 600;
  font-size: 1.1rem;
  color: #222;
}

.subtitle-1 {
  color: #333 !important;
}

.evaluation-line {
  display: flex;
  text-align: start;
  margin-bottom: 0.3rem;
}

.radio-recur-text {
  height: 3rem;
  display: flex;
}

.number-end-after {
  width: 6rem;
}

.btn-bottom {
  background-color: #444 !important;
  color: #fff !important;
  width: 6rem;
}

@media screen and (max-width: 960px) {
  .evaluation-info {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }

  .add-template {
    display: flex;
    justify-items: start;
  }
}

@media screen and (max-width: 600px) {
  .evaluation-info {
    padding-right: 2rem !important;
    padding-left: 2rem !important;
  }
}
</style>
