<template>
  <v-card>
    <v-list>
      <v-simple-table>
        <template v-slot:default>
          <tbody style="text-align: center">
            <tr v-for="header in headers" :key="header.id">
              <td>{{ header.name }}</td>
              <td>{{ header.project }}</td>
              <td>
                <div class="my-2">
                  <v-btn
                    color="primary"
                    fab
                    small
                    dark
                    style="margin-right: 10px"
                  >
                    <span style="font-size: 18px">{{ header.numberOne }}</span>
                  </v-btn>
                  <v-btn
                    color="primary"
                    fab
                    small
                    dark
                    style="margin-right: 10px"
                  >
                    <span style="font-size: 18px">{{ header.numberTwo }}</span>
                  </v-btn>
                  <v-btn
                    color="primary"
                    fab
                    small
                    dark
                    style="margin-right: 10px"
                  >
                    <span style="font-size: 18px">{{
                      header.numberThree
                    }}</span>
                  </v-btn>
                  <v-btn
                    color="primary"
                    fab
                    small
                    dark
                    style="margin-right: 10px"
                  >
                    <span style="font-size: 18px">{{ header.numberFour }}</span>
                  </v-btn>
                  <v-btn
                    color="primary"
                    fab
                    small
                    dark
                    style="margin-right: 10px"
                  >
                    <span style="font-size: 18px">{{ header.numberFire }}</span>
                  </v-btn>
                  <v-btn color="primary" fab small dark>
                    <span style="font-size: 18px">{{ header.check }}</span>
                  </v-btn>
                </div>
              </td>
              <td>
                <v-btn><v-icon> mdi-pencil-box-outline</v-icon></v-btn>
                <v-btn><v-icon>mdi-delete</v-icon></v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <AddButton style="float: left; margin-top: 30px" />
    </v-list>
  </v-card>
</template>
<script>
import AddButton from "../components/AddButton";
export default {
  data() {
    return {
      name: "sample main point",
      headers: [
        {
          id: 1,
          name: "Item 1",
          project: "item exeplanation 1",
          numberOne: 1,
          numberTwo: 2,
          numberThree: 3,
          numberFour: 4,
          numberFire: 5,
          check: "N/A"
        },
        {
          id: 2,
          name: "Item 2",
          project: "item exeplanation 2",
          numberOne: 1,
          numberTwo: 2,
          numberThree: 3,
          numberFour: 4,
          numberFire: 5,
          check: "N/A"
        },
        {
          id: 3,
          name: "Item 3",
          project: "item exeplanation 3",
          numberOne: 1,
          numberTwo: 2,
          numberThree: 3,
          numberFour: 4,
          numberFire: 5,
          check: "N/A"
        }
      ],
      dialog: false
    };
  },
  components: {
    AddButton
  }
};
</script>
<style scoped>
.slider {
  border-bottom: 2px solid;
}
tr td {
  font-size: 14px;
}
</style>
