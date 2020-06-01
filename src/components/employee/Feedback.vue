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
                      v-model="employeeEvaluation.user.positions[0].name"
                      readonly
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="3" class="pa-0">
                    <p class="ma-0">Department:</p>
                  </v-col>
                  <v-col cols="9" class="pa-0">
                    <v-text-field
                      outlined
                      hide-details
                      dense
                      class="ml-4"
                      v-model="employee.department"
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
                      v-model="employee.ssu"
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
                      v-model="employee.rater.position"
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
          <v-container fluid v-for="category in categories" :key="category.id">
            <p class="title">
              <i>{{ category.name }}</i>
            </p>
            <div
              class="grey lighten-2"
              v-for="item in category.categoryItems"
              :key="item.id"
            >
              <div>
                <v-row class="text-center align-center">
                  <v-col cols="12" md="6" lg="2">
                    <p>{{ item.name }}</p>
                  </v-col>
                  <v-col cols="12" md="6" lg="2">
                    <p>{{ item.explanation }}</p>
                  </v-col>
                  <v-col cols="12" class="" md="6" lg="4">
                    <div class="ml-2 mr-2">
                      <v-list
                        class="d-flex flex-row justify-space-between mb-3"
                        color="transparent"
                        style="position: relative; z-index: 1; top: 10px; bottom: 0"
                      >
                        <div
                          v-for="point in item.points"
                          :key="point.id"
                          class="d-flex justify-center"
                          :class="{ active: item.selectedPoint === point.id }"
                        >
                          <p
                            style="position: absolute; bottom: 39px"
                            class="body-2"
                          >
                            {{ point.name }}
                          </p>
                          <v-btn
                            fab
                            small
                            @click="item.selectedPoint = point.id"
                            class=""
                          >
                            {{ point.id }}
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
                          {{ item.points[item.selectedPoint - 1].desc }}
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
        </v-card>

        <v-row class="d-flex justify-center mb-5">
          <v-btn dark class="mt-4">
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
      employee: {
        id: 1,
        name: "Nguyen Van A",
        position: "Leader",
        department: "DC",
        ssu: "SSU",
        rater: {
          id: 2,
          name: "Bui Van Binh",
          position: "FE"
        }
      },
      categories: [
        {
          id: 1,
          name: "Initiative",
          comment: "",
          categoryItems: [
            {
              id: 1,
              name: "Lorem isum 1",
              explanation: "Explanation 1",
              comment: "",
              selectedPoint: 1,
              points: [
                {
                  id: 1,
                  name: "Bad",
                  desc:
                    "Description1: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 2,
                  name: "Under Qualified",
                  desc:
                    "Description2: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 3,
                  name: "Qualified",
                  desc:
                    "Description3: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 4,
                  name: "Good",
                  desc:
                    "Description4: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 5,
                  name: "Excellent",
                  desc:
                    "Description5: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                }
              ]
            },
            {
              id: 2,
              name: "Lorem isum 2",
              explanation: "Explanation 2",
              comment: "",
              selectedPoint: 1,
              points: [
                {
                  id: 1,
                  name: "Bad",
                  desc:
                    "Description6: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 2,
                  name: "Under Qualified",
                  desc:
                    "Description7: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 3,
                  name: "Qualified",
                  desc:
                    "Description8: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 4,
                  name: "Good",
                  desc:
                    "Description9: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 5,
                  name: "Excellent",
                  desc:
                    "Description10: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                }
              ]
            },
            {
              id: 3,
              name: "Lorem isum 3",
              explanation: "Explanation 3",
              comment: "",
              selectedPoint: 1,
              points: [
                {
                  id: 1,
                  name: "Bad",
                  desc:
                    "Description11: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 2,
                  name: "Under Qualified",
                  desc:
                    "Description12: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 3,
                  name: "Qualified",
                  desc:
                    "Description13: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 4,
                  name: "Good",
                  desc:
                    "Description14: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 5,
                  name: "Excellent",
                  desc:
                    "Description15: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                }
              ]
            },
            {
              id: 4,
              name: "Lorem isum 4",
              explanation: "Explanation 4",
              comment: "",
              selectedPoint: 1,
              points: [
                {
                  id: 1,
                  name: "Bad",
                  desc:
                    "Description16: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 2,
                  name: "Under Qualified",
                  desc:
                    "Description17: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 3,
                  name: "Qualified",
                  desc:
                    "Description18: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 4,
                  name: "Good",
                  desc:
                    "Description19: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 5,
                  name: "Excellent",
                  desc:
                    "Description20: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                }
              ]
            },
            {
              id: 5,
              name: "Lorem isum 5",
              explanation: "Explanation 5",
              comment: "",
              selectedPoint: 1,
              points: [
                {
                  id: 1,
                  name: "Bad",
                  desc:
                    "Description1: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 2,
                  name: "Under Qualified",
                  desc:
                    "Description2: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 3,
                  name: "Qualified",
                  desc:
                    "Description3: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 4,
                  name: "Good",
                  desc:
                    "Description4: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 5,
                  name: "Excellent",
                  desc:
                    "Description5: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                }
              ]
            }
          ]
        },

        {
          id: 2,
          name: "Team work",
          comment: "",
          categoryItems: [
            {
              id: 1,
              name: "Lorem isum 1",
              explanation: "Explanation 1",
              comment: "",
              selectedPoint: 1,
              points: [
                {
                  id: 1,
                  name: "Bad",
                  desc:
                    "Description1: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 2,
                  name: "Under Qualified",
                  desc:
                    "Description2: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 3,
                  name: "Qualified",
                  desc:
                    "Description3: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 4,
                  name: "Good",
                  desc:
                    "Description4: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 5,
                  name: "Excellent",
                  desc:
                    "Description5: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                }
              ]
            },
            {
              id: 2,
              name: "Lorem isum 2",
              explanation: "Explanation 2",
              comment: "",
              selectedPoint: 1,
              points: [
                {
                  id: 1,
                  name: "Bad",
                  desc:
                    "Description6: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 2,
                  name: "Under Qualified",
                  desc:
                    "Description7: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 3,
                  name: "Qualified",
                  desc:
                    "Description8: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 4,
                  name: "Good",
                  desc:
                    "Description9: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 5,
                  name: "Excellent",
                  desc:
                    "Description10: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                }
              ]
            },
            {
              id: 3,
              name: "Lorem isum 3",
              explanation: "Explanation 3",
              comment: "",
              selectedPoint: 1,
              points: [
                {
                  id: 1,
                  name: "Bad",
                  desc:
                    "Description11: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 2,
                  name: "Under Qualified",
                  desc:
                    "Description12: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 3,
                  name: "Qualified",
                  desc:
                    "Description13: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 4,
                  name: "Good",
                  desc:
                    "Description14: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 5,
                  name: "Excellent",
                  desc:
                    "Description15: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                }
              ]
            },
            {
              id: 4,
              name: "Lorem isum 4",
              explanation: "Explanation 4",
              comment: "",
              selectedPoint: 1,
              points: [
                {
                  id: 1,
                  name: "Bad",
                  desc:
                    "Description16: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 2,
                  name: "Under Qualified",
                  desc:
                    "Description17: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 3,
                  name: "Qualified",
                  desc:
                    "Description18: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 4,
                  name: "Good",
                  desc:
                    "Description19: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 5,
                  name: "Excellent",
                  desc:
                    "Description20: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                }
              ]
            },
            {
              id: 5,
              name: "Lorem isum 5",
              explanation: "Explanation 5",
              comment: "",
              selectedPoint: 1,
              points: [
                {
                  id: 1,
                  name: "Bad",
                  desc:
                    "Description1: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 2,
                  name: "Under Qualified",
                  desc:
                    "Description2: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 3,
                  name: "Qualified",
                  desc:
                    "Description3: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 4,
                  name: "Good",
                  desc:
                    "Description4: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                },
                {
                  id: 5,
                  name: "Excellent",
                  desc:
                    "Description5: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
                }
              ]
            }
          ]
        }
      ],
      employeeEvaluation: "",
      fullNameRater: "",
      fullNameUser: ""
    };
  },
  methods: {
    userName(firstName, lastName, middleName) {
      return firstName + " " + middleName + " " + lastName;
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
      });
  }
};
</script>
<style scoped>
.active > button {
  background: grey !important;
}
</style>
