export default {
  //namespaced: true,
  state: {
    active: "shouye"
  },
  // 其实就是set 不能再异步方法调用
  mutatons: {
    // 切换模块
    setActive(state, val) {
      state.active = val;
    }
  },
  // 可以再异步方法调用 其实是对mutatons进行封装
  actions: {
    setActive({ commit }, val) {
      commit("setActive", val);
    }
  },
  getters: {}
};
