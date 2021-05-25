
<template>
  <div id="order">
    <div class="form-box">
      <van-cell-group>
        <van-field v-model="coupon.ticketName" label="商品名称" readonly input-align="right" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="coupon.salePrice" label="单价" readonly input-align="right" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="coupon.number" label="数量" readonly input-align="right" />
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
            <span class="payment">{{ order.isOffer === '2' ? total - order.discountAmount : total }}</span>
          </template>
        </van-field>
      </van-cell-group>
    </div>
    <bottom-footer :btn="footerBtn"/>
  </div>
</template>

<script>
import BottomFooter from '../components/Footer.vue'
import { user } from 'shopApi'
export default {
  name: 'couponDetails',
  data () {
    const that = this
    return {
      loading: false,
      coupon: {
        id: '',
        ticketName: '',
        salePrice: 0,
        number: 1
      },
      order: {
        isOffer: '1',
        coupon: '',
        phone: '',
        discountAmount: 0, //  优惠金额
        expireTime: '', // 最晚支付时间，timestamp
        seqId: '' // 临时订单号
      },
      footerBtn: [
        {
          label: '下单',
          type: 'info',
          loading: false,
          callback: that.confirm
        }
      ]
    }
  },
  computed: {
    total: {
      get () {
        const that = this
        return that.coupon.salePrice * that.coupon.number
      },
      set () {}
    }
  },
  components: {
    BottomFooter
  },
  created () {
    const that = this
    that.coupon = that.$route.query.coupon
    that.order = {
      ...that.order,
      ...that.$route.query.order
    }
  },
  methods: {
    /**
     * @description: 获取折扣信息
     * @param {*}
     * @return {*}
     */
    getDiscount () {
      const that = this
      if (!that.order.coupon) return
      user.useCoupon({
        seqid: that.order.seqId,
        goodsId: that.coupon.id,
        couponCode: that.order.coupon,
        userId: that.$store.getters.userInfo.uid,
        type: 0,
        amount: that.total
      }).then(res => {
        console.log(res)
      })
    },
    /**
   * @description:
   * @param {*}
   * @return {*}
   */
    confirm () {
      const that = this
      const params = {
        seqid: that.order.seqId,
        token: that.$store.getters.userInfo.token,
        phone: that.order.phone,
        coupons: []
      }
      if (that.order.isOffer === '2') {
        params.coupons = [{
          couponCode: that.order.coupon,
          deValue: that.total - that.order.discountAmount
        }]
      }
      user.confirmPurchase(params).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  #order{
    .form-box{
      margin-bottom: 15px;
    }
    .payment{
      color: rgb(255, 78, 78);
    }
  }
</style>
