<template>
  <div class="login-default">
    <div class="heade">
      <div class="setting">
        <div
          class="designerTitle"
          @mouseover="showModel = true"
          @mouseout="showModel = false"
        >
          <div class="designerTitlebox">
            <span>{{ titleModel }}设置</span
            ><i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <div
            class="designerTitlelist"
            :style="showModel ? 'visibility:visible' : 'visibility:hidden'"
          >
            <div
              class="designerTitlelistbox"
              v-for="(item, index) in titleModelData"
              :key="index"
              @click="choose(item.name)"
            >
              {{ item.name }}设置
            </div>
          </div>
        </div>
        <div class="two">
          <el-popover
            placement="top"
            :offset="200"
            popper-class="login_image_template"
            v-model="visible"
          >
            <div class="login_imageboxs">
              <div class="login_imagebox" v-for="item in 5" :key="item">
                <div class="login_imagediv"></div>
                <div class="login_image_title">登录页模板{{ item }}</div>
              </div>
            </div>
            <div style="width:74px;height:70px;" slot="reference">
              <i class="twodiv el-icon-document"></i>
              <div class="twodiv2">选择模板</div>
            </div>
          </el-popover>
        </div>
      </div>
      <div class="rightdiv">
        <el-button type="primary" style="margin-right:50px;" size="small" round
          >恢复默认</el-button
        >
        <el-button type="primary" style="margin-right:10px;" size="small" round
          >保存</el-button
        >
        <el-button type="info" size="small" round>取消</el-button>
      </div>
    </div>
    <div class="middle">
      <div class="leftdiv">
        <div class="loginlefthtml"></div>
      </div>
      <div class="rightdiv">
        <div class="topdiv">
          <div
            class="topdiv-leftdiv"
            :class="show ? 'active-topdiv' : ''"
            @click="show = true"
          >
            属性设置
          </div>
          <div
            class="topdiv-rightdiv"
            :class="!show ? 'active-topdiv' : ''"
            @click="show = false"
          >
            基本信息
          </div>
        </div>
        <div class="bottomdiv">
          <ul class="shuxingshezhi" v-show="show">
            <li>
              <div class="lable">登录页背景颜色</div>
              <el-color-picker v-model="color"></el-color-picker>
            </li>
          </ul>
          <ul class="jibenxinxi" v-show="!show">
            <li>
              <p><font color="red">*&nbsp;</font>模板名称</p>
              <input />
              <font
                :style="'visibility:' + (true ? 'visible' : 'hidden')"
                color="red"
                size="2"
                >&nbsp;</font
              >
            </li>
            <li>
              <p>模板描述</p>
              <textarea />
            </li>
            <li>
              <p><font color="red">*&nbsp;</font>排序号</p>
              <input />
              <font
                :style="'visibility:' + (false ? 'visible' : 'hidden')"
                color="red"
                size="2"
                >123</font
              >
            </li>
            <li>
              <p>文件路径</p>
              <input value="default/login.vue" disabled />
              <font color="red" size="2">&nbsp;</font>
            </li>
            <li>
              <p>系统标题名称</p>
              <input />
              <font color="red" size="2">&nbsp;</font>
            </li>
            <li><el-checkbox v-model="checked"></el-checkbox>&nbsp;设为默认</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTitleModel } from "@/api/loongtek/index.js";
export default {
  name: "login-default",
  data() {
    return {
      visible: false,
      show: true,
      attributefrom: {
        user: null
      },
      input: null,
      checked: null,
      color: "white",
      listModel: [
        {
          name: "登录页设置"
        },
        {
          name: "首页设置"
        }
      ],
      titleModelData: null,
      showModel: false,
      titleModel: "登录页"
    };
  },
  created() {
    this.getTitleModelJs();
  },
  mounted() {},
  methods: {
    choose(item) {
      this.titleModel = item;
      this.showModel = false;
    },
    getTitleModelJs() {
      getTitleModel()
        .then(res => {
          console.log(123);
          if (res.data.resp_code === 0) this.titleModelData = res.data.datas;
          else this.titleModelData = this.listModel;
        })
        .catch(() => {
          this.titleModelData = this.listModel;
        });
    }
  }
};
</script>

