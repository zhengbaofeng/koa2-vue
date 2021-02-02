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
 * @Description: 商品接口文件
 * @FilePath: /koa-vue/servers/controllers/goods.js
 */
const MySql = require('../utils/mysql')

/**
 * @description: 查询商品列表
 * @param {*} params.type 商品类型
 * @return {*}
 */
const queryFunc = async (ctx, next) => {
  const params = ctx.request.query
  console.log(params)
  await MySql.queryStr(`
    SELECT
        *
    FROM GOODS
        WHERE STATE = 0
  `).then((res) => {
    ctx.success(res)
  }).catch((err) => {
    ctx.fail(err, -1)
  })
}
module.exports = {
  'POST /api/goods/query': queryFunc
}
