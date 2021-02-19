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
 * @Date: 2021-02-03 17:12:42
 * @LastEditors: 郑宝丰
 * @LastEditTime: 2021-02-03 17:12:42
 * @Description: 文件描述
 * @FilePath: /koa-vue/src/rem.js
 */

const baseSize = 16 // 32
function setRem () {
  const scale = document.documentElement.clientWidth / 375 // 750
  document.documentElement.style.fontSize =
  baseSize * Math.min(scale, 2) + 'px'
}
setRem()
window.onresize = function () {
  setRem()
}
