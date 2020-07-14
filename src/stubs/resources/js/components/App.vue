<template>
  <v-app>
  <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="user.picture"
               :alt="user.name"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">{{user.name}}</v-list-item-title>
            <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    <v-list dense>
        <v-list-item to="/customers">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Clientes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/contracts">
          <v-list-item-action>
            <v-icon>mdi-file-document-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contratos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/statistic">
          <v-list-item-action>
            <v-icon>mdi-chart-bar</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Balanço</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-navigation-drawer>

  <v-app-bar app 
      color="grey darken-3"
  
      clipped-left>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <span class="title ml-3 mr-5">
      <v-icon>mdi-finance</v-icon>
       Cash4<span class="font-weight-light">you</span></span>
     

      <v-spacer></v-spacer>

      
    <!-- -->
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-content>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view :key="$route.fullPath">


      </router-view>
    </v-container>
  </v-content>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      drawer: true
    };
  },

  computed: {
    ...mapGetters("auth", ["user", "logged", "token"]),
  },

  methods: {
    ...mapActions("auth", ["getUser", "logout"]),

    exit() {
      this.logout().then(res => {
        this.$router.push({ name: "Login" });
      });
    },


  },
  created() {
    if (this.logged) {
      this.getUser();
    }
  }
};
</script>

