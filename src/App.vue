<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "app",
  props: [""],
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    window.addEventListener("click", this.activeChange);
  },

  methods: {
    ...mapMutations("header", {
      setActive: "setActive"
    }),
    activeChange() {
      this.setActive(this.$route.name);
    }
  },

  watch: {}
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
ul,
li,
a {
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
}
</style>
