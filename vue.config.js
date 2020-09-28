const webpack = require("webpack");
module.exports = {
  devServer: {
    port: 8880, // 启动端口
    host: "localhost",
    open: true, // 启动后是否自动打开网页
    //代理解决跨域问题
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL, //设置你调用的接口域名和端口号 别忘了加http
        changeOrigin: true, //這裡true表示实现跨域
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: "" //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
        }
      }
    }
  },
  productionSourceMap: false, // 打包时不会生成.map文件，加快打包速度
  publicPath: "/myboke",
  //配置全局样式变量
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/css/default.scss";`
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  }
};
