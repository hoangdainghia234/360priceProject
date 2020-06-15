<template>
  <div class="">
    <v-content>
      <v-container fluid>
        <v-row class="pr-3 pl-3 pr-sm-5 pl-sm-5 pr-md-7 pl-md-7">
          <v-col>
            <v-card>
              <v-card-subtitle class="d-flex algin-center">
                <v-icon class="mr-3">mdi-information</v-icon>
                <span class="header-card">Template Information</span>
              </v-card-subtitle>
              <v-divider></v-divider>
              <v-card-text class="evaluation-info">
                <v-row class="evaluation-line" dense>
                  <v-col cols="5" sm="4" md="3" lg="2">
                    <p class="subtitle-1">Name:</p>
                  </v-col>
                  <v-col cols="7" sm="8" md="4" lg="3" xl="2">
                    <v-text-field
                      v-model="nameTemplate"
                      label="name"
                      placeholder="Enter template..."
                      solo
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row class="evaluation-line" dense>
                  <v-col cols="5" sm="4" md="3" lg="2">
                    <p class="subtitle-1">Total weight (%):</p>
                  </v-col>
                  <v-col cols="7" sm="8" md="4" lg="3" xl="2">
                    <span class="total-weight">
                      {{ `${computeTotalWeight} / 100` }}
                    </span>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <!-- Criterias -->
            <section>
              <div class="d-flex algin-center mt-5 ml-3">
                <v-icon class="mr-3">mdi-bookmark</v-icon>
                <span class="header-card">Criterias</span>
              </div>

              <v-expansion-panels class="pl-7 pr-12">
                <v-expansion-panel
                  v-for="criteria in selectedCriterias"
                  :key="criteria.id"
                  class="mt-5"
                >
                  <v-expansion-panel-header @click="selectCriteria(criteria)">
                    <span class="subtitle-1 indigo--text">{{
                      criteria.name
                    }}</span>
                    <template v-slot:actions>
                      <v-icon color="indigo" large>$expand</v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class="main-point">
                    <div class="table">
                      <v-simple-table>
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th>Index</th>
                              <th>Category</th>
                              <th>Weight (100%)</th>
                              <th>Modify Item</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="(category,
                              indexCategory) in criteria.categories_evaluation"
                              :key="category.id"
                            >
                              <td>{{ indexCategory + 1 }}</td>
                              <td>{{ category.name }}</td>
                              <td>{{ category.weight }}</td>
                              <td>
                                <v-btn @click="editItem(category)">
                                  <v-icon>
                                    mdi-pencil-box-outline
                                  </v-icon>
                                </v-btn>
                              </td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </div>
                    <v-dialog v-model="dialogEdit" max-width="1280px">
                      <template v-slot:activator="{ on }">
                        <v-btn v-on="on" style="display: none">
                          <v-icon>
                            mdi-pencil-box-outline
                          </v-icon>
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title
                          class="d-flex justify-center indigo white--text"
                        >
                          <span class="headline">Modify Item</span>
                        </v-card-title>
                        <v-card-text>
                          <v-row>
                            <v-col
                              class="d-flex justify-center align-center"
                              cols="12"
                              sm="6"
                              md="3"
                            >
                              <span class="subtitle-1 black--text">
                                Category:
                              </span>
                            </v-col>
                            <v-col
                              class="d-flex align-center"
                              cols="12"
                              sm="6"
                              md="3"
                            >
                              <span
                                class="subtitle-1 font-weight-bold indigo--text"
                              >
                                {{ modifyCategory.name }}
                              </span>
                            </v-col>
                            <v-col
                              class="d-flex justify-center align-center"
                              cols="12"
                              sm="12"
                              md="3"
                            >
                              <span class="subtitle-1 black--text">
                                Total weight:
                              </span>
                            </v-col>
                            <v-col
                              class="d-flex align-center"
                              cols="12"
                              sm="6"
                              md="3"
                            >
                              <span
                                class="subtitle-1 font-weight-bold indigo--text"
                              >
                                {{ computeCategoryWeight() }}
                              </span>
                            </v-col>
                          </v-row>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th>Index</th>
                                  <th>Name</th>
                                  <th>
                                    Explanation
                                  </th>
                                  <th>
                                    Weight
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="(item,
                                  indexItem) in modifyCategory.items_evaluation"
                                  :key="item.id"
                                >
                                  <td>{{ indexItem + 1 }}</td>
                                  <td>
                                    {{ item.name }}
                                  </td>
                                  <td>
                                    {{ item.explaination }}
                                  </td>
                                  <td style="max-width: 10rem">
                                    <v-text-field
                                      v-model="item.weight"
                                      solo
                                      hide-details
                                    ></v-text-field>
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-card-text>

                        <v-card-actions class="d-flex justify-center">
                          <div class="mb-5">
                            <v-btn class="btn-bottom mr-7" dark @click="save()"
                              >Save</v-btn
                            >
                            <v-btn class="btn-bottom" dark @click="close()"
                              >Cancel</v-btn
                            >
                          </div>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-expansion-panel-content>

                  <v-btn
                    class="minus-btn"
                    icon
                    color="black"
                    @click="deletePanel(criteria.id)"
                  >
                    <v-icon>mdi-minus-circle</v-icon>
                  </v-btn>
                </v-expansion-panel>
              </v-expansion-panels>
            </section>

            <div class="d-flex justify-end mt-5 mr-12">
              <v-dialog v-model="dialog" max-width="700px">
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on">
                    <v-icon medium>mdi-plus-circle</v-icon>
                    <span class="ml-2">Add Criteria</span>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title
                    class="d-flex justify-center indigo white--text"
                  >
                    <span class="headline">Add Criteria</span>
                  </v-card-title>
                  <v-card-text>
                    <v-row>
                      <v-col
                        class="d-flex justify-center align-center"
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <span class="subtitle-1 black--text">
                          Select the criteria:
                        </span>
                      </v-col>
                      <v-col
                        class="d-flex justify-center align-center"
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-select
                          v-model="addedCriteria"
                          :items="criterias"
                          item-text="name"
                          placeholder="Select one"
                          outlined
                          dense
                          hide-details
                          return-object
                        ></v-select>
                      </v-col>
                      <v-col
                        class="d-flex justify-center align-center"
                        cols="12"
                        sm="12"
                        md="4"
                      >
                        <v-btn @click="addCriteria">Add</v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </div>

            <div class="text-center mt-10">
              <v-btn class="btn-bottom mr-7" large dark @click="create"
                >Create</v-btn
              >
              <v-btn class="btn-bottom" large dark @click="reset">Reset</v-btn>
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
export default {
  name: "createTemplate",

  components: {},

  props: {},

  data: () => {
    return {
      nameTemplate: "",
      selectedCriterias: [],
      categories: "",
      criterias: "",
      selected: [],
      dialog: false,
      addedCriteria: "",
      dialogEdit: false,
      modifyCategory: "",
      modifyCriteria: "",
      totalWeight: 0,
      snackbar: false,
      submitError: "",
      submit: false,
      isSubmitted: false,
      submitData: {}
    };
  },

  computed: {
    computeTotalWeight() {
      let totalWeight = 0;
      if (!this.selectCriteria) return 0;
      this.selectedCriterias.forEach(criteria => {
        criteria.categories_evaluation.forEach(category => {
          totalWeight += +category.weight;
        });
      });
      return totalWeight;
    }
  },

  created() {
    this.axios
      .get("/evaluation-form/create")
      .then(response => {
        this.criterias = response.data.data;
      })
      .catch(error => console.log(error));
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  methods: {
    editItem(category) {
      this.modifyCategory = JSON.parse(JSON.stringify(category));
      this.dialogEdit = true;
    },

    selectCriteria(criteria) {
      this.modifyCriteria = criteria;
    },

    computeCategoryWeight() {
      if (!this.modifyCategory) {
        return "0";
      } else {
        let total = 0;
        this.modifyCategory.items_evaluation.forEach(
          item => (total += +item.weight)
        );
        this.modifyCategory.weight = total;
        return String(total);
      }
    },

    computeCriteriaWeight() {
      let totalWeight = 0;
      if (!this.selectCriteria) return 0;
      this.selectedCriterias.forEach(criteria => {
        criteria.categories_evaluation.forEach(category => {
          totalWeight += +category.weight;
        });
      });
      return totalWeight;
    },

    close() {
      this.dialog = false;
      this.dialogEdit = false;
      this.modifyCategory = "";
    },

    getWeights() {
      let weightItems = [];
      this.modifyCategory.items_evaluation.forEach(item => {
        weightItems.push(+item.weight);
      });
      return weightItems;
    },

    save() {
      let weightItems = this.getWeights();
      this.selectedCriterias.forEach(criteria => {
        if (criteria.id == this.modifyCriteria.id) {
          criteria.categories_evaluation.forEach(category => {
            if (category.id == this.modifyCategory.id) {
              category.weight = this.modifyCategory.weight;
              let index = 0;
              category.items_evaluation.forEach(item => {
                item.weight = weightItems[index];
                index++;
              });
            }
          });
        }
      });
      this.close();
    },

    deletePanel(id) {
      this.selectedCriterias = this.selectedCriterias.filter(
        criteria => criteria.id !== id
      );
    },

    addCriteria() {
      if (
        this.selectedCriterias.includes(this.addedCriteria) ||
        !this.addedCriteria
      )
        return;
      this.addedCriteria.categories_evaluation.forEach(
        category => (category.checked = false)
      );
      this.selectedCriterias = [...this.selectedCriterias, this.addedCriteria];
      this.close();
      this.addedCriteria = "";
    },

    validate() {
      if (!this.nameTemplate) {
        this.submitError = "The name of the template is required";
        this.snackbar = true;
        this.submit = false;
        return;
      }

      let totalWeight = this.computeCriteriaWeight();
      console.log(totalWeight);
      if (totalWeight !== 100) {
        this.submitError = "The total weight must be equal to 100";
        this.snackbar = true;
        this.submit = false;
        return;
      }

      if (!this.selectedCriterias) {
        this.submitError = "You must add criteria";
        this.snackbar = true;
        this.submit = false;
        return;
      }

      this.submit = true;
    },

    addCriteriaWeight() {
      this.selectedCriterias.forEach(criteria => {
        let weight = 0;
        criteria.categories_evaluation.forEach(category => {
          weight += +category.weight;
        });
        criteria.weight = weight;
      });
    },

    create() {
      this.validate();
      if (this.submit) {
        this.addCriteriaWeight();
        this.submitData.mainpoints = this.selectedCriterias;
        this.submitData.name = this.nameTemplate;
        console.log(JSON.stringify(this.submitData));
        let token = localStorage.getItem("access_token") || null;
        this.axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        this.axios
          .post("/evaluation-form", this.submitData)
          .then(response => {
            console.log(response);
            this.isSubmitted = true;
            this.reset();
          })
          .catch(error => console.log(error));
      }
    },

    successAlert() {
      return `Thank you`;
    },

    reset() {
      this.nameTemplate = "";
      this.selectedCriterias = [];
      this.modifyCategory = "";
      this.modifyCriteria = "";
      this.submit = false;
      this.isSubmitted = false;
    }
  }
};
</script>

<style scoped>
.evaluation-info {
  padding-right: 5rem !important;
  padding-left: 5rem !important;
}

.total-weight {
  font-size: 1.2rem;
  line-height: 1.5;
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

.minus-btn {
  position: absolute;
  top: 0;
  right: -3rem;
}

.elevation {
  width: 100%;
  max-width: 960px;
  border: 1px gray solid;
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
}

@media screen and (max-width: 600px) {
  .evaluation-info {
    padding-right: 2rem !important;
    padding-left: 2rem !important;
  }
}
</style>
