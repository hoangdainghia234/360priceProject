<template>
  <div>
    <nav-bar :title="title" :itemsNav="itemsNav" />
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
                  <v-col cols="5" xs="5" sm="4" md="2">
                    <p class="subtitle-1">Type of review:</p>
                  </v-col>
                  <v-col col="8" xs="7" sm="7" md="4" lg="3" xl="2">
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
                  <v-col col="8" xs="7" sm="7" md="4" lg="3" xl="2">
                    <v-select
                      :items="items"
                      placeholder="2019 Second Cycle"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                </v-row>

                <v-row class="evaluation-line" dense>
                  <v-col cols="5" xs="5" sm="4" md="2">
                    <p class="subtitle-1">Period of review:</p>
                  </v-col>

                  <v-col col="7" xs="8" sm="7" md="4" lg="3" xl="2">
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
                        <v-btn
                          text
                          color="primary"
                          @click="menuRangeText = false"
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
                      <v-col cols="5" xs="5" sm="4" md="2">
                        <p class="subtitle-1">Recurrence:</p>
                      </v-col>
                      <v-col col="8" xs="7" sm="7" md="4" lg="3" xl="2">
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
                      <v-col cols="5" xs="5" sm="4" md="2"></v-col>
                      <v-col
                        col="8"
                        xs="7"
                        sm="7"
                        md="4"
                        lg="3"
                        xl="2"
                        class="d-flex"
                      >
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
                          <v-date-picker
                            v-model="dateRecur"
                            no-title
                            scrollable
                          >
                            <v-spacer></v-spacer>
                            <v-btn text @click="menuRecur = false"
                              >Cancel
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

                <v-row>
                  <v-col>
                    <div class="mb-2">
                      <v-icon>mdi-message</v-icon>
                      <span class="ml-2">Templates</span>
                    </div>

                    <!-- Software Development Department -->
                    <v-expansion-panels>
                      <v-expansion-panel class="mb-2">
                        <v-expansion-panel-header>
                          <span class="header-template"
                            >Software Development Department
                          </span>
                          <template v-slot:actions>
                            <v-icon color="indigo" large>$expand</v-icon>
                          </template>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <div class="staffLayer" v-if="showCard">
                            <v-card>
                              <v-card-subtitle>
                                <p>Staff Layer</p>
                              </v-card-subtitle>
                              <v-card-text>
                                <div class="cardTemplate">
                                  <v-row>
                                    <v-col
                                      cols="12"
                                      sm="12"
                                      md="6"
                                      lg="6"
                                      xl="6"
                                      class=""
                                    >
                                      <v-row
                                        v-for="(grade, index) in gradeLayer"
                                        :key="`item-${index}`"
                                        class="rowTemplate"
                                      >
                                        <v-col
                                          cols="4"
                                          class="optionName pr-xs-0 pr-sm-2 pr-md-5 mt-3"
                                        >
                                          Grade:
                                        </v-col>
                                        <v-col cols="8">
                                          <v-select
                                            :items="gradeLayer"
                                            :placeholder="grade"
                                            outlined
                                            dense
                                          ></v-select>
                                        </v-col>
                                      </v-row>
                                    </v-col>
                                    <v-col
                                      cols="12"
                                      sm="12"
                                      md="6"
                                      lg="6"
                                      xl="6"
                                      class=""
                                    >
                                      <v-row
                                        v-for="(template,
                                        index) in templateStaff"
                                        :key="`item-${index}`"
                                        class="rowTemplate"
                                      >
                                        <v-col
                                          cols="4"
                                          class="optionName pr-xs-0 pr-sm-2 pr-md-5 mt-3"
                                        >
                                          Template:
                                        </v-col>
                                        <v-col cols="8">
                                          <v-select
                                            :items="templateStaff"
                                            :placeholder="template"
                                            outlined
                                            dense
                                          ></v-select>
                                        </v-col>
                                      </v-row>
                                    </v-col>
                                  </v-row>
                                </div>
                              </v-card-text>
                              <v-btn
                                class="minus-btn"
                                icon
                                color="black"
                                @click="deleteCard"
                              >
                                <v-icon>mdi-minus-circle</v-icon>
                              </v-btn>
                            </v-card>
                          </div>
                          <!-- Specialist, Expert Layer -->
                          <div class="staffLayer">
                            <v-card>
                              <v-card-subtitle>
                                <p>Specialist, Expert Layer</p>
                              </v-card-subtitle>
                              <v-card-text>
                                <div class="cardTemplate">
                                  <v-row>
                                    <v-col
                                      cols="12"
                                      sm="12"
                                      md="6"
                                      lg="6"
                                      xl="6"
                                      class=""
                                    >
                                      <v-row
                                        v-for="(grade, index) in gradeLayer"
                                        :key="`item-${index}`"
                                        class="rowTemplate"
                                      >
                                        <v-col
                                          cols="4"
                                          class="optionName pr-xs-0 pr-sm-2 pr-md-5 mt-3"
                                        >
                                          Grade:
                                        </v-col>
                                        <v-col cols="8">
                                          <v-select
                                            :items="gradeLayer"
                                            :placeholder="grade"
                                            outlined
                                            dense
                                          ></v-select>
                                        </v-col>
                                      </v-row>
                                    </v-col>
                                    <v-col
                                      cols="12"
                                      sm="12"
                                      md="6"
                                      lg="6"
                                      xl="6"
                                      class=""
                                    >
                                      <v-row
                                        v-for="(template,
                                        index) in templateExpert"
                                        :key="`item-${index}`"
                                        class="rowTemplate"
                                      >
                                        <v-col
                                          cols="4"
                                          class="optionName pr-xs-0 pr-sm-2 pr-md-5 mt-3"
                                        >
                                          Template:
                                        </v-col>
                                        <v-col cols="8">
                                          <v-select
                                            :items="templateExpert"
                                            :placeholder="template"
                                            outlined
                                            dense
                                          ></v-select>
                                        </v-col>
                                      </v-row>
                                    </v-col>
                                  </v-row>
                                </div>
                              </v-card-text>
                              <v-btn
                                class="minus-btn"
                                icon
                                color="black"
                                @click="deleteCard"
                              >
                                <v-icon>mdi-minus-circle</v-icon>
                              </v-btn>
                            </v-card>
                          </div>
                          <!-- LD/BSE Layer -->
                          <div class="staffLayer">
                            <v-card>
                              <v-card-subtitle>
                                <p>LD/BSE Layer</p>
                              </v-card-subtitle>
                              <v-card-text>
                                <div class="cardTemplate oneCol">
                                  <v-row>
                                    <v-col
                                      cols="12"
                                      sm="12"
                                      md="6"
                                      lg="6"
                                      xl="6"
                                      class=""
                                    >
                                      <v-row class="rowTemplate">
                                        <v-col
                                          cols="4"
                                          class="optionName pr-xs-0 pr-sm-2 pr-md-5 mt-3"
                                        >
                                          LD/BSE:
                                        </v-col>
                                        <v-col cols="8">
                                          <v-select
                                            :items="templateLdbse"
                                            :placeholder="templateLdbse[0]"
                                            outlined
                                            dense
                                          ></v-select>
                                        </v-col>
                                      </v-row>
                                    </v-col>
                                  </v-row>
                                </div>
                              </v-card-text>
                              <v-btn
                                class="minus-btn"
                                icon
                                color="black"
                                @click="deleteCard"
                              >
                                <v-icon>mdi-minus-circle</v-icon>
                              </v-btn>
                            </v-card>
                          </div>

                          <!-- SA/SS Layer -->
                          <div class="staffLayer">
                            <v-card>
                              <v-card-subtitle>
                                <p>SA/SS Layer</p>
                              </v-card-subtitle>
                              <v-card-text>
                                <div class="cardTemplate oneCol">
                                  <v-row>
                                    <v-col
                                      cols="12"
                                      sm="12"
                                      md="6"
                                      lg="6"
                                      xl="6"
                                      class=""
                                    >
                                      <v-row class="rowTemplate">
                                        <v-col
                                          cols="4"
                                          class="optionName pr-xs-0 pr-sm-2 pr-md-5 mt-3"
                                        >
                                          Template:
                                        </v-col>
                                        <v-col cols="8">
                                          <v-select
                                            :items="templateSass"
                                            :placeholder="templateSass[0]"
                                            outlined
                                            dense
                                          ></v-select>
                                        </v-col>
                                      </v-row>
                                    </v-col>
                                  </v-row>
                                </div>
                              </v-card-text>
                              <v-btn
                                class="minus-btn"
                                icon
                                color="black"
                                @click="deleteCard"
                              >
                                <v-icon>mdi-minus-circle</v-icon>
                              </v-btn>
                            </v-card>
                          </div>

                          <!-- Manager Layer -->
                          <div class="staffLayer">
                            <v-card>
                              <v-card-subtitle>
                                <p>Manager Layer</p>
                              </v-card-subtitle>
                              <v-card-text>
                                <div class="cardTemplate oneCol">
                                  <v-row>
                                    <v-col
                                      cols="12"
                                      sm="12"
                                      md="6"
                                      lg="6"
                                      xl="6"
                                      class=""
                                    >
                                      <v-row class="rowTemplate">
                                        <v-col
                                          cols="4"
                                          class="optionName pr-xs-0 pr-sm-2 pr-md-5 mt-3"
                                        >
                                          Template:
                                        </v-col>
                                        <v-col cols="8">
                                          <v-select
                                            :items="templateManager"
                                            :placeholder="templateManager[0]"
                                            outlined
                                            dense
                                          ></v-select>
                                        </v-col>
                                      </v-row>
                                    </v-col>
                                  </v-row>
                                </div>
                              </v-card-text>
                              <v-btn
                                class="minus-btn"
                                icon
                                color="black"
                                @click="deleteCard"
                              >
                                <v-icon>mdi-minus-circle</v-icon>
                              </v-btn>
                            </v-card>
                          </div>

                          <div class="ml-5 mt-6 pb-4">
                            <v-btn depressed>
                              <v-icon medium>mdi-plus-circle</v-icon>
                              <span class="ml-2">Add layer</span>
                            </v-btn>
                          </div>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                      <v-expansion-panel>
                        <v-expansion-panel-header>
                          <span class="text-center">BO Department</span>
                          <template v-slot:actions>
                            <v-icon color="indigo" large>$expand</v-icon>
                          </template>
                        </v-expansion-panel-header>
                      </v-expansion-panel>
                      <v-expansion-panel-content></v-expansion-panel-content>
                    </v-expansion-panels>

                    <div class="mt-10">
                      <v-btn class="btn-bottom" large>Publish</v-btn>
                      <v-btn class="btn-bottom" large>Reset</v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <!-- <footer-sec /> -->
  </div>
</template>

<script>
import navBar from "../layout/navBar";
// import footerSec from "../layout/footerSec";

export default {
  name: "createEvaluation",

  components: {
    navBar
    // footerSec
  },

  props: {},

  data: () => {
    return {
      title: "Create 360 Degree Evaluation",
      itemsNav: [
        "Dashboard",
        "360 degree evaluation",
        "Evaluation Template",
        "Evaluation criteria",
        "Employee relationship"
      ],
      departments: [
        "Software Development Departement",
        "Department 1",
        "Department 2",
        "Department 3"
      ],
      totalWeights: [100, 90, 80],
      layers: ["Staff", "Admin", "HR", "Developer"],
      grades: [
        "Advance High [AH]",
        "Advance High [AH] 2",
        "Advance High [AH] 3"
      ],
      mainPoint: [],
      typeOfReview: ["Performance Review", "Review 1", "Review 2", "Review 3"],
      dates: ["2019-09-10", "2019-09-20"],
      dateRecur: new Date().toISOString().substr(0, 10),
      dateRecurEnd: new Date().toISOString().substr(0, 10),
      menuRangeText: false,
      menuRecur: false,
      menuRecurEnd: false,
      checkRecurrence: true,
      showCard: true,
      gradeLayer: [
        "AH (Advance High)",
        "AL (Advance Low)",
        "I (Intermediate)",
        "E (Entry)"
      ],
      templateStaff: [
        "Staff - AH Template",
        "Staff - AL Template",
        "Staff - I Template",
        "Staff - E Template"
      ],
      templateExpert: [
        "Specialist, Expert - AL, AH Template",
        "Specialist, Expert - AL, AH Template",
        "Specialist, Expert - E, I Template",
        "Specialist, Expert - E, I Template"
      ],
      templateLdbse: [
        "LD/BSE Template",
        "LD/BSE Template 1",
        "LD/BSE Template 2"
      ],
      templateSass: [
        "SA/SS Template",
        "SA/SS Template 1",
        "SA/SS Template 2",
        "SA/SS Template 3"
      ],
      templateManager: [
        "Manager Template",
        "Manager Template 1",
        "Manager Template 2"
      ]
    };
  },

  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    }
  },

  methods: {
    deleteCard: function() {
      return (this.showCard = false);
    }
  }
};
</script>

<style lang="scss">
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

.staffLayer {
  margin-left: 7rem;
  margin-right: 8rem;
  margin-top: 1rem;
}

.staffLayer:last-child {
  margin-bottom: 1rem;
}

.header-template {
  text-align: center;
}

.cardTemplate {
  display: flex;
  justify-content: center;
  padding-right: 7rem;
  margin-top: -2rem;
  width: 100%;
}

.oneCol {
  justify-content: start;
}

.rowTemplate {
  height: 4rem;
}

.optionName {
  display: flex;
  justify-content: end;
}

.minus-btn {
  position: absolute !important;
  top: 0;
  right: -3rem;
}

.btn-bottom {
  background-color: #444 !important;
  color: #fff !important;
  margin-right: 2rem;
  width: 6rem;
}

.evaluation-info {
  padding-right: 5rem !important;
  padding-left: 5rem !important;
}

@media screen and (max-width: 1604px) {
  .staffLayer {
    margin-left: 3rem;
    margin-right: 5rem;
    margin-top: 1rem;
  }

  .cardTemplate {
    padding-right: 5rem;
  }
}

@media screen and (max-width: 1402px) {
  .cardTemplate {
    margin-right: 1rem !important;
    padding-right: 2rem !important;
  }
}

@media screen and (max-width: 960px) {
  .staffLayer {
    margin-left: 1rem;
    margin-right: 2rem;
    margin-top: 1rem;
  }

  .cardTemplate {
    margin-right: 1rem;
    padding-right: 7rem !important;
  }

  .evaluation-info {
    padding-right: 3rem !important;
    padding-left: 3rem !important;
  }
}

@media screen and (max-width: 760px) {
  .cardTemplate {
    margin-right: 1rem;
    padding-right: 4rem !important;
  }
}

@media screen and (max-width: 600px) {
  .cardTemplate {
    padding-right: 3rem !important;
    padding-left: 0 !important;
  }

  .evaluation-info {
    padding-right: 2rem !important;
    padding-left: 2rem !important;
  }

  .staffLayer {
    margin-left: 1rem;
    margin-right: 1.5rem;
    margin-top: 1rem;
  }

  .minus-btn {
    margin-left: 0.5rem !important;
  }
}
</style>