<style lang="scss">
//颜色选择器
.el-color-picker {
  .el-color-picker__trigger {
    height: 30px;
    width: 100px;
    padding: 0;
    .el-icon-arrow-down:before {
      content: "";
    }
  }
}
//popover 弹出框
.login_image_template {
  background-color: #282828;
  .popper__arrow {
    border-bottom-color: #282828 !important;
  }
  .popper__arrow::after {
    content: none;
  }
  .login_imageboxs {
    display: flex;
    .login_imagebox {
      margin-right: 20px;
      text-align: center;
      .login_imagediv {
        width: 114px;
        height: 78px;
        border: 1px solid white;
      }
      .login_image_title {
        font-size: 12px;
        margin-top: 4px;
        color: white;
      }
    }
    .login_imagebox:last-child {
      margin-right: 0;
    }
  }
}
</style>
<style lang="scss" scoped>
p {
  margin: 0;
  padding: 0;
}
.login-default {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column !important;
  .heade {
    width: 100%;
    height: 70px;
    background: #282828;
    overflow: hidden;
    .setting {
      width: 265px;
      height: 70px;
      float: left;
      overflow: hidden;
      .designerTitle {
        position: absolute;
        width: 188px;
        height: 70px;
        font-size: 18px;
        color: #fff;
        line-height: 70px;
        border-right: 1px solid #858585;
        //float: left;
        text-align: center;
        cursor: pointer;
        .designerTitlebox {
          width: 100%;
          font-size: 18px;
          color: #fff;
        }
        .designerTitlelist {
          width: 100%;
          font-size: 18px;
          color: #fff;
          background: #282828;
          .designerTitlelistbox {
            width: 100%;
            height: 50px;
            line-height: 50px;
            border-top: 1px solid #858585;
          }
          .designerTitlelistbox:hover {
            background-color: #409eff;
            cursor: pointer;
          }
        }
      }
      .two {
        float: right;
        height: 70px;
        cursor: pointer;
        .twodiv {
          color: white;
          font-weight: 600;
          font-size: 22px;
          margin-left: 40px;
          margin-top: 17px;
        }
        .twodiv2 {
          font-size: 12px;
          color: #fff;
          margin-left: 26px;
        }
      }
    }
    .rightdiv {
      height: 70px;
      overflow: hidden;
      float: right;
      margin-right: 30px;
      line-height: 70px;
      button {
        width: 92px;
      }
    }
  }
  .middle {
    flex: 1;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    .leftdiv {
      flex: 1;
      display: flex;
      .loginlefthtml {
        margin: 20px;
        flex: 1;
        background-color: #f5f5f5;
      }
    }
    .rightdiv {
      width: 225px;
      background-color: #f5f5f5;
      display: flex;
      flex-direction: column;
      .topdiv {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #badef4;
        display: flex;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        .topdiv-leftdiv {
          width: 50%;
        }
        .topdiv-rightdiv {
          width: 50%;
        }
        .active-topdiv {
          border-bottom: 1px solid #1f85ec;
          color: #1f85ec;
        }
      }
      .bottomdiv {
        flex: 1;
        .shuxingshezhi {
          padding: 8px;
          li {
            display: flex;
            padding: 0px;
            color: #666;
            font-size: 12px;
            border-bottom: 1px solid #e8e8e8;
            .lable {
              line-height: 30px;
            }
          }
        }
        .jibenxinxi {
          padding: 18px;
          li {
            padding: 0px;
            color: #666;
            font-size: 12px;
            //border-bottom: 1px solid #e8e8e8;
            p {
              color: #666;
              font-size: 12px;
            }
            input {
              border: 1px solid #d4d4d4;
              outline: medium; //去除浏览器输入框样式
              height: 28px;
              margin-top: 5px;
              width: calc(100% - 2px);
              padding: 0;
            }
            textarea {
              width: 100%;
              resize: none;
              border: 1px solid #d4d4d4;
              outline: medium; //去除浏览器输入框样式
              height: 80px;
            }
            input:focus {
              border: 1px solid #318ed9;
            }
            input:hover {
              border: 1px solid #318ed9;
            }
            textarea:focus {
              border: 1px solid #318ed9;
            }
            textarea:hover {
              border: 1px solid #318ed9;
            }
          }
        }
      }
    }
  }
}
</style>
