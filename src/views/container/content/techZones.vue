<template>
  <div id="techZones" v-title data-title="技术专区">
    <Navigation />
    <div class="zj">
      <div class="left"><Markdown /></div>
      <div class="right">
        <div class="right_div">
          <Ranking />
        </div>
        <div class="right_div">
          <TechnologyLabel />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/navigation.vue"; //面包屑
import Markdown from "@/components/markdown.vue"; //meditor
import Ranking from "@/components/ranking.vue"; //排行模块
import TechnologyLabel from "@/components/technology_lable.vue"; // 标签模块

export default {
  name: "techZones",
  data() {
    return {};
  },
  components: {
    Navigation,
    Markdown,
    Ranking,
    TechnologyLabel
  }
};
</script>

<style lang="scss" scoped>
#techZones {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  // align-content: flex-start; //设置换行没空隙
  height: 100%;
  .zj {
    display: flex;
    flex: 1;
    .left {
      @include d-left;
    }
    .right {
      @include d-right;
      .right_div {
        border-radius: 4px;
        width: 100%;
        margin-bottom: 20px;
        @media (max-width: 900px) {
          width: calc(50% - 10px);
        }
        @media (max-width: 500px) {
          width: 100%;
        }
      }
    }
  }
}
</style>
