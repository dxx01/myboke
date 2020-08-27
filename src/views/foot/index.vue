<template>
  <div id="foot">
    <div class="footdiv">
      <div class="copyright">
        Copyright © dengxinxin.fun All Rights Reserved.
        备案号：晋ICP备19007319号
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
    .copyright {
      text-align: center;
      line-height: 60px;
    }
  }
}
</style>
