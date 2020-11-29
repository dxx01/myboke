<!--  -->
<template>
  <div class="mytable">
    <el-table :data="tableObj.tableData" style="width: 100%">
      <el-table-column
        fixed
        v-if="tableObj.isTable"
        type="selection"
        width="80"
        align="center"
      >
      </el-table-column>
      <el-table-column
        v-for="(n, index) in tableObj.tableHeader"
        :key="index"
        :prop="n.prop"
        :label="n.label"
        :width="n.width"
        align="center"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <span v-html="n.fun(scope.row[n.prop])" v-if="n.fun"></span>
          <span v-if="!n.fun">{{ scope.row[n.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" align="center" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope, tableObj.tableData)"
            type="text"
            size="small"
          >
            修改
          </el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableObj.tableData)"
            type="text"
            size="small"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      //   tableData: [
      //     {
      //       area: "天河区",
      //       community: "西雅苑天英阁",
      //       buildNum: "A区16栋",
      //       num: "203",
      //       address: "天河区天河东路华康街9号",
      //       inArea: "214",
      //       ShareArea: "27",
      //       allArea: "241",
      //       houseUse: "住宅",
      //       userInfo: "陈长生",
      //       aroundEnv: "未知",
      //       isRegistration: "是",
      //       isRoom: "否",
      //       checkInfo: "",
      //       checkUser: "王吕恒",
      //       checkDate: "2020-07-23",
      //       reviewUser: "王吕恒",
      //       reviewData: "2020-11-23",
      //       note: "无"
      //     }
      //   ],
      //   tableHeader: [
      //     {
      //       poro: "area",
      //       label: "小区名称"
      //     }
      //   ]
    };
  },
  props: {
    tableObj: {
      isTable: Boolean,
      tableHeader: Array,
      tableData: Array,
      fun: Array
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    deleteRow(index, rows) {
      //rows.splice(index, 1);
      console.log(index);
      console.log(rows);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //全局点击事件绑定
    this.tableObj.fun.forEach(item => {
      window[item] = this.$parent[item];
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.mytable {
  flex: 1;
  /deep/.el-table {
    height: 100%;
    th {
      background-color: #77a5ec !important;
      padding: 25px 0;
      color: white;
    }
    .el-table__fixed-right-patch {
      background-color: #77a5ec !important;
    }
  }
}
</style>
