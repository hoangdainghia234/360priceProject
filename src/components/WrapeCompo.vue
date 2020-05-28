<template>
  <v-card>
    <v-list>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr v-for="header in headers" :key="header.id">
              <td class="text-right">{{ header.name }}</td>
              <td class="text-right">{{ header.project }}</td>
              <td>
                <div class="text-center pa-5">
                  <v-btn color="primary" fab small dark class="mr-8">
                    <span class="subtitle-2">{{ header.numberOne }}</span>
                  </v-btn>
                  <v-btn color="primary" fab small dark class="mr-8">
                    <span class="subtitle-2">{{ header.numberTwo }}</span>
                  </v-btn>
                  <v-btn color="primary" fab small dark class="mr-8">
                    <span class="subtitle-2">{{ header.numberThree }}</span>
                  </v-btn>
                  <v-btn color="primary" fab small dark class="mr-8">
                    <span class="subtitle-2">{{ header.numberFour }}</span>
                  </v-btn>
                  <v-btn color="primary" fab small dark class="mr-8">
                    <span class="subtitle-2">{{ header.numberFire }}</span>
                  </v-btn>
                  <v-btn color="primary" fab small dark>
                    <span class="subtitle-2">{{ header.check }}</span>
                  </v-btn>
                </div>
              </td>
              <td>
                <v-btn text><v-icon> mdi-pencil-box-outline</v-icon></v-btn>
                <v-btn text><v-icon>mdi-delete</v-icon></v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <AddButton class="float-left mt-8" />
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
