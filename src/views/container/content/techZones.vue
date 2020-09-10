<template>
  <div id="techZones" v-title data-title="技术专区">
    <Navigation />
  </div>
</template>

<script>
import Navigation from "@/components/navigation.vue";
export default {
  name: "techZones",
  data() {
    return {};
  },
  components: {
    Navigation
  }
};
</script>

<style lang="scss" scoped>
#techZones {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
}
</style>
