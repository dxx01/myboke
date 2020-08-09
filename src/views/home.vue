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
    if (document.body.clientWidth < 650) {
      this.$store.commit("change", false);
    } else {
      this.$store.commit("change", true);
    }
  },
  mounted() {
    window.onresize = () => {
      if (document.body.clientWidth < 650) {
        this.$store.commit("change", false);
      } else {
        this.$store.commit("change", true);
      }
    };
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
