
const env = process.env.NODE_ENV
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
//  需要代理的地址头
const devProxy = [
  {
    hostUrl: `${env === 'development' ? 'http://127.0.0.1:3000' : 'http://127.0.0.1:3000'}`,
    serveUrl: '/'
  }]
console.log('==================================' + env + '环境启动===============================')

// 生成代理配置对象
const proxyObj = {}
devProxy.forEach((value, index) => {
  proxyObj[value.serveUrl] = {
    target: value.hostUrl,
    changeOrigin: true,
    autoRewrite: true,
    cookieDomainRewrite: true,
    pathRewrite: {
      [`^${value.serveUrl}`]: ''
    }
  }
})

module.exports = {
  publicPath: './',
  assetsDir: 'static',
  outputDir: './servers/pages',
  devServer: {
    port: 3001,
    proxy: proxyObj
  },
  configureWebpack: {
    resolve: {
      alias: {
        //  创建目录别名
        api: resolve('src/api')
      }
    }
  }
}
