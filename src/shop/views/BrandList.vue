
<template>
  <div id="brandList">
    <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <ul>
        <li class="box" v-for="(item, index) in brandList" :key="index" @click="getBrandDetails(item)">
          <van-image
            class="logo"
            :src="item.img"
          />
          <div class="info">
            <span class="name">{{ item.storeName }}</span>
            <span class="type">{{ item.foodType }}</span>
            <span class="coupon">{{ item.ticketss[0] ? item.ticketss[0].name : '' }}</span>
          </div>
        </li>
      </ul>
    </van-pull-refresh>

    <footer-nav index="brand" />
  </div>
</template>

<script>
import FooterNav from '../components/FooterNav.vue'
import { shop } from 'shopApi'
export default {
  name: 'BrandDetails',
  data () {
    return {
      loading: false,
      page: {
        offset: 1,
        limit: 20
      },
      brandList: [],
      footerBtn: []
    }
  },
  computed: {
  },
  components: {
    FooterNav
  },
  created () {
    const that = this
    //  获取商户/品牌列表
    that.getShopList()
  },
  methods: {
    /**
     * @description: 下拉刷新事件
     * @param {*}
     * @return {*}
     */
    onRefresh () {

    },
    /**
     * @description: 获取商户/品牌列表
     * @param {*}
     * @return {*}
     */
    getShopList (params) {
      const that = this
      if (!params) {
        const location = that.$store.getters.location
        params = {
          chid: that.$store.getters.chid,
          cityId: location.cityId,
          latitude: location.lat,
          longitude: location.lon,
          offset: that.page.offset,
          limit: that.page.limit
        }
      }
      that.loading = true
      shop.getList(params).then(res => {
        that.loading = false
        that.brandList = res
      }).catch(() => {
        that.loading = false
      })
    },
    /**
     * @description: 获取品牌详情信息
     * @param {*} params 商品详细信息
     * @return {*}
     */
    getBrandDetails (params) {
      const that = this
      that.$router.push({
        name: 'BrandDetails',
        query: {
          id: params.storeID
        }
      })
    },
    /**
     * @description:  够购买事件
     * @param {*}
     * @return {*}
     */
    buy () {
      const that = this
      that.$router.push({
        name: 'Order',
        prams: that.goods
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  #brandList{
    .box{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-bottom: 1Px solid #ddd;
      padding: 10px 15px;
    }
    .logo{
      width: 100px;
      height: 100px;
    }
    .info{
      font-size: 16px;
      padding: 0px 0px 0px 10px;
      span{
        display: block;
        text-align: left;
      }
    }

  }
</style>
