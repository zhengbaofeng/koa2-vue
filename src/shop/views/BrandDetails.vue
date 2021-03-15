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
          :src="brand.logo"
        />
      </div>
      <p class="label">{{ brand.name }}</p>
    </div>
    <div class="main">
      <div class="card-box">
        <ul>
          <li class="box" v-for="(item, index) in brand.cardList" :key="index">
            <div class="info">
              <p class="name">{{ item.name }}</p>
              <span>
                {{ item.discountedPrice }}
                <small>{{ item.price }}</small>
              </span>
            </div>
            <div class="btn-box">
              <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
                购买
              </van-button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="introduction">
      <p class="title">商户介绍</p>
      <p>ahdahsdhashdkasj</p>
    </div>
    <bottom-footer :btn="footerBtn"/>
  </div>
</template>

<script>

import BottomFooter from '../components/Footer.vue'
import { goods } from 'shopApi'
export default {
  name: 'BrandDetails',
  data () {
    return {
      brand: {
        logo: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
        name: '星爸理科',
        cardList: [
          {
            name: '星爸爸打折卷',
            discountedPrice: '200',
            price: '300'
          }
        ]
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
    that.getGoodsDetails(that.$route.query.id)
  },
  methods: {
    /**
     * @description: 获取商品详情
     * @param {*}
     * @return {*}
     */
    getGoodsDetails (id) {
      if (!id) return
      const that = this
      goods.details({ id: 5 }).then(res => {
        that.picList = res.pic.split('|')
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
