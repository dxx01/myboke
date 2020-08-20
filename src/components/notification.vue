<!-- gssp插件模块 -->
<template>
  <div id="notification" v-show="active">
    <div class="moveBox">
      <div id="notification_move">
        <span id="notification_content">{{ contents[active_content] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
//import { TweenLite, TimelineLite } from "gsap";
import { gsap, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";
import { mapState } from "vuex";
export default {
  name: "notification",
  props: [""],
  data() {
    return {
      contents: this.$store.state.defaultContent.contents,
      active_content: 0,
      x: 0,
      // gsap
      t1: null,
      time: 10
    };
  },
  created() {},
  components: {},

  computed: {
    ...mapState({
      active: "active"
    })
  },

  beforeMount() {},

  mounted() {
    this.getX();
  },

  methods: {
    //gsap动画方法
    initGsap() {
      gsap.registerPlugin(ScrollToPlugin, Draggable, MotionPathPlugin);
      this.t1 = gsap.timeline();
      this.t1.to("#notification_move", this.time, {
        x: this.x,
        repeat: 1,
        yoyo: true,
        yoyoEase: true,
        onComplete: () => {
          this.active_content++;
          if (this.active_content > this.contents.length - 1) {
            this.active_content = 0;
          }
        }
      });
    },
    // 获取x动态值
    getX() {
      if (document.body.clientWidth > 650) {
        setTimeout(() => {
          this.x =
            document.getElementById("notification_move").offsetWidth -
            document.getElementById("notification_content").offsetWidth;
          this.initGsap();
        }, 1000);
      }
    }
  },

  watch: {
    // 监听是否位小屏
    active(newData) {
      if (this.t1) {
        if (newData) this.t1.play();
        else this.t1.pause();
      }
    },
    //监听是否执行下一条
    active_content(newData, oldData) {
      if (this.t1) {
        if (newData !== oldData) this.getX();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#notification {
  position: absolute;
  width: 100%;
  height: 20px;
  top: 60px;
  line-height: 20px;
  .moveBox {
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    #notification_move {
      position: relative;
      top: 0;
      left: 0;
      white-space: nowrap;
      #notification_content {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        font-size: 13px;
        vertical-align: middle;
        font-weight: normal;
        color: #000000;
      }
    }
  }
}
</style>
