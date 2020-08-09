import Vue from "vue";
import Vuex from "vuex";
import header from "./modules/header";
import defaultContent from "./defaultContent";
Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    active: true
  },
  mutations: {
    change(state, val) {
      state.active = val;
    }
  },
  actions: {},
  modules: {
    header,
    defaultContent
  }
});
export default store;
