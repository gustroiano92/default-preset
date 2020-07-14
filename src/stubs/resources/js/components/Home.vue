<template>
  <v-container fluid
               grid-list-md>

        <h1>Home</h1>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      items: []
    };
  },
  computed: {
    ...mapGetters("auth", ["user"]),
  },
  methods: {

  },

  created() {

  }
};
</script>
