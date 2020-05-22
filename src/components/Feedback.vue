<template>
  <div>
    <v-container fluid>
      <v-card outlined class="mb-3">
        <v-card-title>
          <v-icon>mdi-information</v-icon>
          Information
        </v-card-title>
        <v-divider></v-divider>
        <v-container>
          <v-row class="d-flex justify-space-around">
            <v-col cols="4">
              <v-row v-for="item in item_inf" :key="item.title">
                <v-col cols="3" class="pa-0">
                  <v-subheader>{{ item.title }}</v-subheader>
                </v-col>
                <v-col cols="8" class="pa-0">
                  <v-text-field
                    outlined
                    hide-details
                    dense
                    class="ml-4"
                    v-model="item.model"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-row v-for="item in item_inf_rater" :key="item.title">
                <v-col cols="3" class="pa-0">
                  <v-subheader>{{ item.title }}</v-subheader>
                </v-col>
                <v-col cols="8" class="pa-0">
                  <v-text-field
                    outlined
                    hide-details
                    dense
                    class="ml-4"
                    v-model="item.model"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <v-card>
        <v-card-title>
          <v-checkbox
            v-model="checkbox1"
            sende
            label="Rattings"
            hide-details
            class="ma-0"
          ></v-checkbox>
        </v-card-title>
        <v-divider></v-divider>
        <v-container fluid>
          <i class="title">Initiative (Category)</i>
          <div class="grey lighten-2" v-for="n in 5" :key="n">
            <div>
              <v-row class="text-center align-center">
                <v-col cols="2">
                  <p>Lorem isum (Item name)</p>
                </v-col>
                <v-col cols="2">
                  <p>Explanation (Item explanation)</p>
                </v-col>
                <v-col cols="4" class="">
                  <div class="ml-2 mr-2">
                    <v-list
                      class="d-flex flex-row justify-space-between mb-3"
                      color="transparent"
                      style="position: relative; z-index: 1; top: 10px"
                    >
                      <div
                        v-for="item in itemtimeline"
                        :key="item"
                        class="d-flex justify-center"
                      >
                        <p
                          style="position: absolute; bottom: 39px"
                          class="body-2"
                        >
                          {{ item.text }}
                        </p>
                        <v-btn fab small>
                          {{ item.id }}
                        </v-btn>
                      </div>
                    </v-list>
                    <p class="text-left body-2 ma-0">
                      Description: Lorem ipsum dolor sit amet, consecterur
                      adipiscing elit. Nunc maximus, nulla ut commodo sagittis,
                      sapien dui mattis dui, non pulvinar lorem felis nec erat
                    </p>
                    <v-progress-linear
                      color="grey"
                      rounded
                      value="100"
                      style="position: relative; bottom: 71px; z-index: 0"
                    ></v-progress-linear>
                  </div>
                </v-col>
                <v-col cols="4">
                  <v-textarea
                    solo
                    label="Comment: "
                    class="pr-4"
                    hide-details
                  ></v-textarea>
                </v-col>
              </v-row>
            </div>
            <v-divider v-if="n + 1 < 6" :key="n"></v-divider>
          </div>

          <v-card class="mt-4 mb-5" outlined>
            <v-card-title class="pa-1">
              Comment:
            </v-card-title>
            <v-divider></v-divider>
            <v-textarea solo label="Sample..." hide-details></v-textarea>
          </v-card>

          <i class="title">Team work</i>
          <div class="grey lighten-2" v-for="n in 5" :key="n">
            <div>
              <v-row class="text-center align-center">
                <v-col cols="2">
                  <p>Lorem isum (Item name)</p>
                </v-col>
                <v-col cols="2">
                  <p>Explanation (Item explanation)</p>
                </v-col>
                <v-col cols="4" class="">
                  <div class="ml-2 mr-2">
                    <v-list
                      class="d-flex flex-row justify-space-between mb-3"
                      color="transparent"
                      style="position: relative; z-index: 1; top: 10px"
                    >
                      <div
                        v-for="item in itemtimeline"
                        :key="item"
                        class="d-flex justify-center"
                      >
                        <p
                          style="position: absolute; bottom: 39px"
                          class="body-2"
                        >
                          {{ item.text }}
                        </p>
                        <v-btn fab small>
                          {{ item.id }}
                        </v-btn>
                      </div>
                    </v-list>
                    <p class="text-left body-2 ma-0">
                      Description: Lorem ipsum dolor sit amet, consecterur
                      adipiscing elit. Nunc maximus, nulla ut commodo sagittis,
                      sapien dui mattis dui, non pulvinar lorem felis nec erat
                    </p>
                    <v-progress-linear
                      color="grey"
                      rounded
                      value="100"
                      style="position: relative; bottom: 71px; z-index: 0"
                    ></v-progress-linear>
                  </div>
                </v-col>
                <v-col cols="4">
                  <v-textarea
                    solo
                    label="Comment: "
                    class="pr-4"
                    hide-details
                  ></v-textarea>
                </v-col>
              </v-row>
            </div>
            <v-divider v-if="n + 1 < 6" :key="n"></v-divider>
          </div>

          <v-card class="mt-4" outlined>
            <v-card-title class="pa-1">
              Comment:
            </v-card-title>
            <v-divider></v-divider>
            <v-textarea solo label="Sample..." hide-details></v-textarea>
          </v-card>

          <v-row class="d-flex justify-center">
            <v-btn dark class="mt-4">
              <v-icon>mdi-telegram</v-icon>
              <span class="pl-2">Submit</span>
            </v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item_inf: [
        {
          title: "Full name:",
          model: "Sample name"
        },
        {
          title: "Position:",
          model: "Sample position"
        },
        {
          title: "Department:",
          model: "Sample Department"
        },
        {
          title: "SSU:",
          model: "Sample SSU"
        }
      ],
      item_inf_rater: [
        {
          title: "Rater's name:",
          model: "Sample rater's name"
        },
        {
          title: "Rater's position:",
          model: "Sample rater's postion"
        }
      ],
      itemtimeline: [
        {
          id: "1",
          text: "Bad"
        },
        {
          id: "2",
          text: "Under Qualified"
        },
        {
          id: "3",
          text: "Qualified"
        },
        {
          id: "4",
          text: "Good"
        },
        {
          id: "5",
          text: "Excellent"
        }
      ]
    };
  }
};
</script>
