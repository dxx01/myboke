<template>
  <div id="notification">
    <div class="moveBox">
      <div class="move">
        <span>岁不寒,无以知松柏；事不难,无以知君子.－－《荀子·大略》</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notification",
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
    .move {
      position: relative;
      top: 0;
      left: 0;
      animation: moveText 20s infinite;
      white-space: nowrap;
      .span {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        font-size: 13px;
        vertical-align: middle;
        font-weight: normal;
        color: #999999;
      }
    }
    @keyframes moveText {
      from {
        left: 0;
      }
      to {
        left: 100%;
      }
    }
  }
}
</style>
