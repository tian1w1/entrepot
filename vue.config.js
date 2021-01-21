module.exports = {
  publicPath: "./",
  // 配置开发服务器
  // 关闭esLint
  lintOnSave: false,
  // 打包时不会生成 。map文件，加快打包速度
  productionSourceMap: false,
  devServer: {
    // 配置端口号
    port: 8888,
    // 配置服务器自动打开浏览器
    open: true,
    // 是否开启https协议
    https: false,
    // 设置主机名
    host: "localhost",
    //在此配置跨域
    proxy: {
      "/api": {
        target: "http://120.53.31.103:84", // 线上后端地址
        changeOrigin: true, //允许跨域
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },

}

