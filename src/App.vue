<template>
  <div id="app">
    <div
      class="big"
      :style="
        'background:url(' + url + ') no-repeat;background-size: 100% 100%;'
      "
    ></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  props: [""],
  data() {
    return { url: require("@/assets/imgs/big.jpg") };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6,
ul,
li,
a,
p {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: $my-color2;
}
ul,
li {
  list-style-type: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  min-width: 375px;
  .big {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    z-index: -1;
  }
}
</style>
