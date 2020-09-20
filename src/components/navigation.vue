<!-- 面包屑 -->
<template>
  <div id="navigation">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="navigationdiv">
      <el-breadcrumb-item :to="{ path: '/home/shouye' }"
        >首页</el-breadcrumb-item
      >
      <el-breadcrumb-item
        v-for="(item, index) in navigationData"
        :key="index"
        :to="item"
        >活动管理</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "m_navigation",
  data() {
    return {};
  },
  methods: {
    ...mapMutations("navigation", {
      setNavigationData: "setNavigationData"
    })
  },
  created() {
    this.setNavigationData(this.$route.path);
  },
  watch: {
    $route(newData) {
      console.log(newData);
      this.setNavigationData(newData.path);
    }
  },
  mounted() {},
  computed: {
    ...mapState("header", {
      active: state => state.active
    }),
    ...mapState("navigation", {
      navigationData: state => state.navigationData
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
    .el-breadcrumb__inner {
      color: $my-color2;
      font-weight: 600 !important ;
    }
    .el-breadcrumb__inner:hover {
      color: $my-color;
      cursor: pointer;
    }
  }
}
</style>
<style lang="scss" scoped>
#navigation {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  background: $my-background;
  line-height: 40px;
  border-radius: 4px;
  .navigationdiv {
    height: 100%;
    line-height: 40px;
    margin: 0 20px;
  }
}
</style>
