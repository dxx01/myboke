<template>
  <div id="markdowndiv">
    <Markdown initialValue="请编辑您的内容" @on-save="handleOnSave" />
  </div>
</template>

<script>
import Markdown from "vue-meditor";

export default {
  name: "markdowndiv",
  data() {
    return {
      value: ""
    };
  },
  components: {
    Markdown
  },
  methods: {
    handleOnSave({ value, theme }) {
      console.log(value, theme);
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
      li::after {
        background: #dcd5d580;
        color: $my-color2;
      }
    }
    .close-preview {
      background: rgba(255, 255, 255, 0.1);
    }
    .markdown-content {
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
    border: none;
  }
}
</style>
