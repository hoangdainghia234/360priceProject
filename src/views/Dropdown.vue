<template>
  <v-content>
    <!-- <TopComponent /> -->
    <Employee />
  </v-content>
</template>

<script>
/* import TopComponent from '../components/TopComponent'; */
import Employee from "../components/Employee";

export default {
  props: {
    source: String
  },

  components: {
    /* TopComponent */
    Employee
  },

  data: () => ({
    drawer: null
  })
};
</script>
