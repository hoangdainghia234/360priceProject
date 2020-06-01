<template>
  <v-card>
    <v-list>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr v-for="header in headers" :key="header.name">
              <td class="text-right">{{ header.name }}</td>
              <td class="text-right">{{ header.explaination }}</td>
              <td>
                <div class="text-center pa-5">
                  <v-btn
                    color="primary"
                    fab
                    small
                    dark
                    class="mr-8"
                    v-for="ratin in header.rating"
                    :key="ratin.rating_point"
                  >
                    <span class="subtitle-2">
                      {{ ratin.rating_point }}
                    </span>
                  </v-btn>
                </div>
              </td>
              <td>
                <v-btn text>
                  <v-icon>
                    mdi-pencil-box-outline
                  </v-icon>
                </v-btn>
                <v-btn text>
                  <v-icon @click="deleteItem(header.id)">
                    mdi-delete
                  </v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
          <AddButton class="float-left mt-8" />
        </template>
      </v-simple-table>
    </v-list>
  </v-card>
</template>
<script>
import AddButton from "../components/AddButton";
export default {
  data() {
    return {
      name: "sample main point",
      dialog: false
    };
  },
  props: {
    headers: Array
  },
  components: {
    AddButton
  },
  methods: {
    deleteItem(id) {
      this.$emit("deleteCategory", id);
    }
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
