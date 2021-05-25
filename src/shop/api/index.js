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
import qs from 'qs'
const url = require('./url')
const axiosConfig = require('./axios')
const axios = require('axios')

//  axios配置拦截器
axiosConfig(axios, Notify)
//  公共接口
export const common = {
  /**
   * @description:  1.1.3、获取首页banner 信息
   * @param {*} chid 渠道号
   * @return {*}
   */
  getBanner: (params) => {
    return axios.get(url.getBannnerList, { params }).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description:  1.1.3.1、获取首页广告位信息
   * @param {*} chid 渠道号
   * @return {*}
   */
  getAdvertisingList: (params) => {
    return axios.get(url.getAdvertisingList, { params }).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description:  1.1.2、获取城市列表
   * @param {*} type  hot:热门城市 group:首页所有城市
   * @return {*}
   */
  getCity: (params) => {
    return axios.get(url.getCityList, { params }).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description:  1.1.1、获取定位城市信息
   * @param {*} cityname  城市名称
   * @return {*}
   */
  getCityInfo: (params) => {
    return axios.get(url.getCityInfo, { params }).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description: 1.1.5、获取商圈清单列表
   * @param {*} chid 渠道号
   * @return {*}
   */
  getDistrictList: (params) => {
    return axios.get(url.getDistrictList, { params }).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description: 1.1.6、获取筛选条件
   * @param {*} chid 渠道号
   * @return {*}
   */
  getTicketType: (params) => {
    return axios.get(url.getTicketType, { params }).then((res) => {
      return res.data || ''
    })
  }
}
export const shop = {
  /**
   * @description:  1.2.1、获取商铺列表
   * @param {*} chid 渠道号
   * @param {*} latitude 纬度
   * @param {*} longitude 经度
   * @param {*} offset 页码
   * @param {*} limit 分页大小
   * @param {*} keyword 关键字
   * @param {*} ordercol 排序规则：1 距离最近，2 人气最高（已作废）
   * @param {*} foodType 品类
   * @param {*} cityId 城市id 或者城市名称
   * @param {*} districID 行政分区编号
   * @param {*} blockId 商圈ID
   * @param {*} tags 筛选条件: ['xxx', 'xxx']
   * @return {*}
   */
  getList: (params) => {
    return axios.post(url.getShopsList, params).then((res) => {
      return res.data || ''
    })
  },
  //  1.2.2 未知
  /**
   * @description: 1.2.3、店铺详细信息
   * @param {*} id  店铺id
   * @param {*} chid  渠道号
   * @param {*} cityId  城市id
   * @return {*}
   */
  getDetails: (params) => {
    return axios.get(url.getShopDetails, { params }).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description: 1.2.4、票券详情
   * @param {*} chid  渠道号
   * @param {*} goodsid  商品id
   * @param {*} cityId  城市id
   * @param {*} longitude  经度
   * @param {*} latitude  纬度
   * @return {*}
   */
  getTicketDetails: (params) => {
    return axios.get(url.getTicketDetails, { params }).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description: 1.2.5、获取热门活动（商圈）信息
   * @param {*} advid
   * @return {*}
   */
  getPopularActivities: (params) => {
    return axios.get(url.getPopularActivities, { params }).then((res) => {
      return res.data || ''
    })
  }

}

export const user = {
  /**
   * @description: 1.3.0、首页入口接口（不登录，只做跳转）
   * @param {*} user_id 用户id
   * @param {*} user_type 用户类型 0-正式用户 1-游客
   * @return {*}
   */
  login: (params) => {
    return axios.post(url.login, params).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description: 1.3.0、获取用户token
   * @param {*} user_id 用户ID
   * @param {*} user_type 用户类型：0正式用户 1游客
   * @return {*}
   */
  getToken: (params) => {
    return axios.get(url.getUserToken, { params }).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description: 1.3.1、订单确认接口
   * @param {*} goodsid 商品ID
   * @param {*} number 商品数量
   * @param {*} chid 渠道号
   * @param {*} token 用户toke
   * @return {*}
   */
  confirmOrder: (params) => {
    return axios.post(url.confirmOrder, params).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description: 1.3.2、订购接口(跳支付页之前)
   * @param {*} seqid 临时订单号，服务端保存15分钟
   * @param {*} token 用户token
   * @param {*} phone 用户手机号码
   * @param {Array} coupons 优惠卷 使用抵扣券时传参，不使用时参数名称和值均不传
   * @param {string} coupons[0].couponCode 优惠优惠券code
   * @param {string} coupons[0].deValue 前端计算优惠金额
   * @return {*}
   */
  confirmPurchase: (params) => {
    return axios.post(url.confirmPurchase, params).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description: 1.3.3、抵扣券核销(跳支付页之前)
   * @param {*} spid 订单ID
   * @param {*} goodsId 商品ID
   * @param {*} couponCode 优惠券code
   * @param {*} userId 用户ID
   * @param {*} type 优惠券类型 type=0（饭票），type=1（神州专车），type=2（视频卡）
   * @param {*} amount 金额
   * @return {*}
   */
  useCoupon: (params) => {
    return axios.post(url.useCoupon, params).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description: 1.3.3.1、我的订单列表
   * @param {*} chid 渠道号
   * @param {*} type 订单类型 0-全部(订单), 1待支付(订单)，
   * @param {*} token 用户token
   * @return {*}
   */
  orderList: (params) => {
    return axios.post(url.orderList, qs.stringify(params)).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description: 1.3.3.4、订单详情
   * @param {*} chid 渠道号
   * @param {*} orderId 订单ID
   * @param {*} token 用户token
   * @return {*}
   */
  orderDetails: (params) => {
    return axios.post(url.orderDetails, qs.stringify(params)).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description: 1.3.3.2、我的券码列表
   * @param {*} chid 渠道号
   * @param {*} type 优惠券类型 2可使用(券码，已支付且未过期)，3已失效(券码，包括已过期、退款中、已退款)
   * @param {*} token 用户token
   * @return {*}
   */
  couponList: (params) => {
    return axios.post(url.couponList, qs.stringify(params)).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description: 1.3.3.3、已购优惠券详情
   * @param {*} chid 渠道号
   * @param {*} ticketId 优惠券ID
   * @param {*} token 用户token
   * @return {*}
   */
  couponDetails: (params) => {
    return axios.post(url.couponDetails, qs.stringify(params)).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description: 1.4.1、用户领券接口
   * @param {*} chid 渠道号
   * @param {*} cpnid 优惠券ID
   * @param {*} token 用户token
   * @return {*}
   */
  getCoupons: (params) => {
    return axios.post(url.getCoupons, qs.stringify(params)).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description: 1.4.2、用户优惠券查询接口（我的优惠券）
   * @param {*} chid 渠道号
   * @param {*} uid 用户ID
   * @param {*} type 可选参数，为空时返回我的全部优惠券；1可使用，2已失效
   * @return {*}
   */
  userCouponList: (params) => {
    return axios.get(url.userCouponList, { params }).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description: 1.4.3、用户优惠券详情
   * @param {*} couponCode 优惠券码
   * @param {*} uid 用户ID
   * @return {*}
   */
  userCouponDetails: (params) => {
    return axios.get(url.userCouponDetails, { params }).then((res) => {
      return res.data || ''
    })
  }
}

export const goods = {
  /**
   * @description:  1.1.3.2、获取首页推荐商品信息
   * @param {*} chid 渠道号
   * @return {*}
   */
  getHotList: (params) => {
    return axios.get(url.getHotGoogs, { params }).then((res) => {
      return res.data || ''
    })
  },
  /**
   * @description: 1.1.4、获取菜品类别列表
   * @param {*} chid 渠道号
   * @return {*}
   */
  getFoodType: (params) => {
    return axios.get(url.getFoodType, { params }).then((res) => {
      return res.data || ''
    })
  }
}
