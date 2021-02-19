<template>
  <div id="home">
    后台首页
  </div>
</template>

<script>
import { goods } from 'adminApi'
export default {
  name: 'Home',
  data () {
    return {
      search: {
        key: ''
      },
      classList: [
        {
          text: '分类1'
        },
        {
          text: '分类2'
        },
        {
          text: '分类3'
        }
      ],
      goodsList: []
    }
  },
  components: {
  },
  created () {
    const that = this
    that.getListData()
  },
  mounted () {
  },
  methods: {
    /**
     * @description: 获取列表数据
     * @param {*}
     * @return {*}
     */
    getListData () {
      const that = this
      goods.list().then(res => {
        that.goodsList = res
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
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
