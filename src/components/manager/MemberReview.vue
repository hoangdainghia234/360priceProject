<template>
  <v-content>
    <v-container fluid>
      <v-row class="pr-3 pl-3 pr-sm-5 pl-sm-5 pr-md-7 pl-md-7">
        <v-col cols="12">
          <v-expansion-panels v-model="panel" :readonly="readonly" multiple>
            <v-expansion-panel>
              <v-expansion-panel-header class="pt-0 pb-0">
                <div class="d-flex align-center">
                  <v-icon>mdi-filter-variant</v-icon>
                  <span class="ml-3">Filter</span>
                </div>
              </v-expansion-panel-header>
              <v-divider></v-divider>
              <v-expansion-panel-content>
                <v-row>
                  <v-col cols="12" lg="6">
                    <v-row
                      v-for="item in items"
                      :key="item.item_title"
                      class="d-flex align-center ml-6 mb-3 mt-3"
                    >
                      <v-col cols="4" md="3" lg="4" class="pa-0">
                        <p class="ma-0">{{ item.item_title }}</p>
                      </v-col>
                      <v-col cols="8" md="6" lg="8" class="pa-0">
                        <v-combobox
                          v-model="item.select"
                          :items="item.item_select"
                          hide-details
                          outlined
                          dense
                        ></v-combobox>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <v-row>
                  <div class="ml-7">
                    <v-btn rounded><v-icon>mdi-magnify</v-icon>Search</v-btn>
                  </div>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>

      <v-row class="pr-3 pl-3 pr-sm-5 pl-sm-5 pr-md-7 pl-md-7">
        <v-col cols="12">
          <v-card outlined>
            <v-card-title>
              <div class="d-flex align-center">
                <v-icon>mdi-format-list-bulleted</v-icon>
                <span class="ml-3">Participants</span>
              </div>
            </v-card-title>
            <v-divider></v-divider>
            <v-simple-table fixed-header height="300px">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">#</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">Evaluated at</th>
                    <th class="text-center">Status</th>
                    <th class="text-center">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.id">
                    <td class="text-center">{{ item.id }}</td>
                    <td class="text-center">{{ item.name }}</td>
                    <td class="text-center">{{ item.date }}</td>
                    <td class="text-center">
                      <v-chip
                        class="ma-2 justify-center"
                        color="grey"
                        style="width:90px"
                        label
                        text-color="white"
                        >{{ item.status }}</v-chip
                      >
                    </td>
                    <td class="text-center">
                      <v-dialog v-model="dialog[0]" :key="item.id">
                        <template v-slot:activator="{ on }">
                          <v-btn text fab small v-on="on">
                            <v-icon>mdi-eye</v-icon>
                          </v-btn>
                        </template>
                        <v-card class="form-detail">
                          <v-card-title
                            class="d-flex justify-center indigo dark white--text"
                          >
                            <span>Evaluation Detail</span>
                          </v-card-title>
                          <v-container>
                            <v-row class="ml-3 mr-3">
                              <v-col
                                cols="12"
                                sm="6"
                                md="4"
                                lg="3"
                                class="d-flex align-center"
                              >
                                <span>Rater:</span>
                                <v-text-field
                                  outlined
                                  hide-details
                                  dense
                                  readonly
                                  v-model="hint"
                                  class="ml-4 pa-0"
                                ></v-text-field>
                              </v-col>
                              <v-col
                                cols="12"
                                sm="6"
                                md="4"
                                lg="3"
                                class="d-flex align-center ml-lg-12"
                              >
                                <span>Status:</span>
                                <v-chip
                                  class="ma-2 justify-center"
                                  color="grey"
                                  style="width:90px"
                                  label
                                  text-color="white"
                                  >Done</v-chip
                                >
                              </v-col>
                            </v-row>

                            <v-row class="ml-3 mr-3">
                              <v-col cols="12">
                                <v-card>
                                  <v-simple-table height="300px">
                                    <template v-slot:default>
                                      <thead class="grey">
                                        <tr>
                                          <th class="text-center white--text">
                                            Category
                                          </th>
                                          <th class="text-center white--text">
                                            Item
                                          </th>
                                          <th class="text-center white--text">
                                            Item expalanation
                                          </th>
                                          <th class="text-center white--text">
                                            Rating
                                          </th>
                                          <th class="text-center white--text">
                                            Comment
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr
                                          v-for="itemDetail in item.detail"
                                          :key="itemDetail.category"
                                        >
                                          <td class="text-center">
                                            {{ itemDetail.category }}
                                          </td>
                                          <td class="text-center">
                                            {{ itemDetail.item }}
                                          </td>
                                          <td class="text-center">
                                            {{ itemDetail.itemexplan }}
                                          </td>
                                          <td class="text-center">
                                            {{ itemDetail.rating }}
                                          </td>
                                          <td class="text-center">
                                            {{ itemDetail.comment }}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </template>
                                  </v-simple-table>
                                </v-card>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card>
                      </v-dialog>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    hint: "Larry",
    panel: [0],
    readonly: false,
    items: [
      {
        item_title: "Select the cycle name:",
        item_select: ["2019 Second Cycle-Fresher", "Design", "Vue", "Vuetify"],
        select: ["2019 Second Cycle-Fresher"]
      },
      {
        item_title: "City:",
        item_select: [
          "2019 Second Cycle-Fresher1",
          "Design1",
          "Vue1",
          "Vuetify1"
        ],
        select: ["2019 Second Cycle-Fresher1"]
      },
      {
        item_title: "SSU:",
        item_select: [
          "2019 Second Cycle-Fresher2",
          "Design2",
          "Vue2",
          "Vuetify2"
        ],
        select: ["2019 Second Cycle-Fresher2"]
      },
      {
        item_title: "Appraisee:",
        item_select: [
          "2019 Second Cycle-Fresher3",
          "Design3",
          "Vue3",
          "Vuetify3"
        ],
        select: ["2019 Second Cycle-Fresher3"]
      }
    ],
    desserts: [
      {
        id: "1",
        name: "Mark1",
        date: "22/12/2019",
        status: "Pending",
        detail: [
          {
            category: "category 1",
            item: "item1",
            itemexplan: "item expalanation 1",
            rating: "3.0",
            comment: "Lorem isum"
          },
          {
            category: "category 2",
            item: "item1",
            itemexplan: "item expalanation 1",
            rating: "3.0",
            comment: "Lorem isum"
          },
          {
            category: "category 3",
            item: "item1",
            itemexplan: "item expalanation 1",
            rating: "3.0",
            comment: "Lorem isum"
          }
        ]
      },
      {
        id: "2",
        name: "Mark2",
        date: "22/12/2019",
        status: "In Progress",
        detail: [
          {
            category: "category 4",
            item: "item1",
            itemexplan: "item expalanation 1",
            rating: "3.0",
            comment: "Lorem isum"
          },
          {
            category: "category 5",
            item: "item1",
            itemexplan: "item expalanation 1",
            rating: "3.0",
            comment: "Lorem isum"
          },
          {
            category: "category 6",
            item: "item1",
            itemexplan: "item expalanation 1",
            rating: "3.0",
            comment: "Lorem isum"
          }
        ]
      },
      {
        id: "3",
        name: "Mark3",
        date: "22/12/2019",
        status: "Done",
        detail: [
          {
            category: "category 7",
            item: "item1",
            itemexplan: "item expalanation 1",
            rating: "3.0",
            comment: "Lorem isum"
          },
          {
            category: "category 8",
            item: "item1",
            itemexplan: "item expalanation 1",
            rating: "3.0",
            comment: "Lorem isum"
          },
          {
            category: "category 9",
            item: "item1",
            itemexplan: "item expalanation 1",
            rating: "3.0",
            comment: "Lorem isum"
          }
        ]
      }
    ]
    // dessertsDetail: [
    //   {
    //     category: "category 1",
    //     item: "item1",
    //     itemexplan: "item expalanation 1",
    //     rating: "3.0",
    //     comment: "Lorem isum"
    //   },
    //   {
    //     category: "category 2",
    //     item: "item1",
    //     itemexplan: "item expalanation 1",
    //     rating: "3.0",
    //     comment: "Lorem isum"
    //   },
    //   {
    //     category: "category 3",
    //     item: "item1",
    //     itemexplan: "item expalanation 1",
    //     rating: "3.0",
    //     comment: "Lorem isum"
    //   }
    // ]
  })
};
</script>

<style scoped>
table th + th {
  border-left: 1px solid #dddddd;
}
table td + td {
  border-left: 1px solid #dddddd;
}
</style>
