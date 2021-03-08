
<template>
  <div id="login">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="用户名" prop="account">
            <Input v-model="formValidate.account" placeholder="请输入用户名" />
        </FormItem>
        <FormItem label="密码" prop="password">
            <Input v-model="formValidate.password" placeholder="请输入用户密码" />
        </FormItem>
        <FormItem>
            <Button type="primary" @click="onSubmit('formValidate')">提交</Button>
        </FormItem>
    </Form>
  </div>
</template>

<script>
import { user } from 'adminApi'
export default {
  name: 'login',
  data () {
    return {
      formValidate: {
        account: '001',
        password: '111111'
      },
      ruleValidate: {
        account: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
    /**
     * @description: 登陆
     * @param {*}
     * @return {*}
     */
    onSubmit (name) {
      const that = this
      that.$refs[name].validate((valid) => {
        if (valid) {
          user.login({
            account: that.formValidate.account,
            password: that.formValidate.password
          }).then(res => {
            that.$store.commit('setUserInfo', res)
            that.$router.push({ path: '/admin/home' })
          })
        }
      })
    }
  }
}
</script>
