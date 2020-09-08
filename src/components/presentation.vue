<!-- 个人简介 -->
<template>
  <div id="presentation">
    <slot>
      <div class="presentation_box">
        <div class="title">邓先生的简介</div>
        <div class="list">
          <p>职业：java开发工程师，前端开发工程师</p>
          <p>现居：广东省 广州市</p>
          <p>格言：我与我周旋久，宁做我！</p>
          <p>介绍：90后，从事it行业2年时间</p>
        </div>
      </div>
      <div class="bottom_box">
        <div class="box box_border" @click="changeqq(!qq)">
          <transition name="el-zoom-in-top">
            <img
              title="点击添加QQ"
              v-if="qq"
              :src="require('@/assets/imgs/presentation/qq.png')"
            />
          </transition>
          <transition name="el-zoom-in-bottom">
            <img
              style="width:100%;height:100%;position: absolute;left:0;"
              v-if="!qq"
              :src="require('@/assets/imgs/presentation/qq2.jpg')"
            />
          </transition>
        </div>
        <div class="box box_border" @click="changeweixin(!weixin)">
          <transition name="el-zoom-in-top">
            <img
              title="点击添加微信"
              v-if="weixin"
              :src="require('@/assets/imgs/presentation/weixin.png')"
            />
          </transition>
          <transition name="el-zoom-in-bottom">
            <img
              style="width:100%;height:100%;position: absolute;left:0;"
              v-if="!weixin"
              :src="require('@/assets/imgs/presentation/weixin2.jpg')"
            />
          </transition>
        </div>
        <div class="box box_border">
          <a
            target="_blank"
            href="https://github.com/dxx01/myboke"
            title="去往github"
          >
            <img :src="require('@/assets/imgs/presentation/github.png')"
          /></a>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "presentation",
  data() {
    return {
      qq: true,
      weixin: true
    };
  },
  methods: {
    changeqq(val) {
      this.qq = val;
    },
    changeweixin(val) {
      this.weixin = val;
    }
  }
};
</script>

<style lang="scss" scoped>
#presentation {
  @include d_div;
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
      width: 33.33%;
      height: 100%;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      cursor: pointer;
      text-align: center;
      line-height: 99px;
      position: relative;
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
