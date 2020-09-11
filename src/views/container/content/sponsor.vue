<template>
  <div id="sponsor" v-title data-title="赞助">
    <mavon-editor v-html="html" style="padding:20px;" />
    <!-- <mavon-editor
      :value="html"
      :subfield="false"
      :defaultOpen="'preview'"
      :toolbarsFlag="false"
      :editable="false"
      :scrollStyle="true"
      :ishljs="true"
    ></mavon-editor> -->
    赞助
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { mapState } from "vuex";
export default {
  name: "sponsor",
  data() {
    return {};
  },
  components: {
    mavonEditor
  },
  computed: {
    ...mapState({
      html: state => state.html
    })
  }
};
</script>

<style lang="scss" scoped>
#sponsor {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
}
</style>
