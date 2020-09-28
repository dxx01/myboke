<template>
  <div class="templatediv">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "templatediv"
};
</script>

<style lang="scss" scoped>
.templatediv {
  background: #c4cbce;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
