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
                    <p class="subtitle-1">Department:</p>
                  </v-col>
                  <v-col cols="7" sm="8" md="4" lg="3" xl="2">
                    <v-select
                      v-model="selectedDepartment"
                      :items="departments"
                      placeholder="Choose one"
                      outlined
                      dense
                      hide-details
                    ></v-select>
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
                      <v-data-table
                        v-model="selectedCategory"
                        :headers="tableHeaders"
                        :items="criteria.categories"
                        :single-select="singleSelect"
                        item-key="name"
                        show-select
                        hide-default-footer
                        class="elevation"
                      >
                        <template v-slot="{ item }">
                          <v-icon small class="mr-2" @click="editItem(item)">
                            mdi-pencil
                          </v-icon>
                          <v-icon small @click="deleteItem(item)">
                            mdi-delete
                          </v-icon>
                        </template>
                      </v-data-table>
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
                          :items="mainPoints"
                          item-text="name"
                          placeholder="Select"
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

      tableHeaders: [
        {
          text: "Category",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Weight (100%)", value: "weight" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      nameTemplate: "",
      mainPoints: [],
      selectedDepartment: "",
      singleSelect: false,
      selectedCategory: [],
      selectedCriterias: [],
      dialog: false,
      editedIndex: -1,
      addedCriteria: "",
      editedItem: {
        name: "",
        weight: 0
      },

      defaultItem: {
        name: "",
        weight: 0
      },

      evaluationTemplate: {
        name: "",
        department: "",
        totalWeight: "",
        criterias: []
      }
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  created() {
    this.initialize();
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  methods: {
    initialize() {
      this.mainPoints = [
        {
          id: 1,
          name: "Main point 1",
          categories: [
            {
              id: 1,
              name: "Category 1",
              weight: 15,
              items: [
                {
                  id: 1,
                  name: "Item 1",
                  explanation: "Item explanation 1",
                  weight: 5
                },
                {
                  id: 2,
                  name: "Item 2",
                  explanation: "Item explanation 2",
                  weight: 5
                },
                {
                  id: 3,
                  name: "Item 3",
                  explanation: "Item explanation 3",
                  weight: 5
                }
              ]
            },
            {
              id: 2,
              name: "Category 2",
              weight: 10,
              items: [
                {
                  id: 4,
                  name: "Item 1",
                  explanation: "Item explanation 1",
                  weight: 5
                },
                {
                  id: 5,
                  name: "Item 2",
                  explanation: "Item explanation 2",
                  weight: 5
                },
                {
                  id: 6,
                  name: "Item 3",
                  explanation: "Item explanation 3",
                  weight: 5
                }
              ]
            },
            {
              id: 3,
              name: "Category 3",
              weight: 0,
              items: [
                {
                  id: 7,
                  name: "Item 1",
                  explanation: "Item explanation 1",
                  weight: 5
                },
                {
                  id: 8,
                  name: "Item 2",
                  explanation: "Item explanation 2",
                  weight: 5
                },
                {
                  id: 9,
                  name: "Item 3",
                  explanation: "Item explanation 3",
                  weight: 5
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: "Main point 2",
          categories: [
            {
              id: 4,
              name: "Category 4",
              weight: 13,
              items: [
                {
                  id: 10,
                  name: "Item 1",
                  explanation: "Item explanation 1",
                  weight: 5
                },
                {
                  id: 11,
                  name: "Item 2",
                  explanation: "Item explanation 2",
                  weight: 5
                },
                {
                  id: 12,
                  name: "Item 3",
                  explanation: "Item explanation 3",
                  weight: 5
                }
              ]
            },
            {
              id: 5,
              name: "Category 5",
              weight: 3,
              items: [
                {
                  id: 13,
                  name: "Item 1",
                  explanation: "Item explanation 1",
                  weight: 5
                },
                {
                  id: 14,
                  name: "Item 2",
                  explanation: "Item explanation 2",
                  weight: 5
                },
                {
                  id: 15,
                  name: "Item 3",
                  explanation: "Item explanation 3",
                  weight: 5
                }
              ]
            },
            {
              id: 6,
              name: "Category 6",
              weight: 7,
              items: [
                {
                  id: 16,
                  name: "Item 1",
                  explanation: "Item explanation 1",
                  weight: 5
                },
                {
                  id: 17,
                  name: "Item 2",
                  explanation: "Item explanation 2",
                  weight: 5
                },
                {
                  id: 18,
                  name: "Item 3",
                  explanation: "Item explanation 3",
                  weight: 5
                }
              ]
            }
          ]
        },
        {
          id: 3,
          name: "Main point 3",
          categories: [
            {
              id: 7,
              name: "Category 7",
              weight: 9,
              items: [
                {
                  id: 1,
                  name: "Item 1",
                  explanation: "Item explanation 1",
                  weight: 5
                },
                {
                  id: 2,
                  name: "Item 2",
                  explanation: "Item explanation 2",
                  weight: 5
                },
                {
                  id: 3,
                  name: "Item 3",
                  explanation: "Item explanation 3",
                  weight: 5
                }
              ]
            },
            {
              id: 8,
              name: "Category 8",
              weight: 5
            },
            {
              id: 9,
              name: "Category 9",
              weight: 12,
              items: [
                {
                  id: 1,
                  name: "Item 1",
                  explanation: "Item explanation 1",
                  weight: 5
                },
                {
                  id: 2,
                  name: "Item 2",
                  explanation: "Item explanation 2",
                  weight: 5
                },
                {
                  id: 3,
                  name: "Item 3",
                  explanation: "Item explanation 3",
                  weight: 5
                }
              ]
            }
          ]
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.mainPoints.categories.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },

    deletePanel(id) {
      this.selectedCriterias = this.selectedCriterias.filter(
        criteria => criteria.id !== id
      );
    },

    addCriteria() {
      if (this.selectedCriterias.includes(this.addedCriteria)) return;
      this.selectedCriterias = [...this.selectedCriterias, this.addedCriteria];
      this.close();
      this.addedCriteria = "";
      console.log(this.selectedCriterias);
    },

    create() {
      console.log(this.nameTemplate);
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
