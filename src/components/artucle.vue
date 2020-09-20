<!-- 文章模块 -->
<template>
  <div id="article">
    <div class="article_box" v-for="(articles, index) in 4" :key="index">
      <div class="article_title">
        <h2 @click="toRead">java基础：类和对象</h2>
      </div>
      <div class="article_tags">
        <div class="article_tag" v-for="item in 4" :key="item">java</div>
      </div>
      <div class="article_content">
        Java具有简单性、面向对象、分布式、健壮性、安全性、平台独立与可移植性、多线程、动态性等特点。什么是对象？对象可以是一个变量，一个数据结构，或是一个函数。是面向对象（ObjectOriented）中的术语，既表示客观世界问题空间（Namespace）中的某个具体的事物，又表示软件系统解空间中的基本
      </div>
      <div class="article_list">
        <div class="article_list_box">
          <i class="el-icon-user-solid"></i>
          <span>邓先生</span>
        </div>
        <div class="article_list_box">
          <i class="el-icon-date"></i>
          <span>时间</span>
        </div>
        <div class="article_list_box">
          <i class="el-icon-view"></i>
          <span>125</span>
        </div>
        <div class="article_list_box">
          <i class="el-icon-chat-dot-square"></i>
          <span>12</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "articlebox",
  data() {
    return {};
  },
  methods: {
    toRead() {
      // let routes = this.$router.resolve({
      //   path: "/home/techZones/" + 1 + "/" + 2
      // });
      let routes = this.$router.resolve({
        name: "techZones",
        params: {
          tag: 1,
          id: 2
        }
      });
      window.open(routes.href, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
#article {
  width: 100%;
  .article_box {
    border-radius: 4px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.5);
    margin-bottom: 20px;
    .article_title:hover {
      margin-left: 10px;
      cursor: pointer;
      color: #409eff;
    }
    .article_tags {
      margin: 10px 0;
      display: flex;
      flex-direction: row;
      .article_tag {
        width: 65px;
        height: 23px;
        text-align: center;
        line-height: 23px;
        border: 1px solid #5b81fe;
        color: #5b81fe;
        border-radius: 2px;
        margin-right: 15px;
      }
      .article_tag:hover {
        color: white;
        background: #409eff;
        cursor: pointer;
      }
    }
    .article_content {
      word-break: break-all;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2; //超过两行
      -webkit-box-orient: vertical;
      //color: #4a4a4a;
    }
    .article_list {
      display: flex;
      flex-direction: row;
      margin-top: 10px;
      font-size: 0.85rem;
      .article_list_box {
        margin-right: 20px;
        height: 18px;
        line-height: 18px;
        i {
          margin-right: 5px;
        }
      }
    }
  }
  .article_box:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05), 0 0 1px rgba(0, 0, 0, 0.1);
  }
}
</style>
