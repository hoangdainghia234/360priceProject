<template>
  <v-content>
    <v-container fluid>
      <v-row align="start" justify="start">
        <v-col>
          <v-card>
            <v-card-subtitle class="font-weight-bold">
              <v-icon class="mr-2">mdi-information</v-icon>
              <span>Evaluation Information</span>
            </v-card-subtitle>
            <v-divider class="mx-0"></v-divider>
            <v-card-text>
              <v-row class="evaluation-line d-flex align-center" dense>
                <v-col cols="2">
                  <p class="subtitle-1">Type of review:</p>
                </v-col>
                <v-col cols="2">
                  <v-select
                    :items="typeOfReview"
                    placeholder="Performance Review"
                    outlined
                    dense
                  ></v-select>
                </v-col>
              </v-row>
              <v-row class="evaluation-line d-flex align-center" dense>
                <v-col cols="2">
                  <p class="subtitle-1">Name:</p>
                </v-col>
                <v-col cols="2">
                  <v-select
                    :items="items"
                    placeholder="2019 Second Cycle"
                    outlined
                    dense
                  ></v-select>
                </v-col>
              </v-row>
              <v-row class="evaluation-line d-flex align-center" dense>
                <v-col cols="2">
                  <p class="subtitle-1">Period of review:</p>
                </v-col>
                <v-col cols="2">
                  <v-menu
                    ref="menuRangeText"
                    v-model="menuRangeText"
                    :close-on-content-click="false"
                    :return-value.sync="dates"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="dateRangeText"
                        append-icon="mdi-calendar"
                        readonly
                        solo
                        dense
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="dates" range no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menuRangeText = false"
                        >Cancel
                      </v-btn>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menuRangeText.save(dates)"
                        >OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row class="evaluation-line d-flex align-center" dense>
                <v-col cols="2">
                  <p class="subtitle-1">Recurrence:</p>
                </v-col>
                <v-col cols="2">
                  <v-row>
                    <v-checkbox
                      v-model="checkRecurrence"
                      :label="
                        `${checkRecurrence ? 'No recurrence' : 'Recurrence'}`
                      "
                    ></v-checkbox>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "createEvaluation",
  props: {},

  data: () => ({
    typeOfReview: ["Performance Review", "Review 1", "Review 2", "Review 3"],
    dates: ["2019-09-10", "2019-09-20"],
    menuRangeText: false,
    checkRecurrence: true
  }),

  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    }
  }
};
</script>

<style scss>
.evaluation-line {
  height: 4rem;
}
</style>
