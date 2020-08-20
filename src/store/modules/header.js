export default {
  namespaced: true,
  state: {
    active: "shouye", // 当前选中标题
    height: 80, //中间内容距离顶部距离
    // 小屏模式下图标切换
    iconShow: true
  },
  // 其实就是set 不能再异步方法调用
  mutations: {
    // 切换模块
    setActive(state, val) {
      state.active = val;
    },
    // 小屏模式下下拉框的长度
    setHeight(state, val) {
      state.height = val;
    },
    // 初始化高度
    defaultHeight(state) {
      state.height = 80;
    },
    //修改图标状态
    setIconShow(state, val) {
      state.iconShow = val;
    }
  },
  // 可以再异步方法调用 其实是对mutatons进行封装
  actions: {
    setActive({ commit }, val) {
      commit("setActive", val);
    },
    setHeight({ commit }, val) {
      commit("setHeight", val);
    }
  },
  getters: {
    getActive(state) {
      return state.active;
    }
  }
};
