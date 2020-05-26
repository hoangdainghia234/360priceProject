<template>
  <v-content>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card>
            <v-card-subtitle class="font-weight-bold">
              <v-icon class="mr-2">mdi-information</v-icon>
              <span>Evaluation Information</span>
            </v-card-subtitle>

            <v-divider class="mx-0"></v-divider>

            <v-card-text class="evaluation-info">
              <v-row class="evaluation-line" dense>
                <v-col cols="5" sm="4" md="2">
                  <p class="subtitle-1">Type of review:</p>
                </v-col>
                <v-col cols="7" sm="7" md="4" lg="3" xl="2">
                  <v-select
                    :items="typeOfReview"
                    placeholder="Performance Review"
                    outlined
                    dense
                  ></v-select>
                </v-col>
              </v-row>

              <v-row class="evaluation-line" dense>
                <v-col cols="5" xs="5" sm="4" md="2">
                  <p class="subtitle-1">Name:</p>
                </v-col>
                <v-col cols="7" sm="7" md="4" lg="3" xl="2">
                  <v-text-field
                    label="name"
                    placeholder="2019 Second Cycle"
                    solo
                    dense
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row class="evaluation-line" dense>
                <v-col cols="5" sm="4" md="2">
                  <p class="subtitle-1">Period of review:</p>
                </v-col>

                <v-col cols="7" sm="7" md="4" lg="3" xl="2">
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

              <v-row dense>
                <v-col>
                  <v-row>
                    <v-col cols="5" sm="4" md="2">
                      <p class="subtitle-1">Recurrence:</p>
                    </v-col>
                    <v-col cols="7" sm="7" md="4" lg="3" xl="2">
                      <v-checkbox
                        v-model="checkRecurrence"
                        :label="
                          `
                          ${checkRecurrence ? 'No recurrence' : 'Recurrence'}
                          `
                        "
                        class="mt-n1"
                      ></v-checkbox>
                    </v-col>
                  </v-row>

                  <v-row class="mt-n3" dense>
                    <v-col cols="5" sm="4" md="2"></v-col>
                    <v-col cols="7" sm="7" md="4" lg="3" xl="2" class="d-flex">
                      <p class="subtitle-1 mr-4">Start:</p>
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
                            class="mt-n1"
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
                        <v-radio value="end-after">
                          <template v-slot:label>
                            <div class="radio-recur-text align-center">
                              <span>End after</span>
                              <v-text-field
                                label="Solo"
                                placeholder="0"
                                solo
                                dense
                                flat
                                outlined
                                class="number-end-after ml-3 mr-3 mt-5"
                              ></v-text-field>
                              <span>occurences</span>
                            </div>
                          </template>
                        </v-radio>
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
                                    @click="
                                      $refs.menuRecurEnd.save(dateRecurEnd)
                                    "
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
                </v-col>
              </v-row>

              <template-evaluation />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
// import footerSec from "../layout/footerSec";
import TemplateEvaluation from "../components/admin/TemplateEvaluation";

export default {
  name: "createEvaluation",

  components: {
    TemplateEvaluation
  },

  props: {},

  data: () => {
    return {
      title: "Create 360 Degree Evaluation",
      departments: [
        "Software Development Departement",
        "Department 1",
        "Department 2",
        "Department 3"
      ],
      mainPoint: [],
      typeOfReview: ["Performance Review", "Review 1", "Review 2", "Review 3"],
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
.evaluation-line {
  height: 4rem;
  display: flex;
  text-align: start;
}

.radio-recur-text {
  height: 3rem;
  display: flex;
}

.number-end-after {
  width: 6rem;
}
</style>
