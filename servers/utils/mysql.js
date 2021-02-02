const DB = require('./db')

/**
 * 数据库模型
 */
class MySql {
  /**
     * 构造方法
     */
  constructor (tableName) {
    this.tableName = tableName
    this.pool = DB.pool
  }

  /**
     * 数据插入接口
     * @param tableName
     * @param rowInfo
     * @returns {Promise<any>}
     */
  insert (rowInfo) {
    const { tableName, pool } = this
    return new Promise((resolve, reject) => {
      const sqlMod = `INSERT INTO ${tableName} SET ?`
      pool.query(sqlMod, rowInfo, function (error, result) {
        if (error) reject(error)
        else resolve(result)
      })
    })
  }

  /**
 * 数据修改接口
     * @param tableName
     * @param idJson
     * @param rowInfo
     * @returns {Promise<any>}
     */
  update (idJson, rowInfo) {
    const { tableName, pool } = this
    return new Promise((resolve, reject) => {
      const sqlMod = `UPDATE ${tableName} SET ? WHERE ?`
      pool.query(sqlMod, [rowInfo, idJson], function (error, result) {
        if (error) reject(error)
        else resolve(result)
      })
    })
  }

  /**
     * 数据删除接口
     * @param tableName
     * @param idJson
     * @returns {Promise<any>}
     */
  remove (idJson) {
    const { tableName, pool } = this
    return new Promise((resolve, reject) => {
      const sqlMod = `DELETE FROM ${tableName} WHERE ?`
      pool.query(sqlMod, idJson, function (error, result) {
        if (error) reject(error)
        else resolve(result)
      })
    })
  }

  /**
     * 自定义查询
     * @param sql
     * @returns {Promise<any>}
     */
  queryStr (sqlMod) {
    const { pool } = this
    return new Promise((resolve, reject) => {
      pool.query(sqlMod, function (error, result) {
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      })
    })
  }
}
module.exports = new MySql()
