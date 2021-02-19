
<template>
  <div class="goodsDetails">
    <van-swipe class="goods-pic" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in picList" :key="item">
        <van-image fit="contain" :src="item" />
      </van-swipe-item>
    </van-swipe>

  </div>
</template>

<script>

import { goods } from 'shopApi'
export default {
  name: 'GoodsDetails',
  data () {
    return {
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
