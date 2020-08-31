<template>
  <div id="foot">
    <div class="footdiv">
      <div class="copyright">
        Copyright © dengxinxin.fun All Rights Reserved.
        备案号：赣ICP备2020010421号
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "foot",
  props: [""],
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style lang="scss" scoped>
#foot {
  width: 100%;
  height: 60px;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  .footdiv {
    margin: 0 auto;
    max-width: 1200px;
    height: 100%;
    display: flex;
    align-items: center; /*定义body的元素垂直居中*/
    justify-content: center; /*定义body的里的元素水平居中*/
    .copyright {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
