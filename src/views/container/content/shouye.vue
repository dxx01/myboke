<template>
  <div id="shouye" v-title data-title="首页">
    <div class="left">
      <!-- 轮播 -->
      <div class="sy_img">
        <el-carousel
          indicator-position="none"
          :height="active ? '300px' : '150px'"
        >
          <el-carousel-item
            v-for="item in imgNum"
            :key="item"
            style="height:100%"
          >
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
      <!-- 文章模块 -->
      <div class="sy_artucle">
        <Artucle></Artucle>
      </div>
      <!-- 分页模块-->
      <div style="width:100%;">
        <Paging></Paging>
      </div>
    </div>
    <div class="right">
      <div class="right_div1">
        <Presentation></Presentation>
      </div>
    </div>
  </div>
</template>

<script>
import Artucle from "@/components/artucle.vue"; //文章模块
import Presentation from "@/components/presentation.vue"; //个人简介模块
import Paging from "@/components/paging.vue";
import { mapState } from "vuex";
export default {
  name: "shouye",
  data() {
    return {
      imgNum: 5
    };
  },
  components: {
    Artucle,
    Presentation,
    Paging
  },
  computed: {
    ...mapState({
      active: state => state.active
    })
  }
};
</script>

<style lang="scss" scoped>
.el-carousel__container {
  height: 100%;
}
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
    @media (max-width: 900px) {
      width: 100%;
    }
    .sy_img {
      position: relative;
      width: 100%;
      height: 300px;
      @media (max-width: 650px) {
        height: 150px;
      }
      .sy-font {
        font-family: lunbo-font;
        position: absolute;
        z-index: 2;
        bottom: 10px;
        left: 20px;
        font-size: 30px;
        color: #5b81fe;
        @media (max-width: 650px) {
          font-size: 20px;
        }
      }
    }
    .sy_artucle {
      width: 100%;
      margin-top: 20px;
    }
  }
  .right {
    width: 30%;
    @media (max-width: 900px) {
      display: none;
    }
    .right_div1 {
      width: 100%;
      height: 300px;
    }
  }
}
</style>
