<template>
  <div id="notification" v-show="this.$store.state.active">
    <div class="moveBox">
      <div id="notification_move">
        <span id="notification_content">{{ contents[active] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
export default {
  name: "notification",
  props: [""],
  data() {
    return {
      contents: this.$store.state.defaultContent.contents,
      active: 0,
      x: 0,
      // gsap
      t1: null,
      time: 10
    };
  },
  created() {},
  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    this.getX();
  },

  methods: {
    //gsap动画方法
    initGsap() {
      this.t1 = new TimelineMax();
      this.t1.to("#notification_move", this.time, {
        x: this.x,
        repeat: 1,
        yoyo: true,
        yoyoEase: true,
        onComplete: () => {
          this.active++;
          if (this.active > this.contents.length - 1) {
            this.active = 0;
          }
        }
      });
    },
    // 获取x动态值
    getX() {
      this.x =
        document.getElementById("notification_move").offsetWidth -
        document.getElementById("notification_content").offsetWidth;
      this.initGsap();
    }
  },

  watch: {
    active(newData, oldData) {
      console.log(newData);
      if (newData !== oldData) {
        setTimeout(this.getX);
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
