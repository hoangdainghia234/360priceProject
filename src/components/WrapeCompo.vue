<template>
  <v-card>
    <v-list>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td class="text-right">{{ item.name }}</td>
              <td class="text-right">{{ item.explaination }}</td>
              <td>
                <div class="text-center pa-5">
                  <v-btn
                    color="primary"
                    fab
                    small
                    dark
                    class="mr-8"
                    v-for="ratin in item.rating"
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
                  <v-icon @click="editItem(item)">
                    mdi-pencil-box-outline
                  </v-icon>
                </v-btn>
                <v-btn text>
                  <v-icon @click="deleteItem(index)">
                    mdi-delete
                  </v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-row justify="start" class="ma-5">
        <v-dialog v-model="dialog2" persistent max-width="1000px">
          <template v-slot:activator="{ on }">
            <v-btn color="success" dark v-on="on">
              <v-icon class="pr-2">mdi-plus-circle</v-icon>
              Add Item
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="indigo">
              <span class="headline" style="margin: auto">Item Infomation</span>
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
                          <tr v-for="(item, index) in 5" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>
                              <v-col cols="10">
                                <v-text-field
                                  hide-details
                                  solo
                                  rows="1"
                                  v-bind:placeholder="item.name"
                                  v-model="editedItem.rating[index].rating_name"
                                  outlined
                                ></v-text-field>
                              </v-col>
                            </td>
                            <td>
                              <v-textarea
                                hide-details
                                rows="1"
                                solo
                                name="input-7-4"
                                label="Sample ..."
                                v-model="editedItem.rating[index].explaination"
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
                <v-btn color="indigo" class="ma-2" dark @click="dialog2 = false"
                  >Close</v-btn
                >
              </v-row>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      editedIndex: -1,
      dialog: false,
      dialog2: false,
      editedItem: {
        parent_id: this.categogyId,
        name: "",
        weight: 10,
        explaination: "",
        rating: [
          {
            explaination: "",
            rating_point: 1,
            rating_name: ""
          },
          {
            explaination: "",
            rating_point: 2,
            rating_name: ""
          },
          {
            explaination: "",
            rating_point: 3,
            rating_name: ""
          },
          {
            explaination: "",
            rating_point: 4,
            rating_name: ""
          },
          {
            explaination: "",
            rating_point: 5,
            rating_name: ""
          }
        ]
      }
    };
  },
  props: {
    items: Array,
    categogyId: Array
  },
  methods: {
    deleteItem(index) {
      this.$emit("deleteCategoryItem", index);
    },
    save() {
      this.$emit("saveTable", this.editedItem);
    },
    editItem() {
      this.$emit("editItem", this.editedItem);
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
