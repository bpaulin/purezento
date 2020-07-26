import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { firestorePlugin } from "vuefire";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(firestorePlugin);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
