<template>
  <div id="home">
    后台首页
    <Button type="primary" to="/login">登录</Button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
  },
  created () {
    const that = this
    console.log(that.$store.state)
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
</style>
