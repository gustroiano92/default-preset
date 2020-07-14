import Vue from "vue";
import Vuetify from "vuetify";
import colors from "vuetify/es5/util/colors";
import "vuetify/dist/vuetify.min.css";

import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);


export default new Vuetify({
    icons: {
      iconfont: 'mdi',
    },
    theme: {
      dark: true,
    },
    themes: {
      light: {
        primary: colors.red.darken1,
        secondary: colors.red.lighten4,
        accent: colors.red.darken1
      },
    },
  })