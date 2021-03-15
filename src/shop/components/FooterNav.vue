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
 * @Description: 底部导航菜单
 * @FilePath: /koa-vue/src/components/FooterNav.vue
 -->
<template>
  <div class="footer-nav">
    <van-tabbar v-model="active"  @change="navChange">
      <van-tabbar-item :name="item.name" :icon="item.icon" v-for="item in navList" :key="item.text">{{ item.text }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'FooterNav',
  props: ['index'],
  data () {
    return {
      active: null,
      navList: [
        {
          icon: 'home-o',
          name: 'home',
          text: '首页'
        },
        {
          icon: 'apps-o',
          name: 'brand',
          text: '全部'
        },
        {
          icon: 'contact',
          name: 'user',
          text: '我的'
        }
      ]
    }
  },
  created () {
    const that = this
    that.active = that.index
  },
  methods: {
    navChange (e) {
      const that = this
      let path = ''
      switch (e) {
        case 'home':
          path = '/'
          break
        case 'brand':
          path = '/brandList'
          break
        case 'user':
          path = '/userOrder'
          break
        default:
          break
      }
      that.$router.push({
        path
      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
