<template>
  <v-card>
    <v-list>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr v-for="header in headers" :key="header.name">
              <td class="text-right">{{ header.name }}</td>
              <td class="text-right">{{ header.explaination }}</td>
              <td>
                <div class="text-center pa-5">
                  <v-btn
                    color="primary"
                    fab
                    small
                    dark
                    class="mr-8"
                    v-for="ratin in header.rating"
                    :key="ratin.rating_point"
                  >
                    <span class="subtitle-2">
                      {{ ratin.rating_point }}
                    </span>
                  </v-btn>
                </div>
              </td>
              <td>
                <v-btn text>
                  <v-icon>
                    mdi-pencil-box-outline
                  </v-icon>
                </v-btn>
                <v-btn text>
                  <v-icon @click="deleteItem(header.id)">
                    mdi-delete
                  </v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
          <!-- Dialog -->
          <div class="text-center">
            <v-row justify="center">
              <v-dialog v-model="dialog2" persistent max-width="1000px">
                <template v-slot:activator="{ on }">
                  <v-btn color="success" dark v-on="on">
                    <v-icon class="pr-2">mdi-plus-circle</v-icon>
                    Add Item
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="indigo">
                    <span class="headline" style="margin: auto"
                      >Item Infomation</span
                    >
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="3"
                          ><span style="font-weight: bold">Name:</span></v-col
                        >
                        <v-col cols="6">
                          <v-text-field
                            outlined
                            dense
                            placeholder="Name"
                            required
                            v-model="editedItem.name"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="3">
                          <span style="font-weight: bold">Exlanation:</span>
                        </v-col>
                        <v-col cols="9">
                          <v-textarea
                            outlined
                            dense
                            name="input-7-1"
                            filled
                            auto-grow
                            placeholder="Sample explanation ..."
                            v-model="editedItem.explaination"
                          ></v-textarea>
                        </v-col>
                      </v-row>
                      <v-card>
                        <v-container>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="text-center">Point</th>
                                  <th class="text-center">Name</th>
                                  <th class="text-center">Description</th>
                                </tr>
                              </thead>
                              <tbody style="text-align: center">
                                <tr v-for="item in desserts" :key="item.name">
                                  <td>{{ item.pointNum }}</td>
                                  <td>
                                    <v-col cols="10">
                                      <v-text-field
                                        hide-details
                                        v-bind:placeholder="item.name"
                                        outlined
                                      ></v-text-field>
                                    </v-col>
                                  </td>
                                  <td>
                                    <v-textarea
                                      hide-details
                                      dense
                                      rows
                                      solo
                                      name="input-7-4"
                                      label="Sample ..."
                                    ></v-textarea>
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </v-container>
                      </v-card>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-row justify="center">
                      <v-btn color="indigo" class="ma-2" dark @click="save"
                        >Save</v-btn
                      >
                      <v-btn
                        color="indigo"
                        class="ma-2"
                        dark
                        @click="dialog = false"
                        >Close</v-btn
                      >
                    </v-row>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </div>
        </template>
      </v-simple-table>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      name: "sample main point",
      editedIndex: -1,
      dialog: false,
      dialog2: false,
      desserts: [
        {
          pointNum: 0,
          name: "Not Acceptable"
        },
        {
          pointNum: 1,
          name: "Under Expectation"
        },
        {
          pointNum: 2,
          name: "Qualified"
        },
        {
          pointNum: 3,
          name: "Good"
        },
        {
          pointNum: 4,
          name: "Excellent"
        },
        {
          pointNum: 5,
          name: "Outstanding"
        }
      ],
      defaultItem: {
        name: "",
        explaination: ""
      },
      editedItem: {
        name: "",
        explaination: ""
      }
    };
  },
  props: {
    headers: Array
  },
  methods: {
    deleteItem(id) {
      this.$emit("deleteCategory", id);
    },
    save() {
      this.$emit("saveTable", this.editedItem);
    }
  }
};
</script>
<style scoped>
.slider {
  border-bottom: 2px solid;
}
tr td {
  font-size: 14px;
}
</style>
