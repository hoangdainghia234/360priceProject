<template>
  <div class="">
    <v-content>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-expansion-panels v-model="panel" :readonly="readonly" multiple>
              <v-expansion-panel>
                <v-expansion-panel-header class="pt-0 pb-0">
                  <div class="d-flex align-center">
                    <v-icon>mdi-filter-variant</v-icon>
                    <span class="ml-3">Filter</span>
                  </div>
                </v-expansion-panel-header>
                <v-divider></v-divider>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col cols="12" lg="10">
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                          class="pl-lg-10 pr-lg-10"
                          v-for="item in items"
                          :key="item.item_title"
                        >
                          <p class="mb-2">{{ item.item_title }}</p>
                          <v-combobox
                            v-model="item.select"
                            :items="item.item_select"
                            hide-details
                            outlined
                            dense
                          ></v-combobox>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                          class="pl-lg-10 pr-lg-10"
                        >
                          <p class="mb-2">From - To</p>
                          <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="date"
                            transition="scale-transition"
                            offset-x
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on }">
                              <v-text-field
                                v-model="dateRangeText"
                                append-icon="mdi-calendar"
                                readonly
                                outlined
                                dense
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker
                              v-model="dates"
                              range
                              no-title
                              scrollable
                            >
                              <v-spacer></v-spacer>
                              <v-btn text color="primary" @click="menu = false">
                                Cancel
                              </v-btn>
                              <v-btn
                                text
                                color="primary"
                                @click="$refs.menu.save(date)"
                              >
                                OK
                              </v-btn>
                            </v-date-picker>
                          </v-menu>
                        </v-col>
                      </v-row>
                      <!-- <v-row> -->
                      <!-- </v-row> -->
                    </v-col>
                  </v-row>
                  <v-row>
                    <div class="pl-10">
                      <v-btn rounded color="primary" dark
                        ><v-icon>mdi-magnify</v-icon>Search</v-btn
                      >
                    </div>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
        <v-card>
          <v-card-title>
            <v-icon>mdi-chart-line-variant</v-icon>
            <span class="ml-3">Timeline</span>
          </v-card-title>
          <v-container>
            <v-timeline>
              <v-timeline-item
                v-for="item in items_datetime"
                :key="item.date"
                color="red lighten-2"
              >
                <template v-slot:opposite>
                  <span>{{ item.date }}</span>
                </template>
                <v-card class="elevation-2 item--card">
                  <v-card-text @click="dialog = true">
                    <p v-for="(n, i) in 4" :key="n">
                      <span>{{ item.content[i].name }} : </span>
                      <span>{{ item.content[i].rating }}</span>
                    </p>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
            <v-dialog v-model="dialog">
              <v-card>
                <v-card-title class="d-flex justify-center grey lighten-2">
                  <i>Comparison Charts</i>
                </v-card-title>
                <v-row class="justify-center mt-3 ml-3 mr-3">
                  <v-col cols="12" md="6" lg="6">
                    <v-card class="mb-3 align-center">
                      <div class="align-center">
                        <apexchart
                          type="radar"
                          :options="chartOptions"
                          :series="series"
                        ></apexchart>
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-card>
                      <div class="align-center">
                        <apexchart
                          type="radar"
                          :options="chartOptions"
                          :series="series"
                        ></apexchart>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-dialog>
          </v-container>
        </v-card>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  name: "timeline",
  data() {
    return {
      dialog: false,
      panel: [0],
      dates: ["2019-09-10", "2019-09-20"],
      menu: false,
      items: [
        {
          item_title: "City",
          item_select: ["Sample city", "Sample city1", "sample city2"],
          select: ["Sample city"]
        },
        {
          item_title: "SSU",
          item_select: ["Sample SSU", "Sample SSU1", "Sample SSU2"],
          select: ["Sample SSU"]
        },
        {
          item_title: "Appraisee",
          item_select: ["Sample name", "Sample name1", "Sample name2"],
          select: ["Sample name"]
        }
      ],
      items_datetime: [
        {
          date: "Dec-2017",
          content: [
            {
              name: "Self",
              rating: "3.0"
            },
            {
              name: "Team Member",
              rating: "3.0"
            },
            {
              name: "Team Leader",
              rating: "3.0"
            },
            {
              name: "Manager",
              rating: "3.0"
            }
          ]
        },
        {
          date: "Jun-2018",
          content: [
            {
              name: "Self",
              rating: "3.2"
            },
            {
              name: "Team Member",
              rating: "3.1"
            },
            {
              name: "Team Leader",
              rating: "3.0"
            },
            {
              name: "Manager",
              rating: "3.0"
            }
          ]
        },
        {
          date: "Dec-2018",
          content: [
            {
              name: "Self",
              rating: "4.0"
            },
            {
              name: "Team Member",
              rating: "3.1"
            },
            {
              name: "Team Leader",
              rating: "3.0"
            },
            {
              name: "Manager",
              rating: "3.0"
            }
          ]
        },
        {
          date: "Jun-2019",
          content: [
            {
              name: "Self",
              rating: "3.9"
            },
            {
              name: "Team Member",
              rating: "3.0"
            },
            {
              name: "Team Leader",
              rating: "3.0"
            },
            {
              name: "Manager",
              rating: "3.0"
            }
          ]
        },
        {
          date: "Dec-2019",
          content: [
            {
              name: "Self",
              rating: "3.8"
            },
            {
              name: "Team Member",
              rating: "3.4"
            },
            {
              name: "Team Leader",
              rating: "3.0"
            },
            {
              name: "Manager",
              rating: "3.0"
            }
          ]
        }
      ],
      //chart
      series: [
        {
          name: "Self",
          data: [80, 50, 30, 40, 100, 20]
        },
        {
          name: "Team",
          data: [20, 30, 40, 80, 20, 80]
        }
      ],
      chartOptions: {
        chart: {
          type: "radar",
          id: "vuechart",
          align: "center",
          toolbar: {
            show: false
          }
        },
        markers: {
          size: 0
        },
        title: {
          text: "Self vs Team",
          align: "center"
        },
        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.2
        },
        xaxis: {
          categories: [
            "Category 1",
            "Category 2",
            "Category 3",
            "Category 4",
            "Category 5",
            "Category 6"
          ],
          labels: {
            style: {
              colors: ["#000000"]
            }
          }
        }
      }
    };
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    }
  },
  methods: {
    func() {
      console.log("hello");
    }
  }
};
</script>

<style scoped>
.item--card {
  width: 200px;
}
.v-timeline-item:nth-child(2n) .v-timeline-item__body .item--card {
  float: right;
}
.v-timeline:before {
  width: 34px;
  border-radius: 20px;
  left: calc(50% - 17px);
}
.v-application--is-ltr
  .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before {
  left: calc(50% - 17px);
}
</style>
