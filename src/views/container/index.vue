<template>
  <div id="container" :style="'padding-top:' + height + 'px'">
    <component :is="active"></component>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 首页
import shouye from "@/views/container/content/shouye.vue";
// 技术专区
import techZones from "@/views/container/content/techZones.vue";
// 爱生活
import live from "@/views/container/content/live.vue";
// 留言板
import message from "@/views/container/content/message.vue";
// 赞助
import sponsor from "@/views/container/content/sponsor.vue";
// 关于我
import about from "@/views/container/content/about.vue";
export default {
  name: "container",
  data() {
    return {};
  },
  components: {
    shouye,
    techZones,
    live,
    message,
    sponsor,
    about
  },
  created() {},
  computed: {
    ...mapState("header", {
      height: state => state.height,
      active: state => state.active
    })
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
}
</style>
