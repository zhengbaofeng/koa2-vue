<!--
商户明细页面
-->
<template>
  <div class="brandDetails">
    <div class="logo-box">
      <div class="logo">
        <van-image
          width="100%"
          height="100%"
          :src="brand.img"
        />
      </div>
      <p class="label">{{ brand.spName }}</p>
    </div>
    <div class="main">
      <div class="card-box">
        <ul>
          <li class="box" v-for="(item, index) in brand.tickets" :key="index">
            <div class="info">
              <p class="name">{{ item.ticketName }}</p>
              <span>
                {{ item.salePrice }}
                <small>{{ item.faceValue }}</small>
              </span>
            </div>
            <div class="btn-box">
              <!-- saleState 0是已售罄，1是确认订单，2是未开售，3是不可售 -->
              <van-button v-if="item.faceValue !== 1" @click="buy(item)" color="linear-gradient(to right, #ff6034, #ee0a24)">
                购买
              </van-button>
              <van-button disabled v-else>
                {{ item.faceValue ? '未开始' : '已售罄' }}
              </van-button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="introduction">
      <p class="title">商户介绍</p>
      <p v-html="brand.comments"></p>
    </div>
    <bottom-footer :btn="footerBtn"/>
  </div>
</template>

<script>

import BottomFooter from '../components/Footer.vue'
import { shop } from 'shopApi'
export default {
  name: 'BrandDetails',
  data () {
    return {
      brandId: '',
      brand: {
        storeCnt: '', // 【所在城市的】店铺数量
        hotValue: '', // 已售数量
        comments: '',
        img: '',
        spName: '',
        spid: '',
        storeName: '', // 分店名称
        foodType: '',
        telphone: '',
        city: '',
        district: '',
        blockName: '',
        adress: '',
        longitude: '',
        latitude: '',
        tickets: []
      },
      picList: [],
      footerBtn: []
    }
  },
  components: {
    BottomFooter
  },
  created () {
    const that = this
    that.brandId = that.$route.query.id
    that.getBrandDetails(that.brandId)
  },
  methods: {
    /**
     * @description: 获取商品详情
     * @param {*}
     * @return {*}
     */
    getBrandDetails (id) {
      if (!id) return
      const that = this
      const location = that.$store.getters.location
      shop.getDetails({
        id: that.brandId,
        chid: that.$store.getters.chid,
        cityId: location.cityId
      }).then(res => {
        that.brand = res
      })
    },
    /**
     * @description: 购买优惠券
     * @param {*} card  购买优惠券信息
     * @return {*}
     */
    buy (card) {
      const that = this
      that.$router.push({
        name: 'CouponDetails',
        query: card
      })
    }
  }
}
</script>
<style scoped lang="scss">
.logo-box{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  position: relative;
  height: 100px;
  .logo{
    width: 100px;
    height: 100%;
  }
  .label{
    box-sizing: border-box;
    font-size: 16px;
    text-align: left;
  }
}
.main{
  padding: 10PX;
  .box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ddd;
    border-radius: 3px;
    height: 80px;
    .info{
      padding: 0px 20px;
      font-size: 16px;
      text-align: left;
      span{
        small{
          color: rgb(238, 10, 36);
          text-decoration: line-through;
        }
      }
    }
    .btn-box{
      position: relative;
      padding: 15px 20px;
      border-left: 1px dashed #ddd;
      &::before{
        content: '';
        box-sizing: border-box;
        display: block;
        position: absolute;
        left: -5px;
        top: -15px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform:rotate(-90deg);
        border-left: 1px solid #ddd;
        background-color: #f9f9f9;
      }
      &::after{
        content: '';
        box-sizing: border-box;
        display: block;
        position: absolute;
        left: -5px;
        bottom: -15px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform:rotate(90deg);
        border-left: 1px solid #ddd;
        background-color: #f9f9f9;
      }
    }
    .van-button{
      height: 30px;
    }
  }
}
.introduction{
  p{
    font-size: 14px;
    color: #3d3d3d;
    &.title{
      font-size: 18px;
      color: #333;
    }
  }
}

</style>
