<template>
  <div id="live" v-title data-title="爱生活">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "live"
};
</script>

<style lang="scss" scoped>
#live {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  .left {
    @include d-left;
    background: rgba(255, 255, 255, 0.5);
  }
  .right {
    @include d-right;
    background: rgba(255, 255, 255, 0.5);
  }
}
</style>
