
<template>
  <div id="goodsDetails">
    <ul>
      <li class="info-box">
        <van-image
          class="logo"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="info">
          <label class="name">{{ goods.name }}</label>
          <span class="validity">{{ goods.validity }}</span>
        </div>
      </li>
      <li>
        <van-cell-group>
          <van-field label="数量">
            <template #extra>
              <van-stepper v-model="goods.number" />
            </template>
          </van-field>
        </van-cell-group>
      </li>
      <li>
        <van-cell-group>
          <van-field label="合计">
            <template #extra>
              <span class="total">{{ total }}</span>
            </template>
          </van-field>
        </van-cell-group>
      </li>
      <li class="desciption-box">
        <div v-html="goods.desciption"></div>
      </li>
    </ul>
    <bottom-footer :btn="footerBtn"/>
  </div>
</template>

<script>
import BottomFooter from '../components/Footer.vue'
//  import { goods } from 'shopApi'
export default {
  name: 'GoodsDetails',
  data () {
    const that = this
    return {
      loading: false,
      goods: {
        name: 'hahaha',
        validity: '2018-23-23',
        number: 1,
        price: 10,
        logo: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
        desciption: '<p>asdasd</p>'
      },
      footerBtn: [
        {
          label: '购买',
          type: 'info',
          loading: false,
          callback: that.buy
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
  #goodsDetails{
    text-align: left;
    span{
      font-size: 14px;
    }
    label{
      font-size: 16px;
      display: block;
    }
    .info-box{
      display: -webkit-flex; /* Safari */
      display: flex;
      justify-content: flex-start;
      align-items:center;
      .logo{
        display: inline-block;
        width: 80px;
        height: 80px;
        margin-right: 10px;
      }
      .validity{
        font-size: 14px;
        color: #949494;
        &::before{
          content: '有效期：';
        }
      }
    }
    .total{
      color: rgb(255, 78, 78);
    }
    .desciption-box{
      font-size: 12px;
      &::before{
        content: '使用说明：';
        display: block;
      }
    }
  }
</style>
