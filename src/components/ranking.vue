<template>
  <div id="ranking">
    <div class="rankingdiv">
      <div class="title">点击排行</div>
      <div class="r-border"></div>
      <ul>
        <li v-for="(item, index) in listData" :key="index">
          <router-link to="">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "rank",
  data() {
    return {
      listData: [
        {
          title: "排行一"
        },
        {
          title: "排行二"
        },
        {
          title: "java基础：类和对象"
        },
        {
          title: "关于写博客的一些想法,还有实际的行动"
        },
        {
          title: "放大缩小插件"
        }
      ]
    };
  },
  methods: {
    getData() {}
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
#ranking {
  @include d_div;
  .rankingdiv {
    width: calc(100% - 20px);
    padding: 10px;
    .title {
      font-weight: 600;
    }
    .r-border {
      margin: 10px 0;
      width: 100%;
      height: 1px;
      border-bottom: 1px solid white;
    }
    ul {
      counter-reset: count 0;
      li {
        position: relative;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis; //超出内容用省略号表示
        height: 25px;
        margin-bottom: 10px;
        line-height: 25px;
        counter-increment: count;
      }
      li:nth-child(2n-1) {
        background: rgba(230, 230, 230, 0.4);
      }
      li a {
        margin-left: 18px;
        white-space: nowrap; //元素不进行换行

        padding-left: 15px;
        font-size: 17px;
      }
      li a:hover {
        color: $my-color;
      }
      li::before {
        position: absolute;
        content: counter(count);
        width: 18px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        top: 50%;
        left: 8px;
        background: #39f;
        color: #fff;
        transform: translate(0, -50%);
        font-size: 13px;
        counter-increment: section;
      }
    }
  }
}
</style>
