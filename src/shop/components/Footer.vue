<!--
 *                   江城子 . 程序员之歌
 *
 *               十年生死两茫茫，写程序，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 *
 *               领导每天新想法，天天改，日日忙。
 *                   相顾无言，惟有泪千行。
 *               每晚灯火阑珊处，夜难寐，加班狂。
 *
 *
 * @Autor: 郑宝丰
 * @Version: 1.0
 * @Date: 2021-02-03 13:42:19
 * @LastEditors: 郑宝丰
 * @LastEditTime: 2021-02-03 13:42:19
 * @Description: 底部返回导航栏
 * @FilePath: /koa-vue/src/components/FooterNav.vue
 -->
<template>
  <div id="footer">
    <van-icon :name="icon" @click="returns"/>
    <div class="btn-box" :class="['layout-' + btn.length]">
      <van-button
      :loading="item.loading"
      round
      :type="item.type"
      :disabled="item.disabled"
      v-for="(item, index) in btn"
      :key="index"
      @click="item.callback">
        {{ item.label }}
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterNav',
  props: ['btn'],
  data () {
    return {
      icon: ''
    }
  },
  created () {
    const that = this
    that.active = that.index
    that.$setgoindex()
    if (that.$route.query.goindex === 'true') {
      that.icon = 'wap-home-open'
    } else {
      that.icon = 'arrow-left'
    }
  },
  mounted () {
  },
  methods: {
    /**
     * @description: 返回事件
     * @param {*}
     * @return {*}
     */
    returns () {
      const that = this
      if (that.$route.query.goindex === 'true') {
        that.$router.push('/')
      } else {
        that.$router.back(-1)
      }
    }
  }
}
</script>

<style scoped lang="scss">
#footer{
  background-color: #fff;
}
</style>
