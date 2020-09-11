import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import Router from "vue-router";
import "element-ui/lib/theme-chalk/index.css";

// https://github.com/hinesboy/mavonEditor/blob/master/README.md
// import mavonEditor from "mavon-editor";
// import "mavon-editor/dist/css/index.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
// Vue.use(mavonEditor);

//全局指令
Vue.directive("title", {
  inserted: function(el) {
    document.title = el.dataset.title;
  }
});
//解决点击同页面路由访问报错的问题
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
