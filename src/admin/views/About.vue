<template>
  <div class="about">
    <van-button type="primary" @click="outLogin">退出登录</van-button>
    <van-button type="primary" @click="getUserData">获取用户数据</van-button>
    <van-button type="primary" @click="getGoodsList">获取商品列表数据</van-button>
    <van-popup v-model="goodsStateCom.show" round position="bottom">
    <van-picker
      show-toolbar
      :columns="goodsStateCom.data"
      @cancel="goodsStateCom.show"
      @confirm="onConfirm"
    />
  </van-popup>
  </div>
</template>

<script>

export default {
  name: 'About',
  data () {
    const that = this
    return {
      goodsStateCom: {
        show: false,
        data: [],
        confirm: that.goodsStateConfirm
      },
      form: {
        goodsState: null
      }
    }
  },
  components: {
  },
  created () {
    const that = this
    that.goodsStateCom.data = []
  },
  methods: {
    /**
     * @description: 商品状态下拉列表确定事件
     * @param {*}
     * @return {*}
     */
    goodsStateConfirm (value) {
      const that = this
      that.form.goodsState = value
      that.goodsStateCom.show = false
    },
    /**
     * @description: 获取商品信息
     * @param {*}
     * @return {*}
     */
    getGoodsList () {

    },
    /**
     * @description: 获取数据
     * @param {*}
     * @return {*}
     */
    getUserData () {
      const that = this
      that.$axios.post('/api/user/query').then((res) => {
        if (res.code === 0) {
          console.log(res)
        }
      }, (err) => {
        that.$notify({
          type: 'danger',
          message: err
        })
      })
    },
    /**
     * @description: 退出登录
     * @param {*}
     * @return {*}
     */
    outLogin () {
      const that = this
      that.$axios.get('/api/user/out').then((res) => {
        if (res.code === 0) {
          console.log(res)
        }
      }, (err) => {
        that.$notify({
          type: 'danger',
          message: err
        })
      })
    }
  }
}
</script>
