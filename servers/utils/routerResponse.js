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
 * @Date: 2021-01-26 13:09:57
 * @LastEditors: 郑宝丰
 * @LastEditTime: 2021-01-26 13:09:58
 * @Description: 返回数据统一处理函数
 * @FilePath: /koa-vue/servers/utils/route
 */
//  const jwt = require('jsonwebtoken')

const routerResponse = (option = {}) => {
  return async function (ctx, next) {
    ctx.success = function (data, msg) {
      ctx.type = option.type || 'json'
      ctx.body = {
        code: option.successCode || 0,
        msg: msg,
        data: data
      }
    }
    ctx.fail = function (msg, code) {
      ctx.type = option.type || 'json'
      ctx.body = {
        code: code || option.failCode || 99,
        msg: msg || option.successMsg || 'fail'
      }
    }
    await next()
  }
}

module.exports = routerResponse
