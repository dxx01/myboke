<template>
  <div id="container" :style="'padding-top:' + height + 'px'">
    <component :is="active"></component>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
  },
  created() {},
  computed: {
    ...mapState("header", { height: state => state.height })
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
}
</style>
