export default {
  namespaced: true,
  state: {
    // 登录、注册页面切换默认登录
    comName: "Login",
    phone: null
  },
  mutations: {
    setComName(state, val) {
      state.comName = val;
    },
    setPhone(state, val) {
      state.phone = val;
    }
  },
  actions: {},
  getters: {}
};
