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
 * @Date: 2021-01-29 13:43:50
 * @LastEditors: 郑宝丰
 * @LastEditTime: 2021-01-29 13:43:51
 * @Description: session redis存储
 * @FilePath: /koa-vue/servers/utils/Store.js
 */
const Redis = require('ioredis')
const { Store } = require('koa-session2')

class RedisStore extends Store {
  constructor () {
    super()
    this.redis = new Redis({
      port: 6379, // Redis port
      host: '127.0.0.1' // Redis host
    })
  }

  //    获取session
  async get (sid, ctx) {
    const data = await this.redis.get(`SESSION:${sid}`)
    return JSON.parse(data)
  }

  //    设置session
  async set (session, { sid = this.getID(24), maxAge = 1000 * 60 * 60 } = {}, ctx) {
    try {
      await this.redis.set(`SESSION:${sid}`, JSON.stringify(session), 'EX', maxAge / 1000)
    } catch (e) {}
    return sid
  }

  //    销毁session
  async destroy (sid, ctx) {
    return await this.redis.del(`SESSION:${sid}`)
  }
}

module.exports = RedisStore
