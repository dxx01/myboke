<!-- 登录模块 -->
<template>
  <div class="login">
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="login-from"
      label-position="top"
    >
      <el-form-item prop="phone">
        <el-input
          type="phone"
          v-model="loginForm.phone"
          placeholder="手机号码"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          size="small"
          style="width:100%;margin-top: 12px;"
          @click="submitForm('loginForm')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
    <div class="forget-text">忘记密码</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
//校验文件
import qs from "qs";
import { Api_login } from "@/api/login/index.js";
import { mapState, mapMutations } from "vuex";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      loginForm: {
        phone: "",
        password: ""
      },
      rules: {
        phone: [{ required: true, message: "密码不能为空", trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  //监听属性 类似于data概念
  computed: {
    ...mapState({
      token: state => state.token,
      active: state => state.active
    })
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    ...mapMutations("header", {
      setLogin_DialogVisible: "setLogin_DialogVisible"
    }),
    ...mapMutations({
      setToken: "setToken"
    }),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          Api_login(qs.stringify(this.loginForm)).then(res => {
            if (res.code === "200") {
              this.setToken(res.data);
              //获取荷载值
              var jwt = require("jsonwebtoken");
              let obj = jwt.decode(res.data);
              this.$store.commit("login/setPhone", obj.sub);
              if (this.active) {
                this.setLogin_DialogVisible(false);
              } else {
                this.$router.push({ name: "home" });
              }
            } else {
              console.log(res);
              this.$message.error(res.msg);
            }
          });
          // 移除表单内容
          //this.$refs["loginForm"].resetFields();
        } else {
          return false;
        }
      });
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
.login {
  min-width: 240px;
  width: 100%;
  margin: auto;
  position: relative;
  .forget-text {
    position: absolute;
    font-size: 12px;
    cursor: pointer;
    top: 110px;
    right: 0px;
  }
  .forget-text:hover {
    color: #409eff;
  }
}
</style>
