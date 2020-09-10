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
    <Foot />
  </div>
</template>

<script>
// 头部部分
import Header from "@/views/header/index.vue";
// 中间部分
import Container from "@/views/container/index.vue";
// 底部
import Foot from "@/views/foot/index.vue";
// 通知/公告
import Notification from "@/components/notification.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "home",
  components: {
    Header,
    Container,
    Notification,
    Foot
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
    } else {
      this.$store.commit("change", true);
    }
  },
  mounted() {
    // 判断窗口大小
    window.onresize = () => {
      if (document.body.clientWidth < 650) {
        this.$store.commit("change", false);
        if (this.$store.state.header.iconShow)
          document.getElementById("container").style.paddingTop = "20px";
        else document.getElementById("container").style.paddingTop = "306px";
      } else {
        this.$store.commit("change", true);
        document.getElementById("container").style.paddingTop = "20px";
      }
    };
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(newData) {
      this.setActive(newData.name);
    },
    iconShow(newData) {
      if (newData) {
        document.getElementById("container").style.paddingTop = "20px";
      } else {
        document.getElementById("container").style.paddingTop = "306px";
      }
    }
  },
  computed: {
    ...mapState("header", {
      iconShow: state => state.iconShow
    })
  },
  methods: {
    ...mapMutations("header", {
      setActive: "setActive"
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
