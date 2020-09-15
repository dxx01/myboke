<template>
  <div id="markdowndiv">
    <Markdown @on-save="handleOnSave" @on-copy="copy" :toolbars="toolbars" />
  </div>
</template>

<script>
import Markdown from "vue-meditor";

export default {
  name: "markdowndiv",
  data() {
    return {
      obj: "",
      toolbars: {
        h4: true,
        h5: true,
        h6: true,
        //clear: true,
        save: true
      }
    };
  },
  components: {
    Markdown
  },
  methods: {
    handleOnSave(obj) {
      alert(obj);
      console.log(obj);
      this.obj = obj;
    },
    copy(text) {
      console.log(text);
    }
  }
};
</script>

<style lang="scss">
#markdowndiv {
  width: 100%;
  height: 100%;
  position: relative;
  .markdown {
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    .markdown-toolbars {
      background: rgba(255, 255, 255, 0.1);
      flex-wrap: wrap;
      height: auto;
      li::after {
        background: #dcd5d580;
        color: $my-color2;
      }
    }
    .close-preview {
      background: rgba(255, 255, 255, 0.1);
    }
    .markdown-content {
      padding-top: 0px;
      background: rgba(255, 255, 255, 0.1) !important;
      .markdown-editor {
        background: rgba(255, 255, 255, 0.1);
        border-right: 1px solid #d9d9d9;
        ul {
          background: rgba(255, 255, 255, 0.5);
          li {
            background: #dcd5d550;
            color: $my-color2;
          }
        }
        textarea {
          background: rgba(255, 255, 255, 0.1);
          color: $my-color2;
          white-space: normal;
        }
      }
    }
    .markdown-editor {
      background: rgba(255, 255, 255, 0.1);
      height: auto;
    }
    .markdown-preview {
      background: rgba(255, 255, 255, 0.1);
      padding: 12px 8px !important;
      div {
        background: rgba(255, 255, 255, 0.1);
        color: $my-color2;
        padding: 0 !important;
      }
    }
  }
  .border {
    border: 1px solid #d9d9d9;
  }
}
</style>
