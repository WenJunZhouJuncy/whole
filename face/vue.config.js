// vue.config.js
//const UglifyPlugin = require('uglifyjs-webpack-plugin')
// const TerserPlugin = require('terser-webpack-plugin')
// const vConsolePlugin = require('vconsole-webpack-plugin')
const path = require('path');
module.exports = {
  // 选项...
  publicPath: process.env.VUE_APP_PUBLICPATH, //process.env.VUE_APP_PUBLICPATH,
  outputDir: 'dist',
  assetsDir: 'static', //静态资源目录
  devServer: {
    open: false, // 编译完成是否打开网页
    host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 3000, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://nfys.kinglian.cn', //需要跨域目标https://120.196.139.182:1004
        changeOrigin: true,
        ws: true,
        pathRewrite:{
          '^api':''
        }
      }
    }
  },
  lintOnSave: false,
  configureWebpack: config => {
    config.resolve = { // 配置解析别名
      extensions: ['.js', '.json', '.vue'],
      alias: {
        'vue':'vue/dist/vue.js',
        '@': path.resolve(__dirname, './src'),
        'components': path.resolve(__dirname, './src/components'),
        'api': path.resolve(__dirname, './src/api'),
      }
    }
  //   if (process.env.NODE_ENV == 'production') {
  //       // 为生产环境修改配置
  //       config.mode = 'production'
  //       // 将每个依赖包打包成单独的js文件
  //       let optimization = {
  //         minimizer: [new TerserPlugin({
  //           parallel: true,
  //           sourceMap: false,
  //           terserOptions: {
  //             warnings: false,
  //             compress: {
  //               drop_console: true,// 注释console
  //               drop_debugger: true, // 注释debugger
  //               pure_funcs: ["console.log"]
  //             }
  //           }
  //         })]
  //       };
  //       Object.assign(config, {
  //         optimization
  //       })
  //     } else {
  //       // 为开发环境修改配置
  //       config.mode = 'development'
  //     }
  // //生产环境去掉vconsole调试器
  // let pluginsDev = [
  //     new vConsolePlugin({
  //         filter: [],
  //         enable: process.env.NODE_ENV != 'production'
  //         //enable: false
  //     })
  // ]

  // config.plugins = [...config.plugins, ...pluginsDev]
}
}