<template>
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
                      <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="">
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
                      <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="">
                        <v-row
                          v-for="(template, index) in templateStaff"
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
                <v-btn class="minus-btn" icon color="black" @click="deleteCard">
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
                      <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="">
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
                      <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="">
                        <v-row
                          v-for="(template, index) in templateExpert"
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
                <v-btn class="minus-btn" icon color="black" @click="deleteCard">
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
                      <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="">
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
                <v-btn class="minus-btn" icon color="black" @click="deleteCard">
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
                      <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="">
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
                <v-btn class="minus-btn" icon color="black" @click="deleteCard">
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
                      <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="">
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
                <v-btn class="minus-btn" icon color="black" @click="deleteCard">
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
</template>

<script>
export default {
  name: "TemplateEvaluation",

  data: () => {
    return {
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

  methods: {
    deleteCard: function() {
      return (this.showCard = false);
    }
  }
};
</script>

<style scoped>
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
    padding-right: 1rem !important;
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
