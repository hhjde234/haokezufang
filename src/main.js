import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vant from "@/plugin/vant.js";
import store from "./store/index.js";
import "amfe-flexible";

Vue.config.productionTip = false;
Vue.use(vant);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
