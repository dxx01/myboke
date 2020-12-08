export default {
  namespaced: true,
  state: {
    active: "shouye", // 当前选中标题
    // 小屏模式下图标切换
    iconShow: true,
    //登录框显示和隐藏
    login_DialogVisible: false
  },
  // 其实就是set 不能再异步方法调用
  mutations: {
    // 切换模块
    setActive(state, val) {
      state.active = val;
    },
    //修改图标状态
    setIconShow(state, val) {
      state.iconShow = val;
    },
    // 切换登录框状态
    setLogin_DialogVisible(state, val) {
      state.login_DialogVisible = val;
    }
  },
  // 可以再异步方法调用 其实是对mutatons进行封装
  actions: {
    setActive({ commit }, val) {
      commit("setActive", val);
    },
    setLogin_DialogVisible({ commit }, val) {
      commit("setLogin_DialogVisible", val);
    }
  },
  getters: {
    getActive(state) {
      return state.active;
    }
  }
};
