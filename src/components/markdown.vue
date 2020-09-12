<template>
  <div id="markdowndiv"><Markdown /></div>
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
  methods: {}
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
        }
      }
    }
    .markdown-editor {
      background: rgba(255, 255, 255, 0.1);
    }
    .markdown-preview {
      background: rgba(255, 255, 255, 0.1);
      div {
        background: rgba(255, 255, 255, 0.1);
        color: $my-color2;
      }
    }
  }
  .border {
    border: none;
  }
}
</style>
