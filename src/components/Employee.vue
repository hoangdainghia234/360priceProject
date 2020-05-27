<template>
  <div>
    <v-card class="mx-5">
      <div style="padding: 35px; border-bottom: 3px solid">
        <span style="font-weight: bold; font-size: 20px"
          >Employee relationship</span
        >
      </div>
    </v-card>
    <v-card
      style="margin: 30px
      "
    >
      <v-expansion-panels hover>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <span class="font-weight-bold" style="margin-right: 12px"
              ><v-icon class="mr-2"> mdi-filter</v-icon>Filter</span
            >
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col
                cols="3"
                sm="6"
                md="3"
                v-for="item in items"
                :key="item.title"
              >
                <span>{{ item.title }}</span>
                <v-select
                  dense
                  outlined
                  :items="item.item_select"
                  v-model="item.select"
                  :rules="[v => !!v || 'cities is required']"
                  required
                ></v-select>
              </v-col>
              <!-- <v-col cols="3" sm="6" md="3">
                <span>SSU</span>
                <v-select
                  outlined
                  v-model="select"
                  :items="items"
                  :rules="[v => !!v || 'Item is required']"
                  required
                ></v-select>
              </v-col>
              <v-col cols="3" sm="6" md="3">
                <span>Team</span>
                <v-select
                  outlined
                  v-model="select"
                  personal
                  :items="teams"
                  :rules="[v => !!v || 'Item is required']"
                  required
                ></v-select>
              </v-col> -->
            </v-row>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="3"
                v-for="item in items1"
                :key="item.title"
              >
                <span>{{ item.title }}</span>
                <v-select
                  dense
                  outlined
                  v-model="item.select"
                  :items="item.item_select"
                  :rules="[v => !!v || 'cities is required']"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" class="mt-0">
                <div class="my-2">
                  <v-btn color="primary" rounded dark
                    ><v-icon>mdi-magnify</v-icon>Search</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
    <!-- Button -->
    <v-row>
      <v-col>
        <div class="float-right">
          <div class="mr-7">
            <template>
              <v-btn color="primary" dark @click="dialog = true">
                <span>
                  <v-icon class="mr-4">mdi-plus-circle</v-icon>
                  Add team
                </span>
              </v-btn>
            </template>
            <v-dialog
              v-model="dialog"
              max-width="1000px"
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <v-card>
                <v-card-title>
                  <span class="headline">Add team</span>
                </v-card-title>
                <v-card>
                  <v-card-title>
                    <span class="headline">
                      <v-icon>mdi-star-circle</v-icon>
                      Information
                    </span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="4"
                          sm="4"
                          v-for="team in teams"
                          :key="team.title"
                        >
                          <span>{{ team.title }}</span>
                          <v-select
                            class="text-center"
                            v-model="team.select"
                            :items="team.team_select"
                            outlined
                            dense
                          >
                          </v-select>
                        </v-col>
                      </v-row>
                      <v-simple-table>
                        <template v-slot:default>
                          <thead>
                            <tr>
                              <th class="text-center">Employee</th>
                              <th class="text-center">Position</th>
                              <th class="text-center">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="table in employeeTable"
                              :key="table.employee"
                            >
                              <td class="pa-3">
                                <v-select
                                  v-model="table.employee"
                                  :items="table.employee"
                                  outlined
                                  solo
                                  dense
                                  hide-details
                                >
                                </v-select>
                              </td>
                              <td>
                                <div>
                                  <v-select
                                    v-model="table.select"
                                    :items="table.position"
                                    outlined
                                    solo
                                    dense
                                    hide-details
                                  >
                                  </v-select>
                                </div>
                              </td>
                              <td>
                                <v-btn depressed>
                                  <v-icon>mdi-delete</v-icon>
                                </v-btn>
                              </td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-container>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn class="ma-2" tile color="indigo" dark>Save</v-btn>
                    <v-btn class="ma-2" tile outlined color="success">
                      Cancel
                    </v-btn>
                  </div>
                </v-card>
              </v-card>
            </v-dialog>
          </div>
        </div>
      </v-col>
    </v-row>
    <!-- End: Button -->
    <v-card style="margin: 30px">
      <v-expansion-panels hover>
        <v-expansion-panel>
          <v-expansion-panel-header>
            <span class="font-weight-bold">
              <v-icon class="mr-2">mdi-filter-variant</v-icon>
              Relationship
            </span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <template>
              <v-simple-table fixed-header height="350px" font-size="50px">
                <template v-slot:default class="blue darken-2">
                  <thead>
                    <tr>
                      <th class="text-center blue darken-2">Employee Name</th>
                      <th class="text-center blue darken-2">Staff ID</th>
                      <th class="text-center blue darken-2">SSD</th>
                      <th class="text-center blue darken-2">City</th>
                      <th class="text-center blue darken-2">Team</th>
                      <th class="text-center blue darken-2">Position</th>
                      <th class="text-center blue darken-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in desserts" :key="item.name">
                      <td class="text-center">{{ item.employeeName }}</td>
                      <td class="text-center">{{ item.satffID }}</td>
                      <td class="text-center">{{ item.ssu }}</td>
                      <td class="text-center">{{ item.City }}</td>
                      <td class="text-center">{{ item.Team }}</td>
                      <td class="text-center">{{ item.Positon }}</td>
                      <td class="text-center">
                        <v-btn text
                          ><v-icon> mdi-pencil-box-outline</v-icon></v-btn
                        >
                        <v-btn text><v-icon>mdi-delete</v-icon></v-btn>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <v-row justify="end">
              <v-dialog v-model="dialog1" persistent max-width="850px">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark v-on="on">Add member</v-btn>
                </template>
                <v-card>
                  <v-card-subtitle class="font-weight-bold">
                    <v-card-title>
                      <span class="headline">Add/Update employee</span>
                    </v-card-title>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Information</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <!-- Tast 1 -->
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
                              v-for="item in items"
                              :key="item.title"
                            >
                              <span>{{ item.title }}</span>
                              <v-select
                                dense
                                outlined
                                v-model="item.select"
                                :items="item.item_select"
                                :rules="[v => !!v || 'cities is required']"
                                required
                              ></v-select>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
                              v-for="item in items1"
                              :key="item.title"
                            >
                              <span>{{ item.title }}</span>
                              <v-select
                                dense
                                outlined
                                v-model="item.select"
                                :items="item.item_select"
                                :rules="[v => !!v || 'cities is required']"
                                required
                              ></v-select>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-spacer></v-spacer>
                    </v-card>
                  </v-card-subtitle>
                  <div class="text-center">
                    <v-btn class="ma-2" tile color="indigo" dark>Save</v-btn>
                    <v-btn
                      class="ma-2"
                      tile
                      outlined
                      color="success"
                      @click="dialog1 = false"
                    >
                      Cancel
                    </v-btn>
                  </div>
                </v-card>
              </v-dialog>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      dialog1: false,
      select: "",
      items: [
        {
          title: "City",
          item_select: ["HoChiMinh", "HaNoi", "DaNang"],
          select: "HoChiMinh"
        },
        {
          title: "SSU",
          item_select: ["HoChiMinh1", "HaNoi1", "DaNang1"],
          select: "HoChiMinh1"
        },
        {
          title: "Team",
          item_select: ["VueJs", "ReactJs", "Php"],
          select: "VueJs"
        }
      ],
      items1: [
        {
          title: "Employee",
          item_select: [
            "Bui Minh Dung",
            "Nguyen Thi Thu Thanh",
            "Pham Hoang Dai Nghia"
          ],
          select: "Bui Minh Dung"
        },
        {
          title: "Staff ID",
          item_select: ["12345678", "23456789", "12457689"],
          select: "12345678"
        }
      ],
      desserts: [
        {
          title: "City",
          employeeName: "Mark",
          satffID: 123456789,
          ssu: "SSU1OO",
          City: "Bangkok",
          Team: "Anonymous",
          Positon: "Developer"
        },
        {
          title: "SSU",
          employeeName: "Mark1",
          satffID: 123456789,
          ssu: "SSU1OO",
          City: "Bangkok",
          Team: "Anonymous",
          Positon: "Developer"
        },
        {
          title: "Team",
          employeeName: "Mark2",
          satffID: 123456789,
          ssu: "SSU1OO",
          City: "Bangkok",
          Team: "Anonymous",
          Positon: "Developer"
        },
        {
          title: "Employee",
          employeeName: "Mark3",
          satffID: 123456789,
          ssu: "SSU1OO",
          City: "Bangkok",
          Team: "Anonymous",
          Positon: "Developer"
        },
        {
          title: "Staff ID",
          employeeName: "Mark4",
          satffID: 123456789,
          ssu: "SSU1OO",
          City: "Bangkok",
          Team: "Anonymous",
          Positon: "Developer"
        },
        {
          employeeName: "Mark5",
          satffID: 123456789,
          ssu: "SSU1OO",
          City: "Bangkok",
          Team: "Anonymous",
          Positon: "Developer"
        }
      ],
      teams: [
        {
          title: "City",
          team_select: ["BangKok", "HaNoi", "Manila"],
          select: "BangKok"
        },
        {
          title: "SSU",
          team_select: ["SSU100", "SSU200", "SSU300"],
          select: "SSU100"
        },
        {
          title: "Team",
          team_select: ["Anonymous", "UseCase", "TheKop"],
          select: "Anonymous"
        }
      ],
      employeeTable: [
        {
          employee: "Mark1",
          position: ["developer", "Leader", "Direct Manager"],
          select: "developer"
        },
        {
          employee: "Mark2",
          position: ["developer", "Leader", "Direct Manager"],
          select: "developer"
        },
        {
          employee: "Mark3",
          position: ["developer", "Leader", "Direct Manager"],
          select: "developer"
        },
        {
          employee: "Mark4",
          position: ["developer", "Leader", "Direct Manager"],
          select: "Leader"
        },
        {
          employee: "Mark5",
          position: ["developer", "Leader", "Direct Manager"],
          select: "Direct Manager"
        }
      ]
    };
  }
};
</script>
