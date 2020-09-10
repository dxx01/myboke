export default {
  state: {
    home: "shouye", //导航第一个默认首页
    two: null, // 导航第二个值
    three: null, //导航第三个值
    four: null //导航第四个值
  },
  mutatons: {
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
    }
  }
};
