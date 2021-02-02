/*
 *                   江城子 . 程序员之歌
 *
 *               十年生死两茫茫，写程序，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 *
 *               领导每天新想法，天天改，日日忙。
 *                   相顾无言，惟有泪千行。
 *               每晚灯火阑珊处，夜难寐，加班狂。
 *
 *
 * @Autor: 郑宝丰
 * @Version: 1.0
 * @Date: 2021-01-27 14:20:19
 * @LastEditors: 郑宝丰
 * @LastEditTime: 2021-01-27 14:20:19
 * @Description: 扫描 controllers 目录下接口文件并导出
 * @FilePath: /koa-vue/servers/controllers/index.js
 */

const fs = require('fs')

const addMapping = (router, mapping) => {
  for (const url in mapping) {
    if (url.startsWith('GET')) {
      //  get请求处理
      const path = url.substring(4)
      router.get(path, mapping[url])
    } else if (url.startsWith('POST')) {
      // post请求处理
      const path = url.substring(5)
      router.post(path, mapping[url])
    } else {
      console.log(`invalid URL:${url}`)
    }
  }
}

const addControllers = (router) => {
  // eslint-disable-next-line
  const dir = __dirname + '/'
  const files = fs.readdirSync(dir)
  // 过滤js文件
  const jsFiles = files.filter((f) => {
    return f.endsWith('.js')
  })
  // 处理每个js文件
  for (const f of jsFiles) {
    const mapping = require(dir + f)
    addMapping(router, mapping)
  }
}

module.exports = () => {
  const router = require('koa-router')()
  addControllers(router)
  return app.use(router.routes()).use(router.allowedMethods())
}
