<template>
  <div>
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
              ></v-text-field>
            </v-col>
          </v-row>
          <span class="headline font-weight-bold">Categorles</span>
        </div>
      </div>
      <!-- END: Category 2 -->
      <div v-for="cato in category" :key="cato.category">
        <v-icon class="float-right mt-0" color="black">
          mdi-minus-circle
        </v-icon>
        <v-card class="ma-8">
          <v-expansion-panels hover>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <div>
                  <span class="font-weight-bold title">
                    {{ cato.titleName }}
                    <v-icon class="ml-3">mdi-pencil-box-outline</v-icon>
                  </span>
                </div>
                <v-spacer></v-spacer>
                <div class="d-flex justify-end">
                  <v-checkbox></v-checkbox>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <WrapeCompo
                  :headers="headers"
                  @deleteCategory="deleteCategory"
                  @saveTable="saveTable"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </div>
      <v-card class="mt-10">
        <v-row>
          <v-col cols="12" class="pb-5">
            <div class="text-center">
              <v-btn large class="ma-2" tile color="indigo" dark>Save</v-btn>
              <v-btn large class="ma-2" tile color="indigo" dark>Cancel</v-btn>
              <v-btn class="ma-2" tile large color="teal" icon></v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <v-row class="float-right" style="margin-right: 30px">
      <v-dialog v-model="dialog1" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn large color="indigo" dark v-on="on" style="margin-top: 8px;">
            <v-icon class="pr-2">mdi-plus-circle</v-icon>
            Add Category
          </v-btn>
          <v-btn large class="ma-2" dark color="indigo"
            ><v-icon> mdi-crop-portrait</v-icon> Clone</v-btn
          >
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal first name*"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal middle name"
                    hint="example of helper text only on focus"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Password*"
                    type="password"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Age*"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    :items="[
                      'Skiing',
                      'Ice hockey',
                      'Soccer',
                      'Basketball',
                      'Hockey',
                      'Reading',
                      'Writing',
                      'Coding',
                      'Basejump'
                    ]"
                    label="Interests"
                    multiple
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Close</v-btn
            >
            <v-btn color="blue darken-1" text @click="dialog = false"
              >Save</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
import WrapeCompo from "../components/WrapeCompo";
export default {
  data() {
    return {
      name: "sample main point",
      dialog: false,
      dialog1: false,
      category: [
        { titleName: "category 1" },
        { titleName: "category 2" },
        { titleName: "category 3" }
      ],
      headers: [
        {
          id: 1,
          name: "Item 1",
          explaination: "item exeplanation 1",
          rating: [
            { rating_point: 1 },
            { rating_point: 2 },
            { rating_point: 3 },
            { rating_point: 4 },
            { rating_point: 5 },
            { rating_point: "N/A" }
          ]
        },
        {
          id: 2,
          name: "Item 2",
          explaination: "item exeplanation 2",
          rating: [
            { rating_point: 1 },
            { rating_point: 2 },
            { rating_point: 3 },
            { rating_point: 4 },
            { rating_point: 5 },
            { rating_point: "N/A" }
          ]
        },
        {
          id: 3,
          name: "Item 3",
          explaination: "item exeplanation 3",
          rating: [
            { rating_point: 1 },
            { rating_point: 2 },
            { rating_point: 3 },
            { rating_point: 4 },
            { rating_point: 5 },
            { rating_point: "N/A" }
          ]
        },
        {
          id: 4,
          name: "Item 4",
          explaination: "item exeplanation 4",
          rating: [
            { rating_point: 1 },
            { rating_point: 2 },
            { rating_point: 3 },
            { rating_point: 4 },
            { rating_point: 5 },
            { rating_point: "N/A" }
          ]
        },
        {
          id: 5,
          name: "Item 5",
          explaination: "item exeplanation 5",
          rating: [
            { rating_point: 1 },
            { rating_point: 2 },
            { rating_point: 3 },
            { rating_point: 4 },
            { rating_point: 5 },
            { rating_point: "N/A" }
          ]
        }
      ]
    };
  },
  components: {
    WrapeCompo
  },
  methods: {
    deleteCategory(id) {
      const index = this.headers.find(item => item.id === id);
      confirm("Are you sure you want to delete this item?") &&
        this.headers.splice(index, 1);
    },
    saveTable() {
      if (this.editedIndex > -1) {
        Object.assign(this.headers[this.editedIndex], this.editedItem);
      } else {
        this.headers.push(this.editedItem);
      }
    }
  }
};
</script>
<style scoped></style>
