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
              <v-btn color="primary" dark v-on="on" @click="dialog = true">
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
                  <span class="headline">User Profile</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col class="d-flex" cols="12" sm="4">
                        <span>City</span>
                        <v-select :items="items" outlined></v-select>
                      </v-col>
                      <v-col class="d-flex" cols="12" sm="4">
                        <span>SSU</span>
                        <v-select :items="items" outlined></v-select>
                      </v-col>
                      <v-col class="d-flex" cols="12" sm="4">
                        <span>Team</span>
                        <v-select :items="items" outlined></v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
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
                        <v-btn depressed
                          ><v-icon> mdi-pencil-box-outline</v-icon></v-btn
                        >
                        <v-btn depressed><v-icon>mdi-delete</v-icon></v-btn>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
            <v-btn class="float-right" large color="primary">
              <v-icon class="mr-3">mdi-plus-circle</v-icon>
              <span>Add member</span>
            </v-btn>
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
          employeeName: "Mark",
          satffID: 123456789,
          ssu: "SSU1OO",
          City: "Bangkok",
          Team: "Anonymous",
          Positon: "Developer"
        },
        {
          employeeName: "Mark1",
          satffID: 123456789,
          ssu: "SSU1OO",
          City: "Bangkok",
          Team: "Anonymous",
          Positon: "Developer"
        },
        {
          employeeName: "Mark2",
          satffID: 123456789,
          ssu: "SSU1OO",
          City: "Bangkok",
          Team: "Anonymous",
          Positon: "Developer"
        },
        {
          employeeName: "Mark3",
          satffID: 123456789,
          ssu: "SSU1OO",
          City: "Bangkok",
          Team: "Anonymous",
          Positon: "Developer"
        },
        {
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
      ]
    };
  }
};
</script>
