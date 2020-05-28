<template>
  <div>
    <v-content>
      <v-container fluid>
        <v-row class="pr-3 pl-3 pr-sm-7 pl-sm-7 pr-md-10 pl-md-10">
          <v-col>
            <v-card>
              <v-card-subtitle class="header">
                <v-icon class="mr-2">mdi-information</v-icon>
                <span>Template Information</span>
              </v-card-subtitle>
              <v-divider></v-divider>
              <v-card-text class="pl-3 pr-3 pl-sm-7 pr-sm-7 pl-md-10 pr-md-10">
                <v-row class="evaluation-line" dense>
                  <v-col cols="5" xs="5" sm="4" md="2">
                    <p class="subtitle-1 pt-2">Name:</p>
                  </v-col>
                  <v-col cols="7" sm="7" md="4" xl="2">
                    <v-text-field
                      label="name"
                      placeholder="2019 Second Cycle-SSD-Staff-AH Template"
                      solo
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row class="evaluation-line" dense>
                  <v-col cols="5" sm="4" md="2">
                    <p class="subtitle-1 pt-2">Departement:</p>
                  </v-col>
                  <v-col cols="7" sm="7" md="4" xl="2">
                    <v-select
                      :items="departments"
                      placeholder="Software Development Department"
                      outlined
                      dense
                      hide-details
                    ></v-select>
                  </v-col>

                  <v-col
                    class="d-flex justify-md-center justify-start"
                    cols="5"
                    sm="4"
                    md="2"
                  >
                    <p class="subtitle-1 pt-2 ml-xl-10">Layer:</p>
                  </v-col>
                  <v-col cols="7" sm="7" md="4" xl="2">
                    <v-select
                      :items="layers"
                      :placeholder="layers[0]"
                      outlined
                      dense
                      hide-details
                    ></v-select>
                  </v-col>

                  <v-col
                    class="d-flex justify-xl-center justify-start"
                    cols="5"
                    sm="4"
                    md="2"
                  >
                    <p class="subtitle-1 pt-2 ml-xl-10">Grade:</p>
                  </v-col>
                  <v-col cols="7" sm="7" md="4" xl="2">
                    <v-select
                      :items="grades"
                      :placeholder="grades[0]"
                      outlined
                      dense
                      hide-details
                    ></v-select>
                  </v-col>
                  <v-col cols="5" sm="4" md="1">
                    <p class="subtitle-1">Layer:</p>
                  </v-col>
                  <v-col cols="7" sm="7" md="1" lg="3" xl="2">
                    <v-select
                      :items="departments"
                      placeholder="Staff"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                </v-row>

                <v-row class="evaluation-line" dense>
                  <v-col cols="5" sm="4" md="2">
                    <p class="subtitle-1 pt-2">Total weight (%):</p>
                  </v-col>
                  <v-col cols="7" sm="7" md="4" xl="2">
                    <v-select
                      :items="totalWeights"
                      :placeholder="totalWeights[0]"
                      outlined
                      dense
                      hide-details
                    ></v-select>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <!-- Criterias -->
            <section>
              <div class="header mt-5 pl-3">
                <v-icon class="mr-2">mdi-bookmark</v-icon>
                <span>Criterias</span>
              </div>

              <v-expansion-panels class="pl-7 pr-12">
                <v-expansion-panel
                  v-for="mainPoint in mainPoints"
                  :key="mainPoint.id"
                  class="mt-5"
                >
                  <v-expansion-panel-header>
                    <span class="header-template">{{ mainPoint.name }}</span>
                    <template v-slot:actions>
                      <v-icon color="indigo" large>$expand</v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-data-table
                      v-model="selectedCategory"
                      :headers="tableHeaders"
                      :items="mainPoint.categories"
                      :single-select="singleSelect"
                      item-key="name"
                      show-select
                      hide-default-footer
                      class="elevation-1"
                    >
                      <!-- <template v-slot:item.actions="{ item }">
                        <v-icon medium class="" @click="editItem(item)">
                          mdi-table-edit
                        </v-icon>
                      </template> -->
                    </v-data-table>
                  </v-expansion-panel-content>

                  <v-btn
                    class="minus-btn"
                    icon
                    color="black"
                    @click="deletePanel(mainPoint.mainId)"
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
                <!-- <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.name"
                            label="Category name"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.weight"
                            label="Weight"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card> -->
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
                          v-model="criteriaId"
                          :items="mainPoints"
                          item-text="name"
                          item-value="mainId"
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
                        <v-btn @click="close">Add</v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </div>

            <div class="d-flex justify-center mt-10">
              <v-btn class="btn-bottom mr-7" large dark>Create</v-btn>
              <v-btn class="btn-bottom" large dark>Cancel</v-btn>
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
        { text: "Weight (100%)", value: "weight" }
      ],
      mainPoints: [],
      singleSelect: false,
      selectedCategory: [],
      dialog: false,
      editedIndex: -1,
      editedItem: {
        name: "",
        weight: 0
      },
      defaultItem: {
        name: "",
        weight: 0
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
          mainId: 1,
          name: "Main point 1",
          categories: [
            {
              categoryId: 1,
              name: "Category 1",
              weight: 15,
              items: [
                {
                  name: "Item 1",
                  explanation: "Item explanation 1",
                  weight: 5
                },
                {
                  name: "Item 2",
                  explanation: "Item explanation 2",
                  weight: 5
                },
                {
                  name: "Item 3",
                  explanation: "Item explanation 3",
                  weight: 5
                }
              ]
            },
            {
              categoryId: 2,
              name: "Category 2",
              weight: 10,
              items: [
                {
                  name: "Item 1",
                  explanation: "Item explanation 1",
                  weight: 5
                },
                {
                  name: "Item 2",
                  explanation: "Item explanation 2",
                  weight: 5
                },
                {
                  name: "Item 3",
                  explanation: "Item explanation 3",
                  weight: 5
                }
              ]
            },
            {
              categoryId: 3,
              name: "Category 3",
              weight: 0,
              items: [
                {
                  name: "Item 1",
                  explanation: "Item explanation 1",
                  weight: 5
                },
                {
                  name: "Item 2",
                  explanation: "Item explanation 2",
                  weight: 5
                },
                {
                  name: "Item 3",
                  explanation: "Item explanation 3",
                  weight: 5
                }
              ]
            }
          ]
        },
        {
          mainId: 2,
          name: "Main point 2",
          categories: [
            {
              categoryId: 4,
              name: "Category 4",
              weight: 13,
              items: [
                {
                  name: "Item 1",
                  explanation: "Item explanation 1",
                  weight: 5
                },
                {
                  name: "Item 2",
                  explanation: "Item explanation 2",
                  weight: 5
                },
                {
                  name: "Item 3",
                  explanation: "Item explanation 3",
                  weight: 5
                }
              ]
            },
            {
              categoryId: 5,
              name: "Category 5",
              weight: 3,
              items: [
                {
                  name: "Item 1",
                  explanation: "Item explanation 1",
                  weight: 5
                },
                {
                  name: "Item 2",
                  explanation: "Item explanation 2",
                  weight: 5
                },
                {
                  name: "Item 3",
                  explanation: "Item explanation 3",
                  weight: 5
                }
              ]
            },
            {
              categoryId: 6,
              name: "Category 6",
              weight: 7,
              items: [
                {
                  name: "Item 1",
                  explanation: "Item explanation 1",
                  weight: 5
                },
                {
                  name: "Item 2",
                  explanation: "Item explanation 2",
                  weight: 5
                },
                {
                  name: "Item 3",
                  explanation: "Item explanation 3",
                  weight: 5
                }
              ]
            }
          ]
        },
        {
          mainId: 3,
          name: "Main point 3",
          categories: [
            {
              categoryId: 7,
              name: "Category 7",
              weight: 9,
              items: [
                {
                  name: "Item 1",
                  explanation: "Item explanation 1",
                  weight: 5
                },
                {
                  name: "Item 2",
                  explanation: "Item explanation 2",
                  weight: 5
                },
                {
                  name: "Item 3",
                  explanation: "Item explanation 3",
                  weight: 5
                }
              ]
            },
            {
              categoryId: 8,
              name: "Category 8",
              weight: 5
            },
            {
              categoryId: 9,
              name: "Category 9",
              weight: 12,
              items: [
                {
                  name: "Item 1",
                  explanation: "Item explanation 1",
                  weight: 5
                },
                {
                  name: "Item 2",
                  explanation: "Item explanation 2",
                  weight: 5
                },
                {
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
      this.mainPoints = this.mainPoints.filter(point => point.mainId !== id);
    },

    addCriteria() {
      close();
    }
  }
};
</script>

<style scoped>
.minus-btn {
  position: absolute;
  top: 0;
  right: -3rem;
}
</style>
