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
                    <v-select
                      :items="totalWeights"
                      :value="totalWeights[0]"
                      outlined
                      dense
                      hide-details
                      disabled
                    ></v-select>
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
                  <v-expansion-panel-header>
                    <span class="header-template">{{ criteria.name }}</span>
                    <template v-slot:actions>
                      <v-icon color="indigo" large>$expand</v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class="main-point pb-5 pt-3">
                    <div class="d-flex justify-center">
                      <v-simple-table>
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="pb-5"></th>
                              <th>Category</th>
                              <th class="text-center">Weight (100%)</th>
                              <th class="text-center">Modify Item</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="category in criteria.categories_evaluation"
                              :key="category.id"
                            >
                              <td class="pb-5">
                                <v-checkbox
                                  v-model="category.checked"
                                  color="indigo"
                                  hide-details
                                ></v-checkbox>
                              </td>
                              <td>{{ category.name }}</td>
                              <td class="text-center">{{ category.weight }}</td>
                              <td class="text-center">
                                <v-dialog
                                  v-model="dialogEdit"
                                  max-width="960px"
                                >
                                  <template v-slot:activator="{ on }">
                                    <v-btn v-on="on">
                                      <v-icon @click="editItem(category)">
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
                                          class="d-flex justify-center align-center"
                                          cols="12"
                                          sm="6"
                                          md="3"
                                        >
                                          <v-text-field
                                            :label="category.name"
                                            solo
                                          ></v-text-field>
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
                                          class="d-flex justify-center align-center"
                                          cols="12"
                                          sm="6"
                                          md="3"
                                        >
                                          <v-text-field
                                            :label="category.weight"
                                            solo
                                          ></v-text-field>
                                        </v-col>
                                      </v-row>
                                      <v-simple-table>
                                        <template v-slot:default>
                                          <thead>
                                            <tr>
                                              <th class="pb-5"></th>
                                              <th>Name</th>
                                              <th class="text-center">
                                                Explanation
                                              </th>
                                              <th class="text-center">
                                                Weight
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr
                                              v-for="item in category.items_evaluation"
                                              :key="item.id"
                                            >
                                              <td class="pb-5">
                                                <v-checkbox
                                                  v-model="item.checked"
                                                  color="indigo"
                                                  hide-details
                                                ></v-checkbox>
                                              </td>
                                              <td class="text-center">
                                                {{ item.name }}
                                              </td>
                                              <td class="text-center">
                                                {{ item.explaination }}
                                              </td>
                                              <td>
                                                <v-text-field
                                                  :label="item.weight"
                                                  solo
                                                ></v-text-field>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </template>
                                      </v-simple-table>
                                    </v-card-text>
                                  </v-card>
                                </v-dialog>
                              </td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </div>
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
      totalWeights: [100, 90],
      selectedCriterias: [],
      categories: "",
      criterias: "",
      selected: [],
      allSelected: false,
      categoryIds: [],
      dialog: false,
      addedCriteria: "",
      dialogEdit: false
    };
  },

  computed: {},

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
      console.log(category);
    },

    close() {
      this.dialog = false;
    },

    save() {
      this.close();
    },

    deletePanel(id) {
      this.selectedCriterias = this.selectedCriterias.filter(
        criteria => criteria.id !== id
      );
    },

    addCriteria() {
      if (this.selectedCriterias.includes(this.addedCriteria)) return;
      this.addedCriteria.categories_evaluation.forEach(
        category => (category.checked = false)
      );
      this.selectedCriterias = [...this.selectedCriterias, this.addedCriteria];
      this.close();
      this.addedCriteria = "";
    },

    create() {
      console.log(this.selectedCriterias);
    },

    reset() {
      this.nameTemplate = "";
      this.selectedDepartment = "";
      this.selectedCriterias = [];
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
