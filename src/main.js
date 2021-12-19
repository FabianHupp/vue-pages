import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import VCalendar from "v-calendar";
Vue.use(VCalendar);

Vue.config.productionTip = false;

import SequentialEntrance from "vue-sequential-entrance";
import "vue-sequential-entrance/vue-sequential-entrance.css";

import $ from "jquery";

Vue.use(SequentialEntrance);

new Vue({
  router,
  store,
  $,
  render: (h) => h(App),
}).$mount("#app");
