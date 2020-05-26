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
                    <v-col cols="10">
                      <v-row>
                        <v-col
                          cols="4"
                          class="pl-10 pr-10"
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
                      </v-row>
                      <v-row>
                        <v-col cols="4" class="pl-10 pr-10">
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
                    </v-col>
                  </v-row>
                  <v-row>
                    <div class="ml-3">
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
            Timeline
          </v-card-title>
          <v-container>
            <v-timeline>
              <v-timeline-item v-for="n in 5" :key="n" color="red lighten-2">
                <template v-slot:opposite>
                  <span>Tus eu perfecto</span>
                </template>
                <v-card class="elevation-2 item--card">
                  <v-card-text>
                    Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                    scaevola imperdiet nec ut, sed euismod convenire principes
                    at. Est et nobis iisque percipit, an vim zril disputando
                    voluptatibus, vix an salutandi sententiae.
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
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
          item_select: ["Sample name", "Sample name1", "Sample name2"]
        }
      ],
      items_datetime: [
        {
          date: "Dec-2017",
          content: ""
        },
        {
          date: "Jun-2018",
          content: ""
        },
        {
          date: "Dec-2018",
          content: ""
        },
        {
          date: "Jun-2019",
          content: ""
        },
        {
          date: "Dec-2019",
          content: ""
        }
      ]
    };
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    }
  }
};
</script>

<style scoped>
.item--card {
  max-width: 40%;
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
