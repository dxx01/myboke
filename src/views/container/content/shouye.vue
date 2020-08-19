<template>
  <div id="shouye">
    <div class="left">
      <!-- 轮播 -->
      <div class="sy_img">
        <el-carousel indicator-position="none">
          <el-carousel-item v-for="item in imgNum" :key="item">
            <el-image
              fit="cover"
              style="width: 100%; height: 100%"
              :src="require('@/assets/imgs/lunbo/' + item + '.jpg')"
            />
          </el-carousel-item>
        </el-carousel>
        <!-- 图片配文 -->
        <div class="sy-font">我与我周旋久，宁做我！</div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "shouye",
  data() {
    return {
      imgNum: 6
    };
  }
};
</script>

<style lang="scss" scoped>
//外部样式字体文件
@font-face {
  font-family: lunbo-font;
  src: url("~@/assets/font/lunbo-font.ttf");
  font-weight: bold;
}
#shouye {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  .left {
    width: calc(70% - 20px);
    height: 300px;
    background: red;
    @media (max-width: 900px) {
      width: 100%;
    }

    .sy_img {
      position: relative;
      width: 100%;
      height: 300px;

      .sy-font {
        font-family: lunbo-font;
        position: absolute;
        z-index: 2;
        bottom: 10px;
        left: 20px;
        font-size: 30px;
        color: #5b81fe;
      }
    }
  }
  .right {
    width: 30%;
    height: 300px;
    background: black;
    @media (max-width: 900px) {
      display: none;
    }
  }
}
</style>
