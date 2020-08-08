<template>
  <div id="home">
    <div
      class="big"
      :style="
        'background:url(' + url + ') no-repeat;background-size: 100% 100%;'
      "
    ></div>
    <Header />
    <Container />
  </div>
</template>

<script>
import Header from "@/views/header/index.vue";
import Container from "@/views/container/index.vue";

export default {
  name: "home",
  components: {
    Header,
    Container
  },
  data() {
    return {
      url: require("../assets/imgs/big.jpg")
    };
  }
};
</script>
<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  .big {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    opacity: 0.5;
  }
}
</style>
