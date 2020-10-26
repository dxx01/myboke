import Vue from "vue";
import Vuex from "vuex";
import header from "./modules/header";
import defaultContent from "./defaultContent";
import navigation from "./modules/navigation";
import meditor from "./modules/meditor";
import login from "./modules/login.js";
Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    active: true, // 窗口大小，超过650?true:false
    token: null
  },
  mutations: {
    change(state, val) {
      state.active = val;
    },
    setToken(state, val) {
      state.token = val;
    }
  },
  actions: {},
  modules: {
    header,
    defaultContent,
    navigation,
    meditor,
    login
  }
});
export default store;
