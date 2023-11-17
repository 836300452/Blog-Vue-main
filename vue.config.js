const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://8.138.57.0:3001', // 目标路径
        changeOrigin: true, // 改变请求源
        secure: false // 不使用HTTPS
        // rewrite: (path) => path.replace(new RegExp('^/api'), '') // 重写请求路径
      }
    }
  }
})
