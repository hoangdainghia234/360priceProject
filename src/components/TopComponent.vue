<template>
  <div>
    <v-container>
      <div class="slider">
        <div style="padding: 12px; border-bottom: 3px solid">
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
      <v-icon class="float-right mt-8">
        mdi-minus-circle
      </v-icon>
      <v-card class="ma-8">
        <v-expansion-panels hover>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="font-weight-bold title">
                Category 1 <v-icon class="ml-3">mdi-pencil-box-outline</v-icon>
              </span>
              <div class="d-flex justify-end">
                <v-checkbox></v-checkbox>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              Some content
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
      <v-icon class="float-right mt-0">
        mdi-minus-circle
      </v-icon>
      <v-card class="ma-8">
        <v-expansion-panels hover>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <div>
                <span class="font-weight-bold title">
                  Category 2<v-icon class="ml-3">mdi-pencil-box-outline</v-icon>
                </span>
              </div>
              <div class="d-flex justify-end">
                <v-checkbox></v-checkbox>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <WrapeCompo />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
      <!-- END: Category 2 -->
      <v-icon class="float-right mt-0">
        mdi-minus-circle
      </v-icon>
      <v-card class="ma-8">
        <v-expansion-panels hover>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <div>
                <span class="font-weight-bold title">
                  Category 3
                  <v-icon class="ml-3">mdi-pencil-box-outline</v-icon>
                </span>
              </div>
              <v-spacer></v-spacer>
              <div class="d-flex justify-end">
                <v-checkbox></v-checkbox>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <WrapeCompo />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
      <v-card>
        <v-row>
          <v-col cols="12"><AddCategory /></v-col>
        </v-row>
      </v-card>
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
  </div>
</template>
<script>
import WrapeCompo from "../components/WrapeCompo";
import AddCategory from "../components/AddCategory";
export default {
  data() {
    return {
      name: "sample main point",
      dialog: false
    };
  },
  components: {
    WrapeCompo,
    AddCategory
  }
};
</script>
<style scoped></style>
