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
        <div class="thumbnail-box" v-for="goods in goodsList" :key="goods.name" @click="getGoodsDetails(goods)">
          <van-image
            width="100%"
            height="auto"
            :src="goods.thumbnail"
          />
        </div>
      </div>
    </div>
    <!-- <div class="goods-list">
      <van-grid :column-num="2" :gutter="10" :border="false">
        <van-grid-item v-for="goods in goodsList" :key="goods.name" @click="getGoodsDetails(goods)">
          <div>
            <div class="thumbnail-box">
              <van-image
                width="100%"
                height="auto"
                :src="goods.thumbnail"
              />
            </div>
            <p class="name">{{ goods.name }}</p>
            <span class="price">$  {{ goods.price }}</span>
          </div>
        </van-grid-item>
      </van-grid>
    </div> -->
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
        codle: '010',
        city: '北京'
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
    that.getBannerList()
    that.getHotGoods()
  },
  mounted () {
    this.$setgoindex()
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
      common.banner({
        chid: 1
      }).then(res => {
        //  测试数据
        res = [
          {
            img: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
            txt: '朝阳大悦城',
            type: '1',
            advId: '102',
            url: ''
          },
          {
            img: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
            txt: '三里屯',
            type: '1',
            advId: '101',
            url: ''
          },
          {
            img: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
            txt: '王府井',
            type: '0',
            advId: '',
            url: 'https://hfive.xiaomyc.com/xxx/xxx'
          }
        ]
        that.bannerList = res
      })
    },
    /**
     * @description: 获取热门商品列表数据
     * @param {*}
     * @return {*}
     */
    getHotGoods () {
      //  const that = this
      goods.getHotList({
        chid: 1
      }).then(res => {
        //  测试数据
        console.log(res)
        res = [
          {
            id: 91, // 商品id
            img: 'https://cdn.hfive.xiaomyc.com/banner_123.png',
            ticketName: '50元代金券',
            salePrice: 45.00,
            url: 'https://hfive.xiaomyc.com/public/ticket?chid=1&goodsid=9&cityId=010'
          }
        ]
      })
    },
    /**
     * @description: 获取商品详细信息
     * @param {*}
     * @return {*}
     */
    getGoodsDetails (val) {
      const that = this
      that.$router.push({
        name: 'GoodsDetails',
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
