<template>
  <div id="headerMode">
    <div class="nav">
      <div class="logo">邓鑫鑫博客</div>
      <div class="navlist">
        <ul class="header_ul">
          <li
            :class="active === item.path ? 'active' : ''"
            v-for="(item, index) in navData"
            :key="index"
            @click="choose(item.path)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerMode",
  props: [""],
  data() {
    return {
      // header部分数据
      navData: [
        {
          name: "首页",
          path: "shouye"
        },
        {
          name: "技术专区",
          path: "techZones"
        },
        {
          name: "爱生活",
          path: "live"
        },
        {
          name: "留言板",
          path: "message"
        },
        {
          name: "赞助",
          path: "sponsor"
        },
        {
          name: "关于我",
          path: "about"
        }
      ],
      active: "shouye"
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    // 选择头部标签
    choose(path) {
      this.active = path;
    }
  },

  watch: {}
};
</script>
<style lang="scss" scoped>
#headerMode {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: #fff;
  padding-bottom: 20px;
  .nav {
    margin: 0 auto;
    max-width: 1200px;
    min-width: 500px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .logo {
      font-size: 22px;
      font-family: cursive;
      font-weight: bolder;
      margin-left: 10px;
      line-height: 60px;
    }
    .navlist {
      color: #777;
      .header_ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        @media (max-width: 550px) {
          display: none;
        }
        li {
          list-style-type: none;
          width: 80px;
          text-align: center;
          line-height: 60px;
          @media (max-width: 800px) {
            width: 70px;
          }
        }
        .active {
          color: #4ba4ff;
        }
        li:hover {
          background-color: #4ba4ff;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
