<template>
  <v-content id="createEvaluation">
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
                    :items="template"
                    :value="template[0]"
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
                    ref="menuRangeText"
                    v-model="menuRangeText"
                    :close-on-content-click="false"
                    :return-value.sync="dates"
                    transition="scale-transition"
                    offset-x
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
                      <v-btn text color="primary" @click="menuRangeText = false"
                        >Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menuRangeText.save(dates)"
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
                    offset-x
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
                  <v-radio-group v-model="radios">
                    <v-radio label="No end date" value="no-end"></v-radio>
                    <v-radio value="end-by">
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
                    :items="employeeName"
                    :placeholder="employeeName[0]"
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
                  <p class="subtitle-1 mt-2">Name:</p>
                </v-col>
                <v-col cols="7" sm="8" md="4" lg="3" xl="2">
                  <v-select
                    :items="employeeName"
                    :placeholder="employeeName[1]"
                    outlined
                    dense
                    hide-details
                  ></v-select>
                </v-col>
                <v-col class="subtitle-1 mt-3 ml-4">
                  <span>Position:</span>
                  <span class="ml-3">Leader</span>
                </v-col>
              </v-row>

              <v-row class="evaluation-line mt-n2" dense>
                <v-col
                  cols="5"
                  sm="4"
                  md="3"
                  lg="2"
                  class="d-flex justify-center"
                >
                  <p class="subtitle-1 mt-2">Name:</p>
                </v-col>
                <v-col cols="7" sm="8" md="4" lg="3" xl="2">
                  <v-select
                    :items="employeeName"
                    :placeholder="employeeName[2]"
                    outlined
                    dense
                    hide-details
                  ></v-select>
                </v-col>
                <v-col class="subtitle-1 mt-3 ml-4">
                  <span>Position:</span>
                  <span class="ml-3">Manager</span>
                </v-col>
              </v-row>
              <v-row class="evaluation-line mt-n5" dense>
                <v-col cols="5" sm="4" md="3" lg="2"></v-col>
                <v-col>
                  <div class="mt-5">
                    <v-btn depressed>
                      <v-icon medium>mdi-plus-circle</v-icon>
                      <span class="ml-2">Add rater</span>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <div class="d-flex justify-center mt-10">
            <v-btn class="btn-bottom mr-7" large>Publish</v-btn>
            <v-btn class="btn-bottom" large>Reset</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "createEvaluation",

  components: {},

  props: {},

  data: () => {
    return {
      title: "Create 360 Degree Evaluation",
      mainPoint: [],
      template: [
        "Java Developer - SE",
        "Software Developer - SD",
        "Data Scientist - DS"
      ],
      employeeName: [
        "Nguyen Van A",
        "Nguyen Van B",
        "Nguyen Van C",
        "Nguyen Van D"
      ],
      dates: ["2019-09-10", "2019-09-20"],
      dateRecur: new Date().toISOString().substr(0, 10),
      dateRecurEnd: new Date().toISOString().substr(0, 10),
      menuRangeText: false,
      menuRecur: false,
      menuRecurEnd: false,
      checkRecurrence: true
    };
  },

  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    }
  }
};
</script>

<style scoped>
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
