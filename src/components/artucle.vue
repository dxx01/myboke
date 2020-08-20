<!-- 文章模块 -->
<template>
  <div id="article">
    <div class="article_box" v-for="(articles, index) in 4" :key="index">
      <div class="article_title">
        <h2>java基础：类和对象啊手动阀打发阿斯蒂撒大苏打撒旦芬</h2>
      </div>
      <div class="article_tags">
        <div class="article_tag" v-for="item in 4" :key="item">java</div>
      </div>
      <div class="article_content">
        安徽山东福建广东附件是风机打赏是的黄色发射点犯得上方法士大夫反对士大夫士大夫十大十大阿萨发金分割傻瓜的返回结果官方的世界观发挥教师的规划建设给飞机和公司电话分机估计是官方就是高房价宏观数据的官方结合公司的肌肤改善计划大纲
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
export default {};
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
