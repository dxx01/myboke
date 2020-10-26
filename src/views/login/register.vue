<!-- 注册模块 -->
<template>
  <div class="register">
    <el-form
      :model="registerForm"
      status-icon
      :rules="rules"
      ref="registerForm"
      label-width="100px"
      class="register-from"
      label-position="top"
    >
      <el-form-item prop="phone">
        <el-input
          type="phone"
          v-model="registerForm.phone"
          placeholder="手机号码"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <!-- <el-form-item prop="yzm">
        <el-input
          v-model="registerForm.yzm"
          style="width:35%"
          placeholder="验证码"
          autocomplete="off"
        ></el-input>
      </el-form-item> -->
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="registerForm.password"
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          size="small"
          style="width:100%;margin-top: 12px;"
          @click="submitForm('registerForm')"
          >注册</el-button
        >
      </el-form-item>
    </el-form>
    <!-- <el-button class="yzmbox" :disabled="disabled" @click.prevent="getYzm()">{{
      disabled ? timer : yzmText
    }}</el-button> -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
//校验文件
import regular from "@/tool/regular.js";
import { Api_register } from "@/api/login/index.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      yzmText: "获取验证码",
      //定时默认
      timer: 120,
      start: null,
      disabled: false,
      registerForm: {
        phone: "",
        // yzm: "",
        password: ""
      },
      rules: {
        phone: [{ validator: regular.validatePhone, trigger: "blur" }],
        // yzm: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        password: [{ validator: regular.validatePassword, trigger: "blur" }]
      }
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getYzm() {
      this.disabled = true;
      this.time120();
      console.log("验证码");
    },
    time120() {
      this.start = setInterval(() => {
        this.timer--;
        if (this.timer <= 0) {
          clearInterval(this.start);
          this.timer = 120;
          this.disabled = false;
        }
      }, 1000);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          Api_register(this.registerForm).then(res => {
            console.log(res);
          });
        } else {
          console.log("error submit!!");
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
.register {
  min-width: 240px;
  width: 100%;
  margin: auto;
  position: relative;
  .yzmbox {
    position: absolute;
    width: 112px;
    right: 0;
    top: 60px;
  }
}
</style>
