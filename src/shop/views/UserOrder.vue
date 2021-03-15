
<template>
  <div id="userOrder">
    <van-tabs v-model="tabsIndex" sticky>
      <van-tab :title="item.label" v-for="(item, index) in tabs" :key="index">
        <ul>
          <li></li>
        </ul>
      </van-tab>
    </van-tabs>
    <footer-nav index="user" />
  </div>
</template>

<script>
import FooterNav from '../components/FooterNav.vue'
//  import { goods } from 'shopApi'
export default {
  name: 'userOrder',
  data () {
    return {
      loading: false,
      tabsIndex: 0,
      tabs: [
        {
          label: '全部',
          list: []
        },
        {
          label: '支付中',
          list: []
        },
        {
          label: '可使用',
          list: []
        },
        {
          label: '已实效',
          list: []
        }
      ]
    }
  },
  computed: {
  },
  components: {
    FooterNav
  },
  created () {
    const that = this
    that.getUserOrder()
  },
  methods: {
    /**
     * @description: 获取用户订单信息
     * @param {*}
     * @return {*}
     */
    getUserOrder () {
    }
  }
}
</script>
<style lang="scss" scoped>
  #userOrder{
  }
</style>
