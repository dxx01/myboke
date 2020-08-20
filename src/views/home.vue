<template>
  <div id="home">
    <div
      class="big"
      :style="
        'background:url(' + url + ') no-repeat;background-size: 100% 100%;'
      "
    ></div>
    <Header />
    <Notification />
    <Container />
  </div>
</template>

<script>
// 头部部分
import Header from "@/views/header/index.vue";
// 中间部分
import Container from "@/views/container/index.vue";
// 通知/公告
import Notification from "@/components/notification.vue";
import { mapMutations } from "vuex";
export default {
  name: "home",
  components: {
    Header,
    Container,
    Notification
  },
  data() {
    return {
      url: require("../assets/imgs/big.jpg")
    };
  },
  created() {
    // 初始化判断窗口大小
    if (document.body.clientWidth < 650) {
      this.$store.commit("change", false);
      this.setHeight(20);
    } else {
      this.$store.commit("change", true);
      this.defaultHeight();
    }
  },
  mounted() {
    // 判断窗口大小
    window.onresize = () => {
      if (document.body.clientWidth < 650) {
        this.$store.commit("change", false);
        //处理头部距离下面的高度
        this.setHeight(20);
        //初始化菜单图标
        this.setIconShow(true);
      } else {
        this.$store.commit("change", true);
        //大屏回复头部距离下面的高度
        this.defaultHeight();
      }
    };
  },
  methods: {
    ...mapMutations("header", {
      setHeight: "setHeight",
      defaultHeight: "defaultHeight",
      setIconShow: "setIconShow"
    })
  }
};
</script>
<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  .big {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    z-index: -1;
  }
}
</style>
