<template>
  <div>
    <v-content>
      <v-container fluid>
        <v-card outlined class="mb-3">
          <v-card-title>
            <v-icon>mdi-information</v-icon>
            Information
          </v-card-title>
          <v-divider></v-divider>
          <v-container>
            <v-row class="d-flex justify-space-around">
              <v-col cols="11" lg="4">
                <v-row
                  v-for="item in item_inf"
                  :key="item.title"
                  class="align-center mb-4"
                >
                  <v-col cols="3" class="pa-0">
                    <p class="ma-0">{{ item.title }}</p>
                  </v-col>
                  <v-col cols="9" class="pa-0">
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
              <v-col cols="11" lg="4">
                <v-row
                  v-for="item in item_inf_rater"
                  :key="item.title"
                  class="align-center mb-4"
                >
                  <v-col cols="3" class="pa-0">
                    <p class="ma-0">{{ item.title }}</p>
                  </v-col>
                  <v-col cols="9" class="pa-0">
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
            <div
              class="grey lighten-2"
              v-for="item in item_category"
              :key="item"
            >
              <div>
                <v-row class="text-center align-center">
                  <v-col cols="12" md="6" lg="2">
                    <p>{{ item.item_name }}</p>
                  </v-col>
                  <v-col cols="12" md="6" lg="2">
                    <p>{{ item.item_exp }}</p>
                  </v-col>
                  <v-col cols="12" class="" md="6" lg="4">
                    <div class="ml-2 mr-2">
                      <v-list
                        class="d-flex flex-row justify-space-between mb-3"
                        color="transparent"
                        style="position: relative; z-index: 1; top: 10px; bottom: 0"
                      >
                        <div
                          v-for="(n, i) in item.item_choose"
                          :key="n.id"
                          :class="{ active: item.activeIndex === n.id }"
                          class="d-flex justify-center"
                        >
                          <p
                            style="position: absolute; bottom: 39px"
                            class="body-2"
                          >
                            {{ item.item_choose[i].name }}
                          </p>
                          <v-btn
                            fab
                            small
                            @click="click_choose(item.id - 1, n.id)"
                          >
                            {{ item.item_choose[i].id }}
                          </v-btn>
                        </div>
                      </v-list>
                      <v-progress-linear
                        color="grey"
                        rounded
                        value="100"
                        style="position: relative; bottom: 30px; z-index: 0"
                      ></v-progress-linear>
                      <div class="text-left body-2 ma-0">
                        <p class="text-left body-2 ma-0" :value="(i = 1)">
                          {{ item.item_choose[i].desc }}
                        </p>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" md="6" lg="4">
                    <v-textarea
                      solo
                      label="Comment: "
                      class="pr-4 pl-4"
                      hide-details
                    ></v-textarea>
                  </v-col>
                </v-row>
              </div>
              <v-divider></v-divider>
            </div>

            <v-card class="mt-4 mb-5" outlined>
              <v-card-title class="pa-1">
                Comment:
              </v-card-title>
              <v-divider></v-divider>
              <v-textarea solo label="Sample..." hide-details></v-textarea>
            </v-card>

            <i class="title">Team work</i>
            <div
              class="grey lighten-2"
              v-for="item in item_category"
              :key="item"
            >
              <div>
                <v-row class="text-center align-center">
                  <v-col cols="12" md="6" lg="2">
                    <p>{{ item.item_name }}</p>
                  </v-col>
                  <v-col cols="12" md="6" lg="2">
                    <p>{{ item.item_exp }}</p>
                  </v-col>
                  <v-col cols="12" class="" md="6" lg="4">
                    <div class="ml-2 mr-2">
                      <v-list
                        class="d-flex flex-row justify-space-between mb-3"
                        color="transparent"
                        style="position: relative; z-index: 1; top: 10px; bottom: 0"
                      >
                        <div
                          v-for="(n, i) in item.item_choose.length"
                          :key="n"
                          class="d-flex justify-center"
                        >
                          <p
                            style="position: absolute; bottom: 39px"
                            class="body-2"
                          >
                            {{ item.item_choose[i].name }}
                          </p>
                          <v-btn fab small>
                            {{ item.item_choose[i].id }}
                          </v-btn>
                        </div>
                      </v-list>
                      <v-progress-linear
                        color="grey"
                        rounded
                        value="100"
                        style="position: relative; bottom: 30px; z-index: 0"
                      ></v-progress-linear>
                      <p class="text-left body-2 ma-0">
                        {{ item.item_desc }}
                      </p>
                    </div>
                  </v-col>
                  <v-col cols="12" md="6" lg="4">
                    <v-textarea
                      solo
                      label="Comment: "
                      class="pr-4 pl-4"
                      hide-details
                    ></v-textarea>
                  </v-col>
                </v-row>
              </div>
              <v-divider></v-divider>
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
    </v-content>
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
      item_category: [
        {
          id: 1,
          item_name: "Lorem isum 1",
          item_exp: "Explanation 1",
          item_comments: "",
          activeIndex: 1,
          item_choose: [
            {
              id: 1,
              name: "Bad",
              desc:
                "Description1: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 2,
              name: "Under Qualified",
              desc:
                "Description2: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 3,
              name: "Qualified",
              desc:
                "Description3: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 4,
              name: "Good",
              desc:
                "Description4: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 5,
              name: "Excellent",
              desc:
                "Description5: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            }
          ]
        },
        {
          id: 2,
          item_name: "Lorem isum 2",
          item_exp: "Explanation 2",
          item_comments: "",
          activeIndex: 1,
          item_choose: [
            {
              id: 1,
              name: "Bad",
              desc:
                "Description6: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 2,
              name: "Under Qualified",
              desc:
                "Description7: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 3,
              name: "Qualified",
              desc:
                "Description8: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 4,
              name: "Good",
              desc:
                "Description9: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 5,
              name: "Excellent",
              desc:
                "Description10: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            }
          ]
        },
        {
          id: 3,
          item_name: "Lorem isum 3",
          item_exp: "Explanation 3",
          item_comments: "",
          activeIndex: 1,
          item_choose: [
            {
              id: 1,
              name: "Bad",
              desc:
                "Description11: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 2,
              name: "Under Qualified",
              desc:
                "Description12: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 3,
              name: "Qualified",
              desc:
                "Description13: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 4,
              name: "Good",
              desc:
                "Description14: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 5,
              name: "Excellent",
              desc:
                "Description15: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            }
          ]
        },
        {
          id: 4,
          item_name: "Lorem isum 4",
          item_exp: "Explanation 4",
          item_comments: "",
          activeIndex: 1,
          item_choose: [
            {
              id: 1,
              name: "Bad",
              desc:
                "Description16: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 2,
              name: "Under Qualified",
              desc:
                "Description17: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 3,
              name: "Qualified",
              desc:
                "Description18: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 4,
              name: "Good",
              desc:
                "Description19: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 5,
              name: "Excellent",
              desc:
                "Description20: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            }
          ]
        },
        {
          id: 5,
          item_name: "Lorem isum 5",
          item_exp: "Explanation 5",
          item_comments: "",
          activeIndex: 1,
          item_choose: [
            {
              id: 1,
              name: "Bad",
              desc:
                "Description1: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 2,
              name: "Under Qualified",
              desc:
                "Description2: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 3,
              name: "Qualified",
              desc:
                "Description3: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 4,
              name: "Good",
              desc:
                "Description4: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            },
            {
              id: 5,
              name: "Excellent",
              desc:
                "Description5: Lorem ipsum dolor sit amet, consecterur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat"
            }
          ]
        }
      ]
    };
  },
  created() {
    this.axios
      .get("http://34.72.144.52/api/evaluations/perform/1")
      .then(response => {
        console.log(response.data);
      });
  },
  methods: {
    click_choose(id, i) {
      var items = this.item_category[id].item_choose[i - 1];
      console.log(items, id, i);
      // console.log(this.item_category[id].id);

      if (this.item_category[id].id === id + 1) {
        console.log(id + 1);
        this.item_category[id].activeIndex = i;
        console.log(this.item_category[id].activeIndex);
      }
    }
    // descChange(desc) {
    //   var id;
    //   var desc = this.item_category[id].activeIndex;
    //   desc = id;
    // }
  }
};
</script>
<style scoped>
.active > button {
  background: grey !important;
}
</style>
