<template>
  <div id="navigation">
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      style="    height: 100%;
    line-height: 40px;
    margin-left: 20px;"
    >
      <el-breadcrumb-item :to="{ path: '/home/shouye' }"
        >首页</el-breadcrumb-item
      >
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "navigation",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  computed: {
    ...mapState("header", {
      active: state => state.active
    }),
    ...mapState("navigation", {
      home: state => state.home,
      two: state => state.two,
      three: state => state.three
    })
  }
};
</script>

<style lang="scss" scoped>
#navigation {
  width: 100%;
  height: 40px;
  background: $my-background;
  line-height: 40px;
  border-radius: 4px;
}
</style>
