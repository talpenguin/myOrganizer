import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";
import FontAwesomeIcon from "./assets/fontAwesome/font-awesome-config";

Vue.component("fa-icon", FontAwesomeIcon);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
