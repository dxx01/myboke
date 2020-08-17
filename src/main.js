import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import VueAwesomeSwiper from "vue-awesome-swiper";

import "swiper/swiper-bundle.css";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.use(ElementUI, VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
