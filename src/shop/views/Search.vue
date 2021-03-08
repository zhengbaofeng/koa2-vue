<template>
  <div id="srarch">
    <div class="search-box">
      <div class="input">
        <van-icon name="search" />
        <van-field v-model="form.key" @keyup.enter="getListData" placeholder="搜索" />
      </div>
    </div>
    <div class="main">
      <div class="local-list" v-show="localList.length !== 0">
        <p class="title">最近搜索</p>
        <van-tag plain type="primary" v-for="(item, key) in localList" color="#737373" :key="'local' + key" @click="localHandle(item)">{{ item }}</van-tag>
      </div>
      <van-divider />
      <div class="brand-list">
        <ul>
          <li class="box" v-for="(brand, index) in brandList" @click="brandHandle(brand)" :key="'brand' + index">
            <div class="logo">
              <van-image
                width="100%"
                height="100%"
                :src="brand.pic"
              />
            </div>
            <div class="info">
              <p class="name">{{ brand.name }}</p>
              <p class="type">{{ brand.type }}</p>
              <p class="coupon">{{ brand.coupon }}</p>
            </div>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//  import { goods } from 'shopApi'
export default {
  name: 'Home',
  data () {
    return {
      localList: [],
      brandList: [
        {
          name: '星巴克',
          pic: 'https://img01.yzcdn.cn/vant/apple-1.jpg',
          type: '酒水饮料',
          coupon: '50元代金价'
        }
      ],
      form: {
        key: ''
      }
    }
  },
  components: {
  },
  created () {
    const that = this
    that.getLocalData()
  },
  mounted () {
  },
  methods: {
    /**
     * @description:  商户列表点击事件
     * @param {*} brand 商户信息
     * @return {*}
     */
    brandHandle (brand) {
      const that = this
      that.$router.push({
        path: '/brandDetails'
      })
    },
    /**
     * @description: 历史数据点击事件
     * @param {*}
     * @return {*}
     */
    localHandle (key) {
      const that = this
      that.form.key = key
      that.getListData()
    },
    /**
     * @description: 获取列表数据
     * @param {*}
     * @return {*}
     */
    getListData () {
      const that = this
      if (!that.form.key) return
      //  本地数据添加
      const local = JSON.parse(localStorage.getItem('BJBank_FoodSearch_LocalData') || '[]')
      //  删除数组重复元素
      local.remove(that.form.key)
      local.unshift(that.form.key)
      that.localList = local.slice(-5)
      localStorage.setItem('BJBank_FoodSearch_LocalData', JSON.stringify(that.localList))
      that.brandList = [
        {}
      ]
    },
    /**
     * @description: 获取本地查询历史
     * @param {*}
     * @return {*}
     */
    getLocalData (val) {
      const that = this
      that.localList = JSON.parse(localStorage.getItem('BJBank_FoodSearch_LocalData') || '[]')
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

#srarch{
  margin-top: 44px;
  margin-bottom: 70px;
  .search-box{
      box-sizing: border-box;
      position: fixed;
      width: 100%;
      top: 0px;
      left: 0px;
      padding: 5px;
      background-color: #fff;
      z-index: 1;
      .van-icon{
        position: absolute;
        top: 50%;
        left: 10px;
        transform: translate(5%, -50%);
        z-index: 1;
      }
      .input{
          height: 34px;
          line-height: 34px;
          padding: 0px 10px 0px 30px;
          border-radius: 17px;
          text-align: left;
          color: #949494;
          font-size: 16px;
          background-color: #f3f3f3;
      }
      .van-field{
        display: inline-block;
        vertical-align: middle;
      }
      .van-cell{
        padding: 0px;
        background-color: #f3f3f3;
      }
  }
  .main{
      background-color: #fff;
  }
  .local-list{
    text-align: left;
    padding: 10px;
    .title{
      padding-bottom: 5px;
      font-size: 14px;
      color: #737373;
    }
    .van-tag{
      display: inline-block;
      margin: 0PX 5PX 5PX 0px;
    }
  }
  .brand-list{
    padding: 5px;
    text-align: left;
    .box{
      position: relative;
      margin-bottom: 10px;
      padding-top: 10px;
    }
    .logo{
      position: absolute;
      left: 0px;
      top: 50%;
      width: 100px;
      height: 100px;
      transform: translate(0px, -50%);
    }
    .name{
      font-size: 18px;
    }
    .type{
      font-size: 14px;
      margin: 8px 0px;
      color: #848484;
    }
    .coupon{
      font-size: 14px;
      &::before{
        content: '买';
        display: inline-block;
        font-size: 12px;
        background-color: #ff7d7d;
        padding: 0px 3PX;
        margin-right: 5px;
        border-radius: 3px;
        color: #fff;
      }
    }
    .info{
      height: 100px;
      padding: 0px 0px 0px 110px;
    }
  }
}
</style>
