import Vue from "vue";
import Vuex from "vuex";
import header from "./modules/header";
Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    height: 80
  },
  mutations: {
    // 小屏模式下下拉框的长度
    setHeight(state, val) {
      state.height += val;
    }
  },
  actions: {
    setHeight({ commit }, val) {
      commit("setHeight", val);
    }
  },
  modules: {
    header
  }
});
export default store;
