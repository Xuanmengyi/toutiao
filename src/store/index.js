import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  // 配置项
  // key:默认值是vuex
  // storage:存储的方式，默认值是本地存储
  // reducer:指定持久化哪些数据，函数，return一个对象，对象就作为存储的value
  // -参数state
  plugins: [
    createPersistedState({
      key: 'HEIMATOUTIAO_TOKEN',
      // storage: window.sessionStorage,
      reducer({ tokenObj, myChannels }) {
        return { tokenObj, myChannels }
      }
    })
  ],
  state: {
    tokenObj: {},
    myChannels: []
  },
  getters: {
    isLogin(state) {
      return !!state.tokenObj.token
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.tokenObj = token
    },
    SET_MY_CHANNEL(state, channels) {
      state.myChannels = channels
    }
  },
  actions: {},
  modules: {}
})
