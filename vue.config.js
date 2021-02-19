
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
//  多入口打包配置
const objectProject = {
  admin: {
    entry: 'src/admin/views/main.js',
    template: 'public/admin.html',
    filename: 'admin.html',
    chunks: ['chunk-vendors', 'chunk-common', 'admin']
  },
  index: {
    entry: 'src/shop/views/main.js',
    template: 'public/index.html',
    filename: 'index.html',
    chunks: ['chunk-vendors', 'chunk-common', 'index']
  }
}
let page = {}
console.log('打包配置环境=========')
console.log(process.argv)
// 获取build后面的参数确定执行哪个文件
const projectname = process.argv[3]
if (process.env.NODE_ENV === 'development') {
  // 判断开发环境不用
  page = objectProject
} else {
  page[projectname] = objectProject[projectname]
}

module.exports = {
  publicPath: './',
  assetsDir: 'static',
  outputDir: './servers/pages/' + projectname,
  devServer: {
    port: 3001,
    proxy: proxyObj
  },
  // 生产环境 sourceMap
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        //  创建目录别名
        shopApi: resolve('src/shop/api'),
        adminApi: resolve('src/admin/api')
      }
    }
  },
  // 配置多页面入口
  pages: page
}
