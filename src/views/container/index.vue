<template>
  <div id="container">
    <component :is="active"></component>
  </div>
</template>

<script>
import shouye from "@/views/container/content/shouye.vue";
export default {
  name: "container",
  data() {
    return {
      active: this.$store.state.header.active
    };
  },
  components: {
    shouye
  }
};
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  padding-top: 80px;
}
</style>
