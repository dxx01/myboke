import Vue from "vue";
import Vuex from "vuex";
import header from "./modules/header";
import defaultContent from "./defaultContent";
import navigation from "./modules/navigation";
Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    active: true // 窗口大小，超过650?true:false
  },
  mutations: {
    change(state, val) {
      state.active = val;
    }
  },
  actions: {},
  modules: {
    header,
    defaultContent,
    navigation
  }
});
export default store;
