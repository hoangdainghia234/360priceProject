<template>
  <div class="">
    <v-content>
      <v-container fluid>
        <Employee />
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Employee from "../Employee";

export default {
  name: "createRelationship",
  components: {
    Employee
  }
};
</script>
