
<template>
  <div id="brandList">
    <ul>
      <li class="box" v-for="(item, index) in brandList" :key="index">
        <van-image
          class="logo"
          :src="item.pic"
        />
        <div class="info">
          <span class="name">{{ item.name }}</span>
          <span class="type">{{ item.type }}</span>
          <span class="coupon">{{ item.coupon }}</span>
        </div>
      </li>
    </ul>
    <footer-nav index="brand" />
  </div>
</template>

<script>
import FooterNav from '../components/FooterNav.vue'
//  import { goods } from 'shopApi'
export default {
  name: 'BrandDetails',
  data () {
    return {
      loading: false,
      brandList: [
        {
          name: '星巴克',
          pic: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          type: '咖啡/饮料',
          coupon: '星巴克50卷'
        },
        {
          name: '星巴克',
          pic: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          type: '咖啡/饮料',
          coupon: '星巴克50卷'
        },
        {
          name: '星巴克',
          pic: 'https://img01.yzcdn.cn/vant/cat.jpeg',
          type: '咖啡/饮料',
          coupon: '星巴克50卷'
        }
      ],
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
    that.getBrandList(that.$route.query.id)
  },
  methods: {
    /**
     * @description: 获取商品列表
     * @param {*}
     * @return {*}
     */
    getBrandList (id) {
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
