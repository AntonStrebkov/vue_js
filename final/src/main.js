import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import myStore from "./store";
import Vuex from "vuex";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
const store = new Vuex.Store(myStore);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
