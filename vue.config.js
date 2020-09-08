module.exports = {
  devServer: {
    port: 8880, // 启动端口
    open: true // 启动后是否自动打开网页
  },
  publicPath: "/myboke",
  //配置全局样式变量
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/default.scss";`
      }
    }
  }
};
