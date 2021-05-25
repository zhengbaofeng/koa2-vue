const Koa = require('koa')
//  app为全局变量
app = new Koa()
const json = require('koa-json')
const views = require('koa-views')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
//  日期处理类库组件-可在日志输出添加格式化日期
const moment = require('moment')
const path = require('path')
const controllers = require('./controllers')
const staticFile = require('koa-static')
const logsUtil = require('./utils/logs.js')
const routerResponse = require('./utils/routerResponse')
const session = require('koa-session2')
const Store = require('./utils/store.js')
//  app自定义配置参数
global = {
  //  mysql 配置
  mysql: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'nidayede0000',
    database: 'ZbfDb'
  }
}
//  静态目录配置
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))

app.use(json())
app.use(logger())
//  加载返回数据处理中间件
app.use(routerResponse())
app.use(staticFile(path.join(__dirname, '/pages')))
app.use(views(__dirname, '/pages', {
  extension: 'html'
}))
//  加载log4j日志管理组件
app.use(async (ctx, next) => {
  const start = new Date() // 响应开始时间
  let intervals // 响应间隔时间
  try {
    await next()
    intervals = new Date() - start
    logsUtil.logResponse(ctx, intervals) // 记录响应日志
  } catch (error) {
    intervals = new Date() - start
    logsUtil.logError(ctx, error, intervals) // 记录异常日志
  }
})
// logger
app.use(async (ctx, next) => {
  await next()
  const rt = ctx.response.get('X-Response-Time')
  console.log(`路由请求（ ${moment().format('YYYY年MM月DD日, h:mm:ss a')} ）：${ctx.method} ${ctx.url} - ${rt}`)
})
// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})
// session配置
app.use(session({
  store: new Store(),
  key: 'SESSIONID'
}))
//  加载api控制器
controllers()
//  错误处理
app.on('error', err => {
  console.log('服务器错误:', err)
})

app.listen(3000)
console.log('服务启动完成：' + moment().format('YYYY年MM月DD日, h:mm:ss a'))
