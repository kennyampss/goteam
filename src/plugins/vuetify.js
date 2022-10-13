import Vue from 'vue'
import Vuetify from 'vuetify'
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import "@mdi/font/css/materialdesignicons.css"

Vue.use(Vuetify)

const myTheme = {
  themes: {
    light: {
      primary: "#2F385B",
      secondary: "#578f51",
      link: "#1a73e8",
    },
  },
};

const opts = {
  theme: myTheme,
  icons: {
    iconfont: "md" || "mdi",
  },
};


export default new Vuetify(opts);