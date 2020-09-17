<template>
  <div id="fabu">
    <div class="left">
      <Markdown
        :value="obj"
        ref="md"
        @on-save="save"
        autoSave:false
        :toolbars="toolbars"
        style="height:777px;"
      />
    </div>
    <div class="right">
      <el-form
        :model="from"
        label-position="left"
        style="padding:20px 10px 0 10px;"
        size="small"
        label-width="80px"
        :rules="rules"
        ref="from"
      >
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="from.title" placeholder="文章标题"></el-input>
        </el-form-item>
        <el-form-item label="文章标签" prop="tags">
          <el-select
            v-model="from.tags"
            :multiple-limit="4"
            multiple
            placeholder="请选择"
          >
            <el-option
              v-for="(item, index) in tagsData"
              :key="index"
              :label="item"
              :value="index"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="from.status" placeholder="请选择">
            <el-option label="审核" :value="parseInt(1)"></el-option>
            <el-option label="草稿" :value="parseInt(2)"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="fabu('from')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 引入vue-meditor
import Markdown from "vue-meditor";
import { mapMutations } from "vuex";
export default {
  name: "fabu",
  data() {
    return {
      obj: "123",
      //meditor配置
      toolbars: {
        h4: true,
        h5: true,
        h6: true,
        //clear: true,
        save: true
      },
      tagsData: [
        "java",
        "mysql",
        "redis",
        "vue",
        "html",
        "js",
        "redis",
        "服务器",
        "springboot",
        "正则",
        "css",
        "vscode",
        "idea",
        "插件"
      ],
      from: {
        title: null,
        tags: [],
        content: undefined,
        status: null
      },
      rules: {
        title: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        tags: [{ required: true, message: "请选择标签", trigger: "change" }],
        status: [{ required: true, message: "请选择状态", trigger: "change" }]
      }
    };
  },
  components: {
    Markdown
  },
  methods: {
    ...mapMutations("meditor", {
      setHtml: "setHtml"
    }),
    fabu(formName) {
      //调用meditor保存方法
      this.$refs.md.handleSave();
      if (this.from.content == undefined) {
        this.$message({
          message: "Markdown内容不能外空",
          type: "warning"
        });
        return;
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("发布");
        } else {
          return false;
        }
      });
    },
    //meditor 编辑器按钮
    save({ value, html }) {
      //console.log(theme);
      //console.log(value);
      //console.log(html);
      this.setHtml(value);
      this.from.content = html ? html : null;
    }
  }
};
</script>

<style lang="scss">
#fabu {
  .left {
    .markdown {
      height: 777px;
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
}
</style>
<style lang="scss" scoped>
#fabu {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start; //设置换行没空隙
  @media (max-width: 650px) {
    height: auto;
  }
  .left {
    @include d-left;
    background: rgba(255, 255, 255, 0.5);
  }
  .right {
    @include d-right;
    background: rgba(255, 255, 255, 0.5);
  }
}
</style>
