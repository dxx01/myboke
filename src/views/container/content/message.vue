<template>
  <div id="message" v-title data-title="留言板">
    留言板
  </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#message {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
}
</style>
