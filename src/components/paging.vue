<!-- 分页模块 -->
<template>
  <div id="paging">
    <el-pagination
      background
      :pager-count="5"
      @current-change="change"
      :page-size.sync="page.page_size"
      layout="prev, pager, next"
      :total="page.total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "paging",
  props: [""],
  data() {
    return {
      page: {
        total: 100,
        page_size: 10
      }
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    change(val) {
      console.log(`当前页: ${val}`);
    }
  },

  watch: {}
};
</script>
<style lang="scss" scoped>
#paging {
  width: 100%;
  text-align: center;
  .pagingdiv {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: row;
    .pagingli {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
