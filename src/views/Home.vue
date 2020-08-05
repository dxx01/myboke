<template>
  <div id="home">
    <Header />
  </div>
</template>

<script>
import Header from "@/views/header/index.vue";

export default {
  name: "Home",
  components: {
    Header
  }
};
</script>
<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
}
</style>
