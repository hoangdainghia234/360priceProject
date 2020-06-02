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
                  <th class="text-center">
                    Ratings
                  </th>
                  <th class="text-center">
                    Comment
                  </th>
                  <th class="text-center">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="itemCategory in mainPoints.category"
                  :key="itemCategory.name"
                >
                  <td>{{ mainPoints.name }}</td>
                  <td>{{ itemCategory.name }}</td>
                  <td>
                    <v-row class="d-flex align-center" dense>
                      <v-col cols="3 text-end">
                        <span>Seft</span>
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
                  <td></td>
                  <td>
                    <v-dialog v-model="dialog[0]">
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
                        <v-container>
                          <v-card>
                            <v-simple-table
                              fixed-header
                              height="500"
                              class="text-center"
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
                                    <th class="text-center">
                                      Item explanation
                                    </th>
                                    <th class="text-center">
                                      Rating
                                    </th>
                                    <th class="text-center">
                                      Comment
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    v-for="item_detail in itemCategory.details"
                                    :key="item_detail"
                                  >
                                    <td>{{ itemCategory.name }}</td>
                                    <td>{{ item_detail.items.name_items }}</td>
                                    <td>
                                      {{ item_detail.items.explaination }}
                                    </td>
                                    <td>
                                      <v-row class="d-flex align-center" dense>
                                        <v-col cols="3 text-end">
                                          <span>Seft</span>
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
                                    <td></td>
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

          <v-row class="justify-center ma-3">
            <v-col cols="6">
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
            <v-col cols="6">
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
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      name: ["Self", "Team", "Manager"],
      mainPoints: [],
      series: [
        {
          name: "Self",
          data: [80, 50, 30]
        },
        {
          name: "Team",
          data: [20, 30, 40]
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
          categories: [],
          labels: {
            style: {
              colors: ["#000000"]
            }
          }
        }
      }
    };
  },
  created() {
    this.axios
      .get("http://34.72.144.52/api/employee/view-evaluation-result/user-3")
      .then(response => {
        this.mainPoints = response.data.mainpoints;
        // this.chartOptions.xaxis.categories = [this.mainPoints.category];
        this.mainPoints.category.forEach(function(e) {
          console.log(e);
        });
        console.log();
      });
  }
};
</script>
<style scoped>
.table-thead-detail {
  background: rgb(24, 20, 20);
}
table th + th {
  border-left: 1px solid #dddddd;
}
table td + td {
  border-left: 1px solid #dddddd;
}
</style>
