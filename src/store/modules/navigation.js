export default {
  namespaced: true,
  state: {
    home: "shouye", //导航第一个默认首页
    two: null, // 导航第二个值
    three: null, //导航第三个值
    four: null, //导航第四个值
    navigationData: null
  },
  mutations: {
    setHome(state, val) {
      state.home = val;
    },
    setTwo(state, val) {
      state.two = val;
    },
    setThree(state, val) {
      state.three = val;
    },
    setFoure(state, val) {
      state.four = val;
    },
    setNavigationData(state, val) {
      let arr = val.split("/");
      let list = [];
      let str = "/home";
      for (let i = 2; i < arr.length; i++) {
        str += "/" + arr[i];
        list.push(str);
      }
      state.navigationData = list;
    }
  },
  actions: {
    setHome({ commit }, val) {
      commit("setHome", val);
    },
    setTwo({ commit }, val) {
      commit("setTwo", val);
    },
    setThree({ commit }, val) {
      commit("setThree", val);
    },
    setFoure({ commit }, val) {
      commit("setFoure", val);
    },
    setNavigationData({ commit }, val) {
      commit("setNavigationData", val);
    }
  }
};
