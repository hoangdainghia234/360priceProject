<template>
  <div>
    <v-content>
      <v-container fluid>
        <v-row>
          <v-col>
            <v-card>
              <v-card-subtitle class="font-weight-bold">
                <v-icon class="mr-2">mdi-information</v-icon>
                <span>Template Information</span>
              </v-card-subtitle>
              <v-divider></v-divider>
              <v-card-text>
                <v-row class="evaluation-line" dense>
                  <v-col cols="5" xs="5" sm="4" md="2">
                    <p class="subtitle-1">Name:</p>
                  </v-col>
                  <v-col cols="7" sm="7" md="4" lg="3" xl="2">
                    <v-text-field
                      label="name"
                      placeholder="2019 Second Cycle-SSD-Staff-AH Template"
                      solo
                      dense
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row class="evaluation-line" dense>
                  <v-col cols="5" sm="4" md="2">
                    <p class="subtitle-1">Departement:</p>
                  </v-col>
                  <v-col cols="7" sm="7" md="4" lg="3" xl="2">
                    <v-select
                      :items="departments"
                      placeholder="Software Development Department"
                      outlined
                      dense
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

            <section></section>
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
      mainPoint: []
    };
  }
};
</script>
