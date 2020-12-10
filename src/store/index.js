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
    token: localStorage.getItem("token") ? localStorage.getItem("token") : ""
  },
  mutations: {
    change(state, val) {
      state.active = val;
    },
    setToken(state, val) {
      state.token = val;
      //存入localStorage
      localStorage.setItem("token", val);
    },
    removeToken(state) {
      state.token = "";
      localStorage.removeItem("token");
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
