<template>
  <div id="home">
    <div class="search-box">
      <span class="city">{{ location.city }}</span>
      <div class="input" @click="onSearch"><van-icon name="search" />搜索</div>
    </div>
    <van-swipe :autoplay="5000" :show-indicators="false">
      <van-swipe-item v-for="(item, index) in bannerList" :key="index">
        <img v-lazy="item.img" @click="getBrandDetails"/>
      </van-swipe-item>
    </van-swipe>
    <div class="main">
      <div class="divider-box">
        <van-divider>今日推荐</van-divider>
      </div>
      <div class="bank-goods-list">
        <div class="thumbnail-box" v-for="goods in goodsList" :key="goods.name" @click="getCouponDetails(goods)">
          <van-image
            width="100%"
            height="auto"
            :src="goods.img" />
        </div>
      </div>
    </div>
    <footer-nav index="home" />
  </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'vant'
import { common, goods } from 'shopApi'
import FooterNav from '../components/FooterNav.vue'
Vue.use(Lazyload)
export default {
  name: 'Home',
  data () {
    return {
      location: {
        city: ''
      },
      bannerList: [],
      goodsList: []
    }
  },
  components: {
    FooterNav
  },
  created () {
    const that = this
    //  登录
    that.userLogin().then(res => {
      console.log(that.$store.getters.userInfo)
    })
    //  获取位置信息
    that.getLocation().then(res => {
      that.location.city = res.name || '北京'
    }).catch(err => {
      console.log(err)
    })
    //  获取banner
    that.getBannerList()
    //  获取热门商品
    that.getHotGoods()
    //  获取首页广告信息
    that.getAdvertisingList()
  },
  mounted () {
    const that = this
    //  设置返回index
    that.$setgoindex()
  },
  methods: {
    /**
     * @description:搜索事件
     * @param {*}
     * @return {*}
     */
    onSearch () {
      const that = this
      that.$router.push({
        name: 'Search'
      })
    },
    /**
     * @description: 获取banner数据
     * @param {*}
     * @return {*}
     */
    getBannerList () {
      const that = this
      common.getBanner({
        chid: that.$store.getters.chid
      }).then(res => {
        that.bannerList = res
      })
    },
    /**
     * @description: 获取首页广告位
     * @param {*}
     * @return {*}
     */
    getAdvertisingList () {
      const that = this
      common.getAdvertisingList({
        chid: that.$store.getters.chid
      }).then(res => {})
    },
    /**
     * @description: 获取热门商品列表数据
     * @param {*}
     * @return {*}
     */
    getHotGoods () {
      const that = this
      goods.getHotList({
        chid: that.$store.getters.chid
      }).then(res => {
        //  测试数据
        that.goodsList = res
      })
    },
    /**
     * @description: 获取商品详细信息
     * @param {*}
     * @return {*}
     */
    getCouponDetails (val) {
      const that = this
      that.$router.push({
        name: 'CouponDetails',
        query: {
          id: val.id
        }
      })
    },
    /**
     * @description: 获取品牌详细信息
     * @param {*}
     * @return {*}
     */
    getBrandDetails (val) {
      // const that = this
      // that.$router.push({
      //   name: 'BrandDetails',
      //   query: {
      //     id: 123
      //   }
      // })
    }
  }
}
</script>
<style lang="scss" scoped>

#home{
    margin-top: 44px;
    margin-bottom: 70px;
    .search-box{
        box-sizing: border-box;
        position: fixed;
        width: 100%;
        top: 0px;
        left: 0px;
        padding: 5PX 5PX 5PX 60px;
        background-color: #fff;
        z-index: 1;
        .city{
            position: absolute;
            left: 10px;
            top: 50%;
            width: 50px;
            font-size: 16px;
            transform: translate(0px , -50%);
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
        .input{
            font-size: 16px;
            line-height: 34px;
            border-radius: 17px;
            padding: 0px 10px;
            text-align: left;
            color: #949494;
            background-color: #f3f3f3;
        }
        .van-icon{
            vertical-align: middle;
            margin-right: 5px;
        }
    }
    .main{
        background-color: #fff;
    }
    .divider-box{
        width: 50%;
        margin: 0px auto;
    }
    .van-swipe-item{
        height: 200px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    // .goods-list{
    //     padding-top: 10px;
    //     text-align: left;
    //     .thumbnail-box{
    //         .van-image{
    //             vertical-align: middle;
    //         }
    //     }
    //     .van-grid-item__content{
    //         padding-top: 12px;
    //         padding-bottom: 12px;
    //     }
    //     .name{
    //         display: -webkit-box;
    //         margin: 5Px 0px;
    //         font-size: 16px;
    //         -webkit-box-orient: vertical;
    //         -webkit-line-clamp: 2;
    //         overflow: hidden;
    //     }
    //     .price{
    //         font-size: 12px;
    //     }
    //     .van-grid-item__content{
    //         border-radius: 5px;
    //         box-shadow: 0px 0px 10px 1px rgba($color: #969696, $alpha: .1);
    //     }
    // }
    .bank-goods-list{
        padding: 0px 15px;
        .thumbnail-box{
            padding-bottom: 10px;
        }
    }
}
</style>
