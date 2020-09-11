<template>
  <div id="technology_lable">
    <div class="lablediv">
      <div class="title">技术标签</div>
      <div class="l-border"></div>
      <div id="tagscloud">
        <a
          :style="'background:' + getColor()"
          v-for="(item, index) in tagsData"
          :key="index"
          @mouseover="one(index, $event)"
          @mouseout="two(index, $event)"
          @click="choose"
          >{{ item }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
//import { update } from "@/util/tagscloud.js";
export default {
  nmae: "technology_lable",
  data() {
    return {
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
      radius: 90,
      d: 200,
      dtr: Math.PI / 180,
      mcList: [],
      lasta: 1,
      lastb: 1,
      distr: true,
      tspeed: 11,
      size: 200,
      mouseX: 0,
      mouseY: 10,
      howElliptical: 1,
      aA: null,
      oDiv: null,
      sa: null,
      sb: null,
      sc: null,
      ca: null,
      cb: null,
      cc: null
    };
  },
  created() {},
  computed: {},
  mounted() {
    this.init();
    this.sineCosine(0, 0, 0);
    this.positionAll();
    setInterval(this.update, 40);
  },
  methods: {
    getColor() {
      let str = null;
      this.r = Math.floor(Math.random() * 255);
      this.g = Math.floor(Math.random() * 255);
      this.b = Math.floor(Math.random() * 255);
      str = "rgba(" + this.r + "," + this.g + "," + this.b + ",0.8)";
      return str;
    },
    init() {
      let oTag = null;
      this.oDiv = document.getElementById("tagscloud");
      this.aA = this.oDiv.getElementsByTagName("a");
      for (let i = 0; i < this.aA.length; i++) {
        oTag = {};
        oTag.offsetWidth = this.aA[i].offsetWidth;
        oTag.offsetHeight = this.aA[i].offsetHeight;
        this.mcList.push(oTag);
      }
    },
    update() {
      var a,
        b,
        c = 0;
      a =
        (Math.min(Math.max(-this.mouseY, -this.size), this.size) /
          this.radius) *
        this.tspeed;
      b =
        (-Math.min(Math.max(-this.mouseX, -this.size), this.size) /
          this.radius) *
        this.tspeed;
      this.lasta = a;
      this.lastb = b;
      if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
        return;
      }
      this.sineCosine(a, b, c);
      for (var i = 0; i < this.mcList.length; i++) {
        if (this.mcList[i].on) {
          continue;
        }
        var rx1 = this.mcList[i].cx;
        var ry1 = this.mcList[i].cy * this.ca + this.mcList[i].cz * -this.sa;
        var rz1 = this.mcList[i].cy * this.sa + this.mcList[i].cz * this.ca;

        var rx2 = rx1 * this.cb + rz1 * this.sb;
        var ry2 = ry1;
        var rz2 = rx1 * -this.sb + rz1 * this.cb;

        var rx3 = rx2 * this.cc + ry2 * -this.sc;
        var ry3 = rx2 * this.sc + ry2 * this.cc;
        var rz3 = rz2;

        this.mcList[i].cx = rx3;
        this.mcList[i].cy = ry3;
        this.mcList[i].cz = rz3;

        var per = this.d / (this.d + rz3);

        this.mcList[i].x =
          this.howElliptical * rx3 * per - this.howElliptical * 2;
        this.mcList[i].y = ry3 * per;
        this.mcList[i].scale = per;
        var alpha = per;
        alpha = (alpha - 0.6) * (10 / 6);
        this.mcList[i].alpha = alpha * alpha * alpha - 0.2;
        this.mcList[i].zIndex = Math.ceil(100 - Math.floor(this.mcList[i].cz));
      }
      this.doPosition();
    },
    positionAll() {
      var phi = 0;
      var theta = 0;
      var max = this.mcList.length;
      for (var i = 0; i < max; i++) {
        if (this.distr) {
          phi = Math.acos(-1 + (2 * (i + 1) - 1) / max);
          theta = Math.sqrt(max * Math.PI) * phi;
        } else {
          phi = Math.random() * Math.PI;
          theta = Math.random() * (2 * Math.PI);
        }
        //坐标变换
        this.mcList[i].cx = this.radius * Math.cos(theta) * Math.sin(phi);
        this.mcList[i].cy = this.radius * Math.sin(theta) * Math.sin(phi);
        this.mcList[i].cz = this.radius * Math.cos(phi);
        this.aA[i].style.left =
          this.mcList[i].cx +
          this.oDiv.offsetWidth / 2 -
          this.mcList[i].offsetWidth / 2 +
          "px";
        this.aA[i].style.top =
          this.mcList[i].cy +
          this.oDiv.offsetHeight / 2 -
          this.mcList[i].offsetHeight / 2 +
          "px";
      }
    },
    doPosition() {
      var l = this.oDiv.offsetWidth / 2;
      var t = this.oDiv.offsetHeight / 2;
      for (var i = 0; i < this.mcList.length; i++) {
        if (this.mcList[i].on) {
          continue;
        }
        var aAs = this.aA[i].style;
        if (this.mcList[i].alpha > 0.1) {
          if (aAs.display != "") aAs.display = "";
        } else {
          if (aAs.display != "none") aAs.display = "none";
          continue;
        }
        aAs.left =
          this.mcList[i].cx + l - this.mcList[i].offsetWidth / 2 + "px";
        aAs.top =
          this.mcList[i].cy + t - this.mcList[i].offsetHeight / 2 + "px";
        //aAs.fontSize=Math.ceil(12*mcList[i].scale/2)+8+'px';
        //aAs.filter="progid:DXImageTransform.Microsoft.Alpha(opacity="+100*mcList[i].alpha+")";
        aAs.filter = "alpha(opacity=" + 100 * this.mcList[i].alpha + ")";
        aAs.zIndex = this.mcList[i].zIndex;
        aAs.opacity = this.mcList[i].alpha;
      }
    },
    sineCosine(a, b, c) {
      this.sa = Math.sin(a * this.dtr);
      this.ca = Math.cos(a * this.dtr);
      this.sb = Math.sin(b * this.dtr);
      this.cb = Math.cos(b * this.dtr);
      this.sc = Math.sin(c * this.dtr);
      this.cc = Math.cos(c * this.dtr);
    },
    one(i, event) {
      this.mcList.forEach((item, index) => {
        if (i === index) {
          item.on = true;
          event.target.style.zIndex = 999;
          event.target.style.opacity = 1;
          event.target.style.filter = "alpha(opacity=100)";
          event.target.style.background = "#4ba4ff";
        }
      });
    },
    two(i, event) {
      this.mcList.forEach((item, index) => {
        if (i === index) {
          item.on = false;
          event.target.style.filter = "alpha(opacity=" + 100 * item.alpha + ")";
          event.target.style.opacity = item.alpha;
          event.target.style.zIndex = item.zIndex;
          event.target.style.background = this.getColor();
        }
      });
    },
    choose() {
      this.$router.push("/home/techZones/tag");
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
#technology_lable {
  @include d_div;
  .lablediv {
    width: calc(100% - 20px);
    padding: 10px;
    .title {
      font-weight: 600;
    }
    .l-border {
      margin: 10px 0;
      width: 100%;
      height: 1px;
      border-bottom: 1px solid white;
    }
    #tagscloud {
      width: 100%;
      height: 200px;
      position: relative;
      font-size: 12px;
      text-align: center;
      a {
        position: absolute;
        top: 0px;
        left: 0px;
        color: #fff;
        text-decoration: none;
        line-height: 18px;
        text-align: center;
        font-size: 12px;
        padding: 5px;
        display: inline-block;
        border-radius: 3px;
      }
      a:hover {
        cursor: pointer;
        background: $my-color;
      }
    }
  }
}
</style>
