<template>
  <div id="navigation">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="navigationdiv">
      <el-breadcrumb-item :to="{ path: '/home/shouye' }"
        >首页</el-breadcrumb-item
      >
      <el-breadcrumb-item :to="{ path: '/home/shouye' }"
        >活动管理</el-breadcrumb-item
      >
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

<style lang="scss">
.navigationdiv {
  .el-breadcrumb__item {
    .el-breadcrumb__separator {
      color: $my-color2;
      font-weight: 600 !important ;
    }
    .el-breadcrumb__inner:hover {
      color: $my-color;
    }
  }
}
</style>
<style lang="scss" scoped>
#navigation {
  width: 100%;
  height: 40px;
  background: $my-background;
  line-height: 40px;
  border-radius: 4px;
  .navigationdiv {
    height: 100%;
    line-height: 40px;
    margin: 0 20px;
    span {
      color: $my-color2;
    }
    span:hover {
      color: $my-color;
    }
  }
}
</style>
