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
 * @Date: 2021-02-01 15:36:22
 * @LastEditors: 郑宝丰
 * @LastEditTime: 2021-02-01 15:36:22
 * @Description: axios拦截器配置
 * @FilePath: /koa-vue/src/api/axiosConfig.js
 */

module.exports = (axios, notify) => {
  // 超时时间
  axios.defaults.timeout = 8000
  // http请求拦截器
  axios.interceptors.request.use(config => {
    return config
  }, error => {
    notify({
      type: 'danger',
      message: '请求超时'
    })
    return Promise.reject(error)
  })
  // http响应拦截器
  axios.interceptors.response.use(res => {
    switch (res.data.code) {
      case 0:
        //  平台返回正确码
        return res.data
      default:
        notify({
          type: 'danger',
          message: JSON.stringify(res.data.msg) || '未知错误'
        })
        return {
          code: res.data.code
        }
    }
  }, error => {
    if (error.message.includes('timeout')) {
      notify({
        type: 'danger',
        message: '接口访问超时请重试'
      })
    } else {
      notify({
        type: 'danger',
        message: error
      })
    }
    return {
      code: '00000'
    }
  })
}
