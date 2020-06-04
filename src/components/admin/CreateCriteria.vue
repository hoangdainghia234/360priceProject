<template>
  <div>
    <v-content>
      <v-container>
        <div class="slider">
          <div class="pa-5" style="border-bottom: 3px solid">
            <v-row>
              <v-col cols="2">
                <span style="font-weight: bold">Name:</span>
              </v-col>
              <v-col cols="3">
                <v-text-field
                  dense
                  placeholder="Sample main point"
                  outlined
                  v-model="name"
                ></v-text-field>
              </v-col>
            </v-row>
            <span class="headline font-weight-bold">Categorles</span>
          </div>
        </div>
        <!-- END: Category 2 -->
        <div v-for="(value, index) in category" :key="index">
          <v-icon
            class="float-right mt-0"
            color="black"
            @click="deleteCategory(index)"
            >mdi-minus-circle</v-icon
          >
          <v-card class="ma-8">
            <v-expansion-panels hover>
              <v-expansion-panel>
                <v-expansion-panel-header>
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
                      <v-btn text @click.prevent="editTextCategory(value.name)">
                        <v-icon class="ml-3">
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
                  <!-- Add Team -->
                  <v-card>
                    <v-list>
                      <v-simple-table>
                        <template v-slot:default>
                          <tbody>
                            <tr
                              v-for="(valueItem, index) in value.item"
                              :key="index"
                            >
                              <td class="text-right">{{ valueItem.name }}</td>
                              <td class="text-right">
                                {{ valueItem.explaination }}
                              </td>
                              <td>
                                <div class="text-center pa-5">
                                  <v-btn
                                    color="primary"
                                    fab
                                    small
                                    dark
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
                        <v-dialog
                          v-model="dialog2"
                          persistent
                          max-width="1000px"
                        >
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
                                    ><span style="font-weight: bold"
                                      >Name:</span
                                    ></v-col
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
                                    <span style="font-weight: bold"
                                      >Exlanation:</span
                                    >
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
                                            <th class="text-center">
                                              Description
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody style="text-align: center">
                                          <tr
                                            v-for="(item, index) in 5"
                                            :key="index"
                                          >
                                            <td>{{ index + 1 }}</td>
                                            <td>
                                              <v-col cols="10">
                                                <v-text-field
                                                  hide-details
                                                  solo
                                                  rows="1"
                                                  v-bind:placeholder="item.name"
                                                  v-model="
                                                    editedItem.rating[index]
                                                      .rating_name
                                                  "
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
                                  </v-container>
                                </v-card>
                              </v-container>
                            </v-card-text>
                            <v-card-actions>
                              <v-row justify="center">
                                <v-btn
                                  color="indigo"
                                  class="ma-2"
                                  dark
                                  @click="save"
                                  >Save</v-btn
                                >
                                <v-btn
                                  color="indigo"
                                  class="ma-2"
                                  dark
                                  @click="dialog2 = false"
                                  >Close</v-btn
                                >
                              </v-row>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-row>
                    </v-list>
                  </v-card>
                  <!-- END: Add Team -->
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </div>
        <div class="flex justify-end">
          <v-btn
            large
            color="indigo"
            dark
            style="margin-top: 8px;"
            @click="addCategory"
          >
            <v-icon class="pr-2">mdi-plus-circle</v-icon>Add Category
          </v-btn>
          <v-btn large class="ma-2" dark color="indigo">
            <v-icon>mdi-crop-portrait</v-icon>Clone
          </v-btn>
        </div>
        <v-card class="mt-10">
          <v-row>
            <v-col cols="12" class="pb-5">
              <div class="text-center">
                <v-btn large class="ma-2" tile color="indigo" dark>Save</v-btn>
                <v-btn large class="ma-2" tile color="indigo" dark
                  >Cancel</v-btn
                >
                <v-btn class="ma-2" tile large color="teal" icon></v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>
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
      },
      name: "Kỹ năng",
      editting: false,
      beforeEditCache: "",
      category: [
        {
          id: this.create_UUID(),
          name: "Kỹ năng làm việc nhóm",
          weight: 10,
          item: [
            {
              id: this.create_UUID(),
              name: "Kỹ năng làm việc nhóm 1",
              weight: 10,
              explaination: "Chi tiết 1",
              rating: [
                {
                  id: this.create_UUID(),
                  explaination: "Lịch sử trong làm việc nhóm 1",
                  rating_point: 1,
                  rating_name: "Rating 1"
                },
                {
                  id: this.create_UUID(),
                  explaination: "Lịch sử trong làm việc nhóm 1",
                  rating_point: 2,
                  rating_name: "Rating 2"
                },
                {
                  id: this.create_UUID(),
                  explaination: "Lịch sử trong làm việc nhóm 1",
                  rating_point: 3,
                  rating_name: "Rating 3"
                },
                {
                  id: this.create_UUID(),
                  explaination: "Lịch sử trong làm việc nhóm 1",
                  rating_point: 4,
                  rating_name: "Rating 4"
                },
                {
                  id: this.create_UUID(),
                  explaination: "Lịch sử trong làm việc nhóm 1",
                  rating_point: 5,
                  rating_name: "Rating 5"
                }
              ]
            },
            {
              id: this.create_UUID(),
              name: "Kỹ năng làm việc nhóm 2",
              weight: 10,
              explaination: "Chi tiết 1",
              rating: [
                {
                  id: this.create_UUID(),
                  explaination: "Lịch sử trong làm việc nhóm 2",
                  rating_point: 1,
                  rating_name: "Rating 1"
                },
                {
                  id: this.create_UUID(),
                  explaination: "Lịch sử trong làm việc nhóm 2",
                  rating_point: 2,
                  rating_name: "Rating 2"
                },
                {
                  id: this.create_UUID(),
                  explaination: "Lịch sử trong làm việc nhóm 2",
                  rating_point: 3,
                  rating_name: "Rating 3"
                },
                {
                  id: this.create_UUID(),
                  explaination: "Lịch sử trong làm việc nhóm 2",
                  rating_point: 4,
                  rating_name: "Rating 4"
                },
                {
                  id: this.create_UUID(),
                  explaination: "Lịch sử trong làm việc nhóm 2",
                  rating_point: 5,
                  rating_name: "Rating 5"
                }
              ]
            }
          ]
        },
        {
          id: this.create_UUID(),
          name: "Kỹ năng code",
          weight: 10,
          item: [
            {
              name: "Kỹ năng code 1",
              weight: 10,
              explaination: "Chi tiết 1",
              rating: [
                {
                  explaination: "Lịch sử trong code 1",
                  rating_point: 1,
                  rating_name: "Rating 1"
                },
                {
                  explaination: "Lịch sử trong code1",
                  rating_point: 2,
                  rating_name: "Rating 2"
                },
                {
                  explaination: "Lịch sử trong code 1",
                  rating_point: 3,
                  rating_name: "Rating 3"
                },
                {
                  explaination: "Lịch sử trong code 1",
                  rating_point: 4,
                  rating_name: "Rating 4"
                },
                {
                  explaination: "Lịch sử trong code 1",
                  rating_point: 5,
                  rating_name: "Rating 5"
                }
              ]
            },
            {
              name: "Kỹ năng làm việc nhóm 2",
              weight: 10,
              explaination: "Chi tiết 1",
              rating: [
                {
                  explaination: "Lịch sử trong code 2",
                  rating_point: 1,
                  rating_name: "Rating 1"
                },
                {
                  explaination: "Lịch sử trong code 2",
                  rating_point: 2,
                  rating_name: "Rating 2"
                },
                {
                  explaination: "Lịch sử trong code 2",
                  rating_point: 3,
                  rating_name: "Rating 3"
                },
                {
                  explaination: "Lịch sử trong code 2",
                  rating_point: 4,
                  rating_name: "Rating 4"
                },
                {
                  explaination: "Lịch sử trong làm việc nhóm 2",
                  rating_point: 5,
                  rating_name: "Rating 5"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  methods: {
    deleteItem(index) {
      console.log(index);
      this.category.forEach(value => {
        console.log(value);
      });
    },
    deleteCategory(index) {
      // this.category = this.category.filter(itemc37bcbba-7bb4-4a67-8348-49da9f6a3c95 => item.index === index);
      // confirm("Are you sure you want to delete this item?") &&
      //   this.category.splice(index, 1);
      // console.log(
      //   this.category.filter(item => item.index != index),
      //   index
      // );
      this.category.splice(index, 1);
    },
    save() {
      // this.category.push(editedItem);
      console.log(this.editedItem);
    },
    editItem(item) {
      this.editedIndex = this.headers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    addCategory() {
      let addCategory = [
        {
          name: "",
          weight: ""
        }
      ];
      this.category = [...this.category, addCategory];
    },
    editTextCategory(name) {
      this.beforeEditCache = name;
      this.editting = true;
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
    }
  }
};
</script>
<style scoped></style>
