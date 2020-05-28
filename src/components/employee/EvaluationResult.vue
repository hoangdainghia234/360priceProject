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
                  <th v-for="(n, i) in 5" :key="n" class="text-center">
                    {{ header[i] }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in result" :key="item.point">
                  <td>{{ item.point }}</td>
                  <td>{{ item.category }}</td>
                  <td>
                    <v-row
                      v-for="(n, i) in 3"
                      :key="n"
                      class="d-flex align-center"
                      dense
                    >
                      <v-col cols="3 text-end">
                        <span>{{ name[i] }}</span>
                      </v-col>

                      <v-col cols="8">
                        <!-- <div class="text-center">
                          <v-rating v-model="item.rating[i]"></v-rating>
                        </div> -->
                        <v-progress-linear
                          style="height: 15px"
                          :value="item.rating[i] * 20"
                          color="grey"
                        >
                        </v-progress-linear>
                      </v-col>

                      <v-col cols="1">
                        <span>{{ item.rating[i] }}</span>
                      </v-col>
                    </v-row>
                    <!-- <v-progress-linear
                      class="ma-2"
                      style="height: 15px"
                      :value="item.rating"
                      color="grey"
                    ></v-progress-linear>
                    <v-progress-linear
                      class="ma-2"
                      style="height: 15px"
                      :value="item.rating"
                      color="grey"
                    ></v-progress-linear> -->
                  </td>
                  <td></td>
                  <td>
                    <v-btn fab text dense small @click="dialog = true">
                      <v-icon>mdi-information</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>

        <v-dialog v-model="dialog" max-width="80%">
          <v-card>
            <v-card-title class="d-flex justify-center grey lighten-2">
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
                    <thead>
                      <tr>
                        <th v-for="(n, i) in 5" :key="n" class="text-center">
                          {{ header_detail[i] }}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="item_detail in detailCategory"
                        :key="item_detail.itemCategory"
                      >
                        <td>{{ item_detail.itemCategory }}</td>
                        <td>{{ item_detail.itemName }}</td>
                        <td>{{ item_detail.itemExp }}</td>
                        <td>
                          <v-row
                            v-for="(n, i) in 3"
                            :key="n"
                            class="d-flex align-center"
                            dense
                          >
                            <v-col cols="3 text-end">
                              <span>{{ name[i] }}</span>
                            </v-col>

                            <v-col cols="8">
                              <!-- <div class="text-center">
                                <v-rating v-model="item.rating[i]"></v-rating>
                              </div> -->
                              <v-progress-linear
                                style="height: 15px"
                                :value="item_detail.itemRating[i] * 20"
                                color="grey"
                              >
                              </v-progress-linear>
                            </v-col>

                            <v-col cols="1">
                              <span>{{ item_detail.itemRating[i] }}</span>
                            </v-col>
                          </v-row>
                          <!-- <v-progress-linear
                            class="ma-2"
                            style="height: 15px"
                            :value="item.rating"
                            color="grey"
                          ></v-progress-linear>
                          <v-progress-linear
                            class="ma-2"
                            style="height: 15px"
                            :value="item.rating"
                            color="grey"
                          ></v-progress-linear> -->
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
      header: ["Main point", "Category", "Ratings", "Comment", "Detail"],
      header_detail: [
        "Category",
        "Item",
        "Item explanation",
        "Rating",
        "Comment"
      ],
      result: [
        {
          point: "Main point 1",
          category: "category1",
          rating: [0, 1, 2, 3]
        },
        {
          point: "Main point 2",
          category: "category2",
          rating: [0, 1, 2, 3]
        },
        {
          point: "Main point 3",
          category: "category3",
          rating: [0, 1, 2, 3]
        },
        {
          point: "Main point 4",
          category: "category4",
          rating: [0, 1, 2, 3]
        }
        // {
        //   point: "Main point 3",
        //   category: "Category 3",
        //   rating: [0, 5, 1, 2]
        // },
        // {
        //   point: "Main point 4",
        //   category: "Category 4",
        //   rating: [0, 5, 1, 2]
        // }
      ],

      detailCategory: [
        {
          itemCategory: "Category1",
          itemName: "item1",
          itemExp: "Item explanation1",
          itemRating: [0, 1, 3, 2]
        },
        {
          itemCategory: "Category1",
          itemName: "item2",
          itemExp: "Item explanation2",
          itemRating: [0, 4, 1, 5]
        },
        {
          itemCategory: "Category1",
          itemName: "item2",
          itemExp: "Item explanation2",
          itemRating: [0, 4, 1, 5]
        }
      ],

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
  }
};
</script>
<style scoped>
.table-thead-detail {
  background: rgb(24, 20, 20);
}
</style>
