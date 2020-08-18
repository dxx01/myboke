<template>
  <div id="shouye">
    <div class="left">
      <Carousel />
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import Carousel from "@/components/carousel.vue";
export default {
  name: "shouye",
  data() {
    return {};
  },
  components: {
    Carousel
  }
};
</script>

<style lang="scss" scoped>
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
