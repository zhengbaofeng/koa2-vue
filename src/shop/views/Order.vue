
<template>
  <div id="order">
    <div class="form-box">
      <van-cell-group>
        <van-field v-model="goods.name" label="商品名称" readonly input-align="right" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="goods.price" label="单价" readonly input-align="right" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="goods.number" label="数量" readonly input-align="right" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="total" label="合计" readonly input-align="right" />
      </van-cell-group>
    </div>
    <div class="form-box">
      <van-cell-group>
        <van-field v-model="order.phone" placeholder="请输入手机号码"/>
      </van-cell-group>
      <van-cell-group>
        <van-field name="radio" label="优惠卷" input-align="right" >
          <template #input>
            <van-radio-group v-model="order.isOffer" direction="horizontal">
              <van-radio name="1">不使用</van-radio>
              <van-radio name="2">使用</van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </van-cell-group>
      <van-cell-group v-show="order.isOffer === '2'">
        <van-field v-model="order.coupon" label="优惠卷" input-align="right" @blur="getDiscount" placeholder="请输入优惠卷" />
      </van-cell-group>
      <van-cell-group>
        <van-field label="实付金额">
          <template #extra>
            <span class="payment">{{ order.discount }}</span>
          </template>
        </van-field>
      </van-cell-group>
    </div>
    <bottom-footer :btn="footerBtn"/>
  </div>
</template>

<script>
import BottomFooter from '../components/Footer.vue'
//  import { goods } from 'shopApi'
export default {
  name: 'GoodsDetails',
  data () {
    return {
      loading: false,
      goods: {
        name: 'hahaha',
        number: 2,
        price: 10,
        logo: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
        desciption: '<p>asdasd</p>'
      },
      order: {
        phone: '',
        coupon: '',
        isOffer: '1',
        discount: 0.8
      },
      footerBtn: [
        {
          label: '下单',
          type: 'info',
          loading: false,
          callback: ''
        }
      ]
    }
  },
  computed: {
    total: {
      get () {
        const that = this
        return that.goods.price * that.goods.number
      },
      set () {}
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
      console.log(id)
    },
    /**
     * @description: 获取折扣信息
     * @param {*}
     * @return {*}
     */
    getDiscount () {

    }
  }
}
</script>
<style lang="scss" scoped>
  #order{

    .payment{
      color: rgb(255, 78, 78);
    }
  }
</style>
