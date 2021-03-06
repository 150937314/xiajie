module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',//相对路径
  outputDir:'dist',//构建输出目录
  assetsDir:'assets',//静态资源目录(js,css,img,fonts)
  linetOnSave:false,//是否开启eslint报存检测，有效值：ture || false || 'error
  runtimeCompiler: true,
  chainWebpack: () => {},
  configureWebpack: () => {},
  devServer:{
    open:false,//使用npm run serve 之后是否自动在浏览器中打开项目
    host:'localhost',//主机名字
    port:8080,//端口
    https:false,//true启动浏览器会给出一些警告
    hotOnly:false,//热更新 webpack已经有
    proxy:{
      // 配置跨域，请求后端接口
      '/api':{
        target:'http://api.douban.com/v2',//源地址
        changeOrigin:true,//是否允许跨域
        ws:true,//是否代理websockets
        pathRewrite:{
          '^/api':''
        }
      }
    },
    before: app => {}
  },
  //第三方插件配置
  pluginOptions: {}
}