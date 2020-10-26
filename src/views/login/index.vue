<!-- 登陆注册主页 -->
<template>
  <div class="login-home">
    <div class="login-homebox">
      <div class="top">
        <div
          class="left"
          :class="isChoose ? 'isChoose' : ''"
          @click="choose('Login')"
        >
          登录
        </div>
        <div
          class="right"
          :class="!isChoose ? 'isChoose' : ''"
          @click="choose('Register')"
        >
          注册
        </div>
      </div>
      <component :is="this.$store.state.login.comName"></component>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Login from "@/views/login/login.vue";
import Register from "@/views/login/register.vue";
import Forget from "@/views/login/forget.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Login,
    Register,
    Forget
  },
  data() {
    //这里存放数据
    return {
      comName: "Login",
      isChoose: true
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    choose(name) {
      if (name === "Login") {
        this.isChoose = true;
      } else {
        this.isChoose = false;
      }
      this.$store.commit("login/setComName", name);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.login-home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-homebox {
    padding: 20px 40px;
    background: rgba(255, 255, 255, 0.5);
    .top {
      display: flex;
      flex-direction: row;
      margin-bottom: 10px;
      line-height: 30px;
      width: 240px;
      cursor: pointer;
      .left {
        flex: 1;
        text-align: center;
      }
      .left:hover {
        color: #409eff;
      }
      .right {
        flex: 1;
        text-align: center;
      }
      .right:hover {
        color: #409eff;
      }
      .isChoose {
        border-bottom: 2px solid #409eff;
      }
    }
  }
}
</style>
