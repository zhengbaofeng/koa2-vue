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
            <p class="name">{{ item.name }}</p>
            <spn>{{ item.discountedPrice }}<small>{{ item.price }}</small></spn>
            <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
              购买
            </van-button>
          </li>
        </ul>
      </div>
    </div>
    <div class="introduction">
      <p class="title">商户介绍</p>
      <p>ahdahsdhashdkasj</p>
    </div>
  </div>
</template>

<script>

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
      picList: []
    }
  },
  components: {
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
  box-sizing: border-box;
  position: relative;
  padding: 0px 0px 0px 100px;
  height: 100px;
  .logo{
    position: absolute;
    left: 0px;
    top: 50%;
    width: 100px;
    height: 100px;
    transform: translate(0px, -50%);
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
    border: 1px solid #ddd;
    font-size: 16px;
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
