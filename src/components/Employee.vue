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
            <span style="font-weight: bold; margin-right: 12px"
              ><v-icon> mdi-filter</v-icon>Filter</span
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
    <v-card style="margin: 30px">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>Panel 3</v-expansion-panel-header>
          <v-expansion-panel-content>
            <template>
              <v-simple-table fixed-header height="300px" font-size="50px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Employee Name</th>
                      <th class="text-left">Staff ID</th>
                      <th class="text-left">SSD</th>
                      <th class="text-left">City</th>
                      <th class="text-left">Team</th>
                      <th class="text-left">Position</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in desserts" :key="item.name">
                      <td>{{ item.employeeName }}</td>
                      <td>{{ item.satffID }}</td>
                      <td>{{ item.ssu }}</td>
                      <td>{{ item.City }}</td>
                      <td>{{ item.Team }}</td>
                      <td>{{ item.Positon }}</td>
                      <td>
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
