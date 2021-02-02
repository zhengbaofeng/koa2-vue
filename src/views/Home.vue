<template>
  <div class="home">
    <van-form @submit="onSubmit">
      <van-field
        v-model="account"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { user } from 'api'
export default {
  name: 'Home',
  data () {
    return {
      account: '001',
      password: '111111'
    }
  },
  components: {
  },
  mounted () {
    const that = this
    console.log(that.$store.getters.name)
  },
  methods: {
    /**
     * @description: 登陆
     * @param {*}
     * @return {*}
     */
    onSubmit () {
      const that = this
      user.login({
        account: that.account,
        password: that.password
      }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
