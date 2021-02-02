/**
 * @description: 数据库创建连接池
 * @param {*}
 * @return {*}
 */
const mysql = require('mysql')

class Pool {
  constructor () {
    this.pool = this.init()
    console.log('创建连接池成功')
  }

  init () {
    return mysql.createPool(global.mysql)
  }
}

module.exports = new Pool(global.mysql)
