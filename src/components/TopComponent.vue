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
          <span style="font-weight: bold; font-size: 20px">Categorles</span>
        </div>
      </div>
      <v-card style="margin: 30px">
        <v-expansion-panels hover>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <span style="font-weight: bold; margin-right: 12px"
                >Category 1 <v-icon>mdi-border-color</v-icon></span
              >
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
      <v-card style="margin: 30px">
        <v-expansion-panels hover>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <div>
                <span style="font-weight: bold; margin-right: 12px"
                  >Category 2<v-icon>mdi-border-color</v-icon></span
                >
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
      <v-card style="margin: 30px">
        <v-expansion-panels hover>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <div>
                <span style="font-weight: bold; margin-right: 12px"
                  >Category 3<v-icon>mdi-border-color</v-icon></span
                >
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
        <v-row>
          <v-col cols="12" justify-center>
            <div class="text-center">
              <v-btn class="ma-2" tile color="indigo" dark>Nghia</v-btn>
              <v-btn class="ma-2" tile outlined color="success">Cancel</v-btn>
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
