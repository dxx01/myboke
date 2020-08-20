<template>
  <div id="headerMode">
    <!-- 大屏模式展示(>650px) -->
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
    <!-- 小屏模式展示(<650px) -->
    <div class="mobile_nav">
      <div class="logo">邓鑫鑫博客</div>
      <div class="mobile_menu" @click="changeIcon(!iconShow)">
        <!-- 三 -->
        <svg
          v-if="iconShow"
          t="1596722270456"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="15126"
          width="20"
          height="20"
          style="margin-top:4px;"
        >
          <path
            d="M867.995 459.647h-711.99c-27.921 0-52.353 24.434-52.353 52.353s24.434 52.353 52.353 52.353h711.99c27.921 0 52.353-24.434 52.353-52.353s-24.434-52.353-52.353-52.353z"
            p-id="15127"
            fill="#777777"
          ></path>
          <path
            d="M867.995 763.291h-711.99c-27.921 0-52.353 24.434-52.353 52.353s24.434 52.353 52.353 52.353h711.99c27.921 0 52.353-24.434 52.353-52.353s-24.434-52.353-52.353-52.353z"
            p-id="15128"
            fill="#777777"
          ></path>
          <path
            d="M156.005 260.709h711.99c27.921 0 52.353-24.434 52.353-52.353s-24.434-52.353-52.353-52.353h-711.99c-27.921 0-52.353 24.434-52.353 52.353s24.434 52.353 52.353 52.353z"
            p-id="15129"
            fill="#777777"
          ></path>
        </svg>
        <!-- x -->
        <svg
          v-if="!iconShow"
          t="1596724076285"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="19415"
          width="16"
          height="16"
          style="margin-top:6px;"
        >
          <path
            d="M768 341.344L682.656 256 512 426.656 341.344 256 256 341.344 426.656 512 256 682.656 341.344 768 512 597.344 682.656 768 768 682.656 597.344 512z"
            p-id="19416"
            fill="#777777"
          ></path>
        </svg>
      </div>
      <!-- 小屏模式菜单列表(<650px) -->
      <transition name="el-zoom-in-top">
        <div
          id="mobile_dropdown_height"
          class="mobile_dropdown"
          v-show="!iconShow"
        >
          <!-- :style="'visibility:' + (iconShow ? 'hidden' : 'visible')" -->
          <!-- 搜索 -->
          <div class="mobile_search">
            <input
              type="text"
              placeholder="请输入搜索内容"
              class="mobile_inputSearch"
              autocomplete="off"
            />
            <div class="mobile_searchBtn" @click="changeIcon(!iconShow)">
              搜索
            </div>
          </div>
          <ul>
            <li
              :class="active === item.path ? 'active' : ''"
              v-for="(item, index) in navData"
              :key="index"
              @click="choose(item.path, !iconShow)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
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
      ]
      // 当前选中
      //active: this.$store.state.header.active,
      // 小屏模式下图标切换
      //iconShow: true
    };
  },

  components: {},

  computed: {
    ...mapState("header", {
      active: state => state.active,
      iconShow: state => state.iconShow
    })
  },

  beforeMount() {},

  mounted() {},

  methods: {
    ...mapMutations("header", {
      setHeight: "setHeight",
      setActive: "setActive",
      defaultHeight: "defaultHeight",
      setIconShow: "setIconShow"
    }),
    // 选择头部标签
    choose(path) {
      this.setActive(path);
      // 小屏时点击菜单选项下拉消失
      if (document.body.clientWidth < 650) {
        this.setIconShow(true);
        this.disHeight(true);
      }
    },
    // 小屏模式下切换展开图标
    changeIcon(val) {
      this.setIconShow(val);
      this.disHeight(val);
    },
    // 获取小屏模式下列表高度并处理
    disHeight(val) {
      if (document.body.clientWidth < 650) {
        let height = 0;
        if (val === false) {
          height = 326;
          //document.getElementById("mobile_dropdown_height").offsetHeight;
        } else {
          height = 20;
          //document.getElementById("mobile_dropdown_height").offsetHeight;
        }
        this.setHeight(height);
      }
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
  background-color: rgba(255, 255, 255, 0.2);
  //margin-bottom: 20px;
  box-shadow: 0px 5px 20px 0px rgba(17, 58, 93, 0.1);
  @media (max-width: 650px) {
    position: relative;
  }
  .nav {
    margin: 0 auto;
    max-width: 1200px;
    min-width: 500px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 650px) {
      display: none;
    }
    .logo {
      font-size: 22px;
      font-family: cursive;
      font-weight: bolder;
      margin-left: 10px;
      line-height: 60px;
      cursor: pointer;
    }
    .navlist {
      color: #777;
      .header_ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        @media (max-width: 650px) {
          display: none;
        }
        li {
          list-style-type: none;
          width: 80px;
          text-align: center;
          line-height: 60px;
          color: #333;
          font-family: Arial, Helvetica, sans-serif;
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
  .mobile_nav {
    position: relative;
    top: 0;
    display: flex;
    justify-content: space-between;
    @media (min-width: 650px) {
      display: none;
    }
    .logo {
      font-size: 22px;
      font-family: cursive;
      font-weight: bolder;
      margin-left: 10px;
      line-height: 60px;
      cursor: pointer;
    }
    .mobile_menu {
      width: 28px;
      height: 28px;
      background-color: rgba(248, 248, 248, 0.5);
      cursor: pointer;
      border-radius: 4px;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(238, 238, 238);
      text-align: center;
      margin: 13px 20px 0 0;
    }
    .mobile_dropdown {
      position: absolute;
      top: 60px;
      width: 100%;
      z-index: 99;
      background-color: rgba(44, 62, 80, 0.2);
      ul,
      li {
        list-style-type: none;
        margin: 0;
        padding: 0;
        text-align: center;
        padding: 10px 0;
        cursor: pointer;
        color: #333;
      }
      .active {
        color: #4ba4ff;
      }
      li:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
      .mobile_search {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 40px;
        .mobile_inputSearch {
          width: 85%;
          padding: 5px 12px;
          color: #333;
          background-color: rgba(255, 255, 255, 0.2);
          font-size: 15px;
          box-shadow: none;
          border: 2px solid rgba(204, 204, 204, 0.2);
          display: table-cell;
          // 去除选中的边框颜色
          outline: none;
        }
        .mobile_searchBtn {
          text-align: center;
          line-height: 40px;
          height: 40px;
          width: 15%;
          color: white;
          font-size: 14px;
          font-weight: 400;
          background-color: rgba(204, 204, 204, 0.2);
        }
        .mobile_searchBtn:hover {
          color: #409eff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
