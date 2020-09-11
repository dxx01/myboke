<template>
  <div id="markdown">
    <mavon-editor @save="save" v-model="value" :ishljs="true" />
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { mapMutations } from "vuex";
export default {
  name: "markdowndiv",
  data() {
    return {
      value: ""
    };
  },
  components: {
    mavonEditor
  },
  methods: {
    ...mapMutations({
      setHtml: "setHtml"
    }),
    save(value, render) {
      console.log(value);
      console.log(render);
      this.setHtml(render);
    }
  }
};
</script>

<style lang="scss" scoped>
#markdown {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
