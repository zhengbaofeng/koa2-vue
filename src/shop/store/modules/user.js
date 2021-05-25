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
 * @Date: 2021-02-02 14:41:10
 * @LastEditors: 郑宝丰
 * @LastEditTime: 2021-02-02 14:41:10
 * @Description: 文件描述
 * @FilePath: /koa-vue/src/store/modules/user.js
 */

const state = {
  userInfo: {
    uid: '',
    token: ''
  },
  location: {
    pinyin: '',
    abbr: '',
    name: '',
    lat: '',
    lon: '',
    cityId: ''
  },
  token: ''
}
const getters = {
  userInfo: state => state.userInfo,
  location: state => state.location,
  token: state => state.token
}
const actions = {

}
const mutations = {
  setUserInfo: (state, value) => { state.userInfo = value },
  setLocation: (state, value) => { state.location = value },
  setToken: (state, value) => { state.token = value }
}

export default {
  state,
  getters,
  actions,
  mutations
}
