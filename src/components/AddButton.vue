<template>
  <div class="text-center">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="1000px">
        <template v-slot:activator="{ on }">
          <v-btn color="success" dark v-on="on">Add Item</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline" style="margin: auto">Item Infomation</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="3"
                  ><span style="font-weight: bold">Name:</span></v-col
                >
                <v-col cols="6">
                  <v-text-field
                    outlined
                    dense
                    placeholder="Name"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="3">
                  <span style="font-weight: bold">Exlanation:</span>
                </v-col>
                <v-col cols="9">
                  <v-textarea
                    outlined
                    dense
                    name="input-7-1"
                    filled
                    auto-grow
                    placeholder="Sample explanation ..."
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-card>
                <v-container>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-center">Point</th>
                          <th class="text-center">Name</th>
                          <th class="text-center">Description</th>
                        </tr>
                      </thead>
                      <tbody style="text-align: center">
                        <tr v-for="item in desserts" :key="item.name">
                          <td>{{ item.pointNum }}</td>
                          <td>
                            <v-col cols="10">
                              <v-text-field
                                dense
                                v-bind:placeholder="item.name"
                                outlined
                              ></v-text-field>
                            </v-col>
                          </td>
                          <td>
                            <v-textarea
                              dense
                              rows
                              solo
                              name="input-7-4"
                              label="Sample ..."
                            ></v-textarea>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-container>
              </v-card>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-row justify="center">
              <v-btn
                color="blue darken-1"
                class="ma-2"
                dark
                @click="dialog = false"
                >Save</v-btn
              >
              <v-btn color="success" class="ma-2" dark @click="dialog = false"
                >Close</v-btn
              >
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      desserts: [
        {
          pointNum: 0,
          name: "Not Acceptable"
        },
        {
          pointNum: 1,
          name: "Under Expectation"
        },
        {
          pointNum: 2,
          name: "Qualified"
        },
        {
          pointNum: 3,
          name: "Good"
        },
        {
          pointNum: 4,
          name: "Excellent"
        },
        {
          pointNum: 5,
          name: "Outstanding"
        }
      ]
    };
  }
};
</script>
<style scoped></style>>
