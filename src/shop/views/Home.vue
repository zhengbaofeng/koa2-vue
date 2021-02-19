<template>
  <div id="home">
    <div class="search-box">
      <van-field v-model="search.key" placeholder="请输入用户名" />
    </div>
    <div class="class-box">
      <van-grid :column-num="3" :border="false">
        <van-grid-item v-for="item in classList" :key="item.text">
          {{ item.text }}
        </van-grid-item>
      </van-grid>
    </div>
    <div class="goods-list">
      <van-grid :column-num="2" :gutter="10" :border="false">
        <van-grid-item v-for="goods in goodsList" :key="goods.name" @click="getGoodsDetails(goods)">
          <div>
            <div class="thumbnail-box">
              <van-image
                width="100%"
                height="auto"
                :src="goods.thumbnail"
              />
            </div>
            <p class="name">{{ goods.name }}</p>
            <span class="price">$  {{ goods.price }}</span>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <footer-nav index="home" />
  </div>
</template>

<script>
import { goods } from 'shopApi'
import FooterNav from '../components/FooterNav.vue'
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
    FooterNav
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
