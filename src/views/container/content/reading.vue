<template>
  <div id="reading">
    <Navigation />
    <div class="readbox">
      <div class="left"><Markdown /></div>
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
import Markdown from "@/components/markdown.vue";
import Ranking from "@/components/ranking.vue"; //排行模块
import TechnologyLabel from "@/components/technology_lable.vue"; // 标签模块

export default {
  name: "reading",
  data() {
    return {};
  },
  components: {
    Navigation,
    Markdown,
    Ranking,
    TechnologyLabel
  },
  created() {
    console.log(this.$route.params);
  }
};
</script>

<style lang="scss" scoped>
#reading {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  .readbox {
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
