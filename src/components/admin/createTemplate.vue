<template>
  <div>
    <nav-bar :title="title" :itemsNav="itemsNav" />
    <v-content>
      <v-container fluid>
        <v-row align="start" justify="start">
          <v-col>
            <v-card>
              <v-card-subtitle class="font-weight-bold">
                <v-icon class="mr-2">mdi-information</v-icon>
                <span>Template Information</span>
              </v-card-subtitle>
              <v-divider class="mx-0"></v-divider>
              <v-card-text>
                <v-row class="evaluation-line d-flex align-center" dense>
                  <v-col cols="2">
                    <p class="subtitle-1">Name:</p>
                  </v-col>
                  <v-col cols="2">
                    <v-text-field
                      v-model="nameTemplate"
                      label="2019SecondCycle-SDD-Staff-AH Template"
                      single-line
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="evaluation-line d-flex align-center" dense>
                  <v-col cols="2">
                    <p class="subtitle-1">Department:</p>
                  </v-col>
                  <v-col cols="2">
                    <v-select
                      :items="departments"
                      placeholder="2019 Second Cycle"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                  <v-col cols="2">
                    <p class="subtitle-1">Layer:</p>
                  </v-col>
                  <v-col cols="2">
                    <v-select
                      :items="layers"
                      placeholder="2019 Second Cycle"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                  <v-col cols="2">
                    <p class="subtitle-1">Grade:</p>
                  </v-col>
                  <v-col cols="2">
                    <v-select
                      :items="grades"
                      placeholder="2019 Second Cycle"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row class="evaluation-line d-flex align-center" dense>
                  <v-col cols="2">
                    <p class="subtitle-1">Total weight (%):</p>
                  </v-col>
                  <v-col cols="2">
                    <v-select
                      :items="totalWeights"
                      placeholder="Performance Review"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <section>
              
            </section>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import navBar from "../layout/navBar";

export default {
  name: "createTemplate",

  components: {
    navBar
  },

  props: {},

  data: () => {
    return {
      title: "Create Evaluation Template",
      itemsNav: [
        "Dashboard",
        "360 degree evaluation",
        "Evaluation Template",
        "Evaluation criteria",
        "Employee relationship"
      ],
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
      mainPoint: []
    };
  }
};
</script>
