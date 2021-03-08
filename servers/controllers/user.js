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
 * @Date: 2021-01-27 14:31:52
 * @LastEditors: 郑宝丰
 * @LastEditTime: 2021-01-27 14:31:52
 * @Description: 文件描述
 * @FilePath: /koa-vue/servers/controllers/user.js
 */
const MySql = require('../utils/mysql')

const registerFunc = async (ctx, next) => {
  //  await 添加同步锁
  await MySql.queryStr('SELECT * FROM user').then((res) => {
    ctx.success({
      table: res
    })
  }).catch((err) => {
    ctx.fail(err, -1)
  })
}
const loginFunc = async (ctx, next) => {
  //  await 添加同步锁
  const params = ctx.request.query
  await MySql.queryStr(`
    SELECT
        *
    FROM USER
        WHERE ACCOUNT = '${params.account}'
  `).then((res) => {
    if (res.length !== 0) {
      res = res[0] || {}
      if (res.password !== params.password) {
        ctx.fail('密码错误', -1)
        return
      }
      ctx.session.userinfo = JSON.stringify(res)
      ctx.success({
        name: res.name,
        phone: res.phone,
        age: res.age
      })
    } else {
      ctx.fail('没有该用户', -1)
    }
  }).catch((err) => {
    ctx.fail(err, -1)
  })
}
const queryFunc = async (ctx, next) => {
  ctx.success(ctx.session.userinfo)
}
const outFunc = async (ctx, next) => {
  if (ctx.session.userinfo) {
    delete ctx.session.userinfo
    ctx.success('退出成功')
  } else {
    ctx.success('已退成')
  }
}
module.exports = {
  'POST /api/user/register': registerFunc,
  'GET /api/user/login': loginFunc,
  'GET /api/user/out': outFunc,
  'POST /api/user/query': queryFunc
}
