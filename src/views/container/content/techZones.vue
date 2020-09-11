<template>
  <div id="techZones" v-title data-title="技术专区">
    <Navigation />
    <div class="left"><Markdown /></div>
    <div class="right"></div>
  </div>
</template>

<script>
import Navigation from "@/components/navigation.vue"; //面包屑
import Markdown from "@/components/markdown.vue";
export default {
  name: "techZones",
  data() {
    return {};
  },
  components: {
    Navigation,
    Markdown
  }
};
</script>

<style lang="scss" scoped>
#techZones {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start; //设置换行没空隙
  .left {
    @include d-left;
    height: 500px;
    background: rgba(255, 255, 255, 0.5);
  }
  .right {
    @include d-right;
    height: 500px;
    background: rgba(255, 255, 255, 0.5);
  }
}
</style>
