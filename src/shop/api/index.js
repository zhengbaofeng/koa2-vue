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
 * @Date: 2021-02-01 14:38:46
 * @LastEditors: 郑宝丰
 * @LastEditTime: 2021-02-01 14:38:47
 * @Description: 前端接口入口文件
 * @FilePath: /koa-vue/src/api/index.js
 */

import { Notify } from 'vant'
const url = require('./urlConfig')
const axiosConfig = require('./axiosConfig')
const axios = require('axios')
//  axios配置拦截器
axiosConfig(axios, Notify)
//  公共接口
export const common = {
  banner: (params) => {
    return axios.get(url.getBannnerList, { params }).then((res) => {
      return res.data || ''
    })
  }
}

export const goods = {
  getHotList: (params) => {
    return axios.get(url.getHotGoogs, { params }).then((res) => {
      return res.data || ''
    })
  }
}
