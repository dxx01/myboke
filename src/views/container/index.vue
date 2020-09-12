<template>
  <div id="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "container",
  data() {
    return {};
  },
  created() {},
  watch: {}
};
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  padding-top: 80px;
  position: relative;
  @media (max-width: 650px) {
    padding-top: 20px;
  }
}
</style>
