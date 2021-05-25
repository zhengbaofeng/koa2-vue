import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  //  状态
  state: {
    chid: 'bob01'
  },
  mutations: {
  },
  //  动作获取数据
  actions: {
  },
  //  过滤处理state数据
  getters: {
    chid: (state) => state.chid
  },
  modules: {
    user
  }
})
