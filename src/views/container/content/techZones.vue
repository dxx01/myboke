<template>
  <div id="techZones" v-title data-title="技术专区">
    <Navigation />
    <div class="zj">
      <div class="left">
        <!-- <Markdown /> -->
        <Artucle></Artucle>
      </div>
      <div class="right">
        <div class="rightbox">
          <div class="right_div">
            <Ranking />
          </div>
          <div class="right_div">
            <TechnologyLabel />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/navigation.vue"; //面包屑
import Ranking from "@/components/ranking.vue"; //排行模块
import TechnologyLabel from "@/components/technology_lable.vue"; // 标签模块
import Artucle from "@/components/artucle.vue"; //文章模块
export default {
  name: "techZones",
  data() {
    return {};
  },
  components: {
    Navigation,
    Ranking,
    TechnologyLabel,
    Artucle
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
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .left {
      @include d-left;
    }
    .right {
      @include d-right;
      @media (max-width: 900px) {
        margin-top: 0;
      }
      .rightbox {
        width: 100%;
        position: sticky; //滚动特殊定位
        top: 80px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-content: flex-start; //设置换行没空隙
        .right_div {
          border-radius: 4px;
          width: 100%;
          margin-bottom: 20px;

          @media (max-width: 900px) {
            width: calc(50% - 10px);
            margin-top: 0;
          }
          @media (max-width: 500px) {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
