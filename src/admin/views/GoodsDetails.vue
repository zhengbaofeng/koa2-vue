
<template>
  <div class="goodsDetails">
    123123
  </div>
</template>

<script>

import { goods } from 'adminApi'
export default {
  name: 'GoodsDetails',
  data () {
    return {
    }
  },
  components: {
  },
  created () {
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
