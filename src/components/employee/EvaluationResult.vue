<template>
  <div>
    <v-content>
      <v-container fluid>
        <v-card>
          <v-simple-table
            fixed-header
            height="500px"
            style="min-width: 1200px; overflow: auto"
            class="text-center"
            group-by="point"
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">
                    Main point
                  </th>
                  <th class="text-center">
                    Category
                  </th>
                  <th class="text-center" style="width: 25rem">
                    Ratings
                  </th>
                  <th class="text-center" style="width: 20rem">
                    Comment
                  </th>
                  <th class="text-center">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody v-for="(itemMainPoints, index) in mainPoints" :key="index">
                <tr
                  v-for="itemCategory in itemMainPoints.category"
                  :key="itemCategory.id"
                >
                  <td>{{ mainPoints[index].name }}</td>
                  <td>{{ itemCategory.name }}</td>
                  <td>
                    <v-row class="d-flex align-center" dense>
                      <v-col cols="3 text-end">
                        <span>Self</span>
                      </v-col>

                      <v-col cols="7">
                        <v-progress-linear
                          style="height: 15px"
                          :value="itemCategory.rating_point.self * (100 / 5)"
                          color="grey"
                        >
                        </v-progress-linear>
                      </v-col>

                      <v-col cols="2" class="d-flex justify-start">
                        <span>{{ itemCategory.rating_point.self }}</span>
                      </v-col>
                    </v-row>

                    <v-row class="d-flex align-center" dense>
                      <v-col cols="3 text-end">
                        <span>Team</span>
                      </v-col>

                      <v-col cols="7">
                        <v-progress-linear
                          style="height: 15px"
                          :value="itemCategory.rating_point.member * (100 / 5)"
                          color="grey"
                        >
                        </v-progress-linear>
                      </v-col>

                      <v-col cols="2" class="d-flex justify-start">
                        <span>{{ itemCategory.rating_point.member }}</span>
                      </v-col>
                    </v-row>

                    <v-row class="d-flex align-center" dense>
                      <v-col cols="3 text-end">
                        <span>Manager</span>
                      </v-col>

                      <v-col cols="7">
                        <v-progress-linear
                          style="height: 15px"
                          :value="itemCategory.rating_point.mentor * (100 / 5)"
                          color="grey"
                        >
                        </v-progress-linear>
                      </v-col>

                      <v-col cols="2" class="d-flex justify-start">
                        <span>{{ itemCategory.rating_point.mentor }}</span>
                      </v-col>
                    </v-row>
                  </td>
                  <td>{{ itemCategory.comment }}</td>
                  <td>
                    <v-dialog v-model="itemCategory.index">
                      <template v-slot:activator="{ on }">
                        <v-btn text fab small v-on="on">
                          <v-icon>mdi-information</v-icon>
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title
                          class="d-flex justify-center indigo dark white--text"
                        >
                          Category Detail
                        </v-card-title>
                        <v-container fluid>
                          <v-card>
                            <v-simple-table
                              fixed-header
                              class="text-center mb-3 mt-3"
                              group-by="point"
                            >
                              <template v-slot:default>
                                <thead class="grey">
                                  <tr>
                                    <th class="text-center">
                                      Category
                                    </th>
                                    <th class="text-center">
                                      Item
                                    </th>
                                    <th class="text-center" style="width: 30%">
                                      Item explanation
                                    </th>
                                    <th
                                      class="text-center"
                                      style="width: 20rem"
                                    >
                                      Rating
                                    </th>
                                    <th
                                      class="text-center"
                                      style="width: 15rem"
                                    >
                                      Comment
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    v-for="item_detail in itemCategory.details"
                                    :key="item_detail.id"
                                  >
                                    <td>
                                      {{ itemCategory.name }}
                                    </td>
                                    <td>{{ item_detail.items.name_items }}</td>
                                    <td>
                                      {{ item_detail.items.explaination }}
                                    </td>
                                    <td style="width: 25rem">
                                      <v-row class="d-flex align-center" dense>
                                        <v-col cols="3 text-end">
                                          <span>Self</span>
                                        </v-col>

                                        <v-col cols="7">
                                          <v-progress-linear
                                            style="height: 15px"
                                            :value="
                                              item_detail.items.rating_point
                                                .self *
                                                (100 / 5)
                                            "
                                            color="grey"
                                          >
                                          </v-progress-linear>
                                        </v-col>

                                        <v-col
                                          cols="2"
                                          class="d-flex justify-start"
                                        >
                                          <span>
                                            {{
                                              item_detail.items.rating_point
                                                .self
                                            }}
                                          </span>
                                        </v-col>
                                      </v-row>

                                      <v-row class="d-flex align-center" dense>
                                        <v-col cols="3 text-end">
                                          <span>Team</span>
                                        </v-col>

                                        <v-col cols="7">
                                          <v-progress-linear
                                            style="height: 15px"
                                            :value="
                                              item_detail.items.rating_point
                                                .member *
                                                (100 / 5)
                                            "
                                            color="grey"
                                          >
                                          </v-progress-linear>
                                        </v-col>

                                        <v-col
                                          cols="2"
                                          class="d-flex justify-start"
                                        >
                                          <span>
                                            {{
                                              item_detail.items.rating_point
                                                .member
                                            }}
                                          </span>
                                        </v-col>
                                      </v-row>

                                      <v-row class="d-flex align-center" dense>
                                        <v-col cols="3 text-end">
                                          <span>Manager</span>
                                        </v-col>

                                        <v-col cols="7">
                                          <v-progress-linear
                                            style="height: 15px"
                                            :value="
                                              item_detail.items.rating_point
                                                .mentor *
                                                (100 / 5)
                                            "
                                            color="grey"
                                          >
                                          </v-progress-linear>
                                        </v-col>

                                        <v-col
                                          cols="2"
                                          class="d-flex justify-start"
                                        >
                                          <span>
                                            {{
                                              item_detail.items.rating_point
                                                .mentor
                                            }}
                                          </span>
                                        </v-col>
                                      </v-row>
                                    </td>
                                    <td>
                                      {{ item_detail.items.comment_category }}
                                    </td>
                                  </tr>
                                </tbody>
                              </template>
                            </v-simple-table>
                          </v-card>
                        </v-container>
                      </v-card>
                    </v-dialog>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>

        <v-card class="ml-10 mt-5 mr-10">
          <v-card-title class="d-flex justify-center">
            Comparison Charts
          </v-card-title>
          <v-row class="justify-center ml-3 mr-3">
            <v-col cols="12" lg="6">
              <v-card>
                <apexchart
                  type="radar"
                  :options="chartOptionsTeam"
                  :series="seriesSelfAndTeam"
                ></apexchart>
              </v-card>
            </v-col>
            <v-col cols="12" lg="6">
              <v-card>
                <apexchart
                  type="radar"
                  :options="chartOptionsManager"
                  :series="seriesSelfAndMange"
                ></apexchart>
              </v-card>
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
      dialog: false,
      mainPoints: [],
      seriesSelfAndTeam: [],
      seriesSelfAndMange: [],
      chartOptionsTeam: {},
      chartOptionsManager: {}
    };
  },
  created() {
    this.axios
      .get("http://34.72.144.52/api/employee/view-evaluation-result/user-3")
      .then(response => {
        var nameCategories = [];
        var ratingSelf = [];
        var ratingTeam = [];
        var ratingManage = [];
        var colorNameCategory = [];
        var namePoint = [];
        Object.keys(response.data).forEach(function(item) {
          namePoint.push(response.data[item]);
          Object.keys(response.data[item].category).forEach(function(
            item_category
          ) {
            nameCategories.push(
              response.data[item].category[item_category].name
            );
            var rating_point_self =
              response.data[item].category[item_category].rating_point.self;
            if (
              typeof response.data[item].category[item_category].rating_point
                .member !== "undefined"
            ) {
              var rating_point_team =
                response.data[item].category[item_category].rating_point.member;
            } else {
              rating_point_team = 5;
            }
            if (
              typeof response.data[item].category[item_category].rating_point
                .mentor !== "undefined"
            ) {
              var rating_point_manager =
                response.data[item].category[item_category].rating_point.mentor;
            } else {
              rating_point_manager = 5;
            }
            ratingSelf.push(rating_point_self);
            ratingTeam.push(rating_point_team);
            ratingManage.push(rating_point_manager);
            colorNameCategory.push("#000000");
          });
        });
        this.mainPoints = namePoint;
        this.seriesSelfAndTeam = [
          {
            name: "Self",
            data: ratingSelf
          },
          {
            name: "Team",
            data: ratingTeam
          }
        ];
        this.seriesSelfAndMange = [
          {
            name: "Self",
            data: ratingSelf
          },
          {
            name: "Manager",
            data: ratingManage
          }
        ];
        this.chartOptionsTeam = {
          chart: {
            type: "radar",
            id: "vuechart",
            align: "center",
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            radar: {
              size: 120,
              polygons: {
                strokeColors: "#e9e9e9",
                fill: {
                  colors: ["#f8f8f8", "#fff"]
                }
              }
            }
          },
          tooltip: {
            y: {
              formatter: function(val) {
                return val;
              }
            }
          },
          markers: {
            size: 3
          },
          title: {
            text: "Self vs Team",
            align: "center",
            margin: 20
          },
          stroke: {
            width: 2
          },
          fill: {
            opacity: 0.2
          },
          xaxis: {
            categories: nameCategories,
            labels: {
              style: {
                colors: colorNameCategory
              }
            }
          }
        };
        this.chartOptionsManager = {
          chart: {
            type: "radar",
            id: "vuechart",
            align: "center",
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            radar: {
              size: 120,
              polygons: {
                strokeColors: "#e9e9e9",
                fill: {
                  colors: ["#f8f8f8", "#fff"]
                }
              }
            }
          },
          tooltip: {
            y: {
              formatter: function(val) {
                return val;
              }
            }
          },
          markers: {
            size: 3
          },
          title: {
            text: "Self vs Manager",
            align: "center",
            margin: 20
          },
          stroke: {
            width: 2
          },
          fill: {
            opacity: 0.2
          },
          xaxis: {
            categories: nameCategories,
            labels: {
              style: {
                colors: colorNameCategory
              }
            }
          }
        };
      });
  }
};
</script>
<style scoped>
.table-thead-detail {
  background: rgb(24, 20, 20);
}
table td {
  border-bottom: 1px solid #dddddd;
  padding: 10px 0;
}
table th + th {
  border-left: 1px solid #dddddd;
}
table td + td {
  border-left: 1px solid #dddddd;
}
</style>
