<template>
  <div>
    <v-content>
      <v-container fluid class="pl-7 pr-7">
        <div>
          <v-row>
            <v-col cols="12" sm="8" md="6" lg="4" class="d-flex align-center">
              <b class="mr-3">Criteria name:</b>
              <v-text-field
                dense
                placeholder="Sample main point"
                outlined
                hide-details
                v-model="categories.name"
              ></v-text-field>
            </v-col>
          </v-row>
          <h3 class="headline font-weight-bold mt-7 mb-4">Categories</h3>
          <hr />
        </div>
        <!-- END: Category 2 -->
        <div
          v-for="(value, index) in categories.category"
          :key="index"
          class="ma-7"
        >
          <v-icon
            class="float-right"
            color="black"
            @click="deleteCategory(index)"
            >mdi-minus-circle</v-icon
          >
          <v-card class="mt-8 mb-8 mr-8">
            <v-expansion-panels hover>
              <v-expansion-panel>
                <v-expansion-panel-header class="pt-0 pr-0 pb-0 pl-6">
                  <div>
                    <span class="font-weight-bold title">
                      <!-- input type="text" v-model="value.name" readonly /> -->
                      <span v-if="!editting">{{ value.name }}</span>
                      <v-text-field
                        v-else
                        v-model="value.name"
                        @blur="doneEdit(value.name)"
                        @keyup.enter="doneEdit(value.name)"
                        @keyup.esc="cancelEdit(value.name)"
                        v-focus
                      ></v-text-field>
                      <v-btn
                        text
                        fab
                        small
                        @click.prevent="editTextCategory(value.name, value.id)"
                        class="ml-3"
                      >
                        <v-icon>
                          mdi-pencil-box-outline
                        </v-icon>
                      </v-btn>
                    </span>
                  </div>
                  <v-spacer></v-spacer>
                  <div class="d-flex justify-end">
                    <v-checkbox></v-checkbox>
                  </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <!-- BEGIN: Add Team -->
                  <v-card class="mt-5">
                    <v-list>
                      <v-simple-table>
                        <template v-slot:default>
                          <tbody>
                            <tr
                              v-for="(valueItem, index) in value.item"
                              :key="index"
                            >
                              <td class="text-center">{{ valueItem.name }}</td>
                              <td class="text-center">
                                {{ valueItem.explaination }}
                              </td>
                              <td>
                                <div class="text-center pa-5">
                                  <v-btn
                                    color="grey lighten-1"
                                    fab
                                    small
                                    depressed
                                    class="mr-8"
                                    v-for="ratin in valueItem.rating"
                                    :key="ratin.rating_point"
                                  >
                                    <span class="subtitle-2">
                                      {{ ratin.rating_point }}
                                    </span>
                                  </v-btn>
                                </div>
                              </td>
                              <td>
                                <v-btn fab text small class="mr-3">
                                  <v-icon @click="editItem(value.id, index)">
                                    mdi-pencil-box-outline
                                  </v-icon>
                                </v-btn>
                                <v-btn fab text small>
                                  <v-icon @click="deleteItem(value.id, index)">
                                    mdi-delete
                                  </v-icon>
                                </v-btn>
                              </td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-list>
                  </v-card>
                  <v-row justify="start" class="mt-5 pl-3 mb-1">
                    <v-dialog v-model="dialog2" persistent max-width="1000px">
                      <template v-slot:activator="{ on }">
                        <v-btn
                          color="success"
                          dark
                          v-on="on"
                          @click="addItem()"
                        >
                          <v-icon class="pr-2">mdi-plus-circle</v-icon>
                          Add Item
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card-title
                          class="indigo white--text d-flex justify-center"
                        >
                          <span class="headline">{{ formTitle }}</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="2"
                                ><span style="font-weight: bold"
                                  >Name:</span
                                ></v-col
                              >
                              <v-col cols="5">
                                <v-text-field
                                  outlined
                                  dense
                                  placeholder="Name"
                                  required
                                  hide-details
                                  v-model="editedItem.name"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col cols="2">
                                <span style="font-weight: bold"
                                  >Exlanation:</span
                                >
                              </v-col>
                              <v-col cols="10">
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
                              <v-simple-table>
                                <template v-slot:default>
                                  <thead>
                                    <tr>
                                      <th class="text-center">Point</th>
                                      <th class="text-center">Name</th>
                                      <th class="text-center">
                                        Description
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody style="text-align: center">
                                    <tr v-for="(item, index) in 5" :key="index">
                                      <td>{{ index + 1 }}</td>
                                      <td>
                                        <v-text-field
                                          hide-details
                                          dense
                                          solo
                                          rows="1"
                                          v-bind:placeholder="item.name"
                                          v-model="
                                            editedItem.rating[index].rating_name
                                          "
                                          outlined
                                        ></v-text-field>
                                      </td>
                                      <td>
                                        <v-textarea
                                          hide-details
                                          rows="1"
                                          solo
                                          dense
                                          outlined
                                          name="input-7-4"
                                          label="Sample ..."
                                          v-model="
                                            editedItem.rating[index]
                                              .explaination
                                          "
                                        ></v-textarea>
                                      </td>
                                    </tr>
                                  </tbody>
                                </template>
                              </v-simple-table>
                            </v-card>
                          </v-container>
                        </v-card-text>
                        <v-card-actions class="d-flex justify-center">
                          <div>
                            <v-btn
                              color="indigo"
                              class="ma-2"
                              dark
                              @click="saveCategogy(value.id)"
                              >Save</v-btn
                            >
                            <v-btn
                              color="indigo"
                              class="ma-2"
                              dark
                              @click="close()"
                              >Cancel</v-btn
                            >
                          </div>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-row>
                  <!-- END: Add Team -->
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </div>
        <!-- -->
        <div class="d-flex justify-end mr-12 pr-2">
          <v-btn large color="indigo" class="ma-1" dark @click="addCategory">
            <v-icon class="pr-2">mdi-plus-circle</v-icon>Add Category
          </v-btn>
          <!-- <v-btn large class="ma-2" dark color="indigo">
            <v-icon>mdi-crop-portrait</v-icon>Clone
          </v-btn> -->
        </div>

        <div class="text-center mt-10">
          <v-btn class="btn-bottom mr-7" large @click="submit">Save</v-btn>
          <v-btn class="btn-bottom" large>Cancel</v-btn>
        </div>
      </v-container>
    </v-content>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editedIndex: -1,
      dialog: false,
      dialog2: false,
      editting: false,
      editedItem: {
        parent_id: "",
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
      },
      defaultItem: {
        parent_id: "",
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
      },
      beforeEditCache: "",
      categories: []
    };
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  created() {
    this.initialize();
    this.loadUsers();
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "New Item Information"
        : "Edit Item Information";
    }
  },
  methods: {
    initialize() {
      this.categories = [];
    },
    loadUsers() {
      if (this.axios == null) {
        return;
      }
      this.axios
        .get(
          "http://34.72.144.52/api/category-evaluation/get-category-evaluation-4"
        )
        .then(response => {
          if (response.status === 200) {
            this.categories = response.data.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteItem(id, index) {
      this.editedItem.parent_id = id;
      this.categories.category.forEach(value => {
        if (value.id === id) {
          value.item.splice(index, 1);
        }
      });
    },
    deleteCategory(index) {
      this.categories.category.splice(index, 1);
    },
    addItem() {
      console.log(this.categories);
      // console.log(this.defaultItem);
      // console.log(this.editedItem);
      // console.log(this.editedIndex);
    },
    close() {
      this.dialog2 = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        // this.editedIndex = -1;
        // this.$set(this.editedItem, 1, this.defaultItem);
        // this.editedIndex = -1;
      });
      // setTimeout(() => {
      //   this.editedItem = Object.assign({}, this.defaultItem);
      //   this.editedIndex = -1;
      //   // this.$set(this.editedItem, 1, this.defaultItem);
      //   // this.editedIndex = -1;
      // }, 300);
    },
    saveCategogy(id) {
      this.editedItem.parent_id = id;
      this.categories.category.forEach(value => {
        if (value.id === id) {
          if (this.editedIndex > -1) {
            Object.assign(value.item[this.editedIndex], this.editedItem);
          } else {
            value.item.push(this.editedItem);
          }
        }
      });
      this.close();
    },
    editItem(category_id, index) {
      this.editedIndex = index;
      this.categories.category.forEach(value => {
        if (value.id === category_id) {
          this.editedItem = Object.assign({}, value.item[index]);
        }
      });
      this.dialog2 = true;
    },
    addCategory() {
      let addCategory = [
        {
          name: "New Category",
          weight: "",
          item: []
        }
      ];
      this.categories.category = [...this.categories.category, addCategory[0]];
    },
    editTextCategory(name, id) {
      this.categories.category.forEach(value => {
        if (value.id === id) {
          console.log(value.id);
          this.beforeEditCache = name;
          this.editting = true;
        }
      });
    },
    doneEdit(name) {
      if (name.trim() == "") {
        name = this.beforeEditCache;
      }
      this.editting = false;
    },
    cancelEdit(name) {
      name = this.beforeEditCache;
      console.log(name);
      this.editting = false;
    },
    create_UUID() {
      var dt = new Date().getTime();
      var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function(c) {
          var r = (dt + Math.random() * 16) % 16 | 0;
          dt = Math.floor(dt / 16);
          return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
      return uuid;
    },
    submit() {
      var evaluation_criteria = [];
      console.log(evaluation_criteria);
    }
  }
};
</script>
<style scoped>
.btn-bottom {
  background-color: #444 !important;
  color: #fff !important;
  width: 6rem;
}
table td {
  padding: 15px;
}
table thead {
  background: lightgray;
}
</style>
