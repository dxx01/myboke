<!-- 个人简介 -->
<template>
  <div id="presentation">
    <div class="presentation_box">
      <div class="title">邓先生的简介</div>
      <div class="list">
        <p>职业：java开发工程师，前端开发工程师</p>
        <p>现居：广东省 广州市</p>
        <p>格言：我与我周旋久，宁做我！</p>
        <p>介绍：90后，从事it行业2年时间。</p>
      </div>
    </div>
    <div class="bottom_box">
      <div class="box box_border">
        <img :src="require('@/assets/imgs/presentation/qq.png')" />
      </div>
      <div class="box box_border">
        <img :src="require('@/assets/imgs/presentation/weixin.png')" />
      </div>
      <div class="box box_border">
        <img :src="require('@/assets/imgs/presentation/github.png')" />
      </div>
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "presentation",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#presentation {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  font-weight: 600;
  .presentation_box {
    width: calc(100% - 20px);
    padding: 10px;
    .title {
      font-size: 23px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .list {
      p {
        font-size: 14px;
      }
    }
  }
  .bottom_box {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 80px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: row;
    .box {
      width: 25%;
      height: 100%;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      cursor: pointer;
      text-align: center;
      line-height: 99px;
      img {
        width: 32px;
        height: 32px;
      }
    }
    .box_border {
      border-right: 1px solid rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
