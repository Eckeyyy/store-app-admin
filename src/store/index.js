import Vue from 'vue';
import Vuex from 'vuex';
import { setUserCookies, removeUserCookies, getUserCookies } from '../utils/cookie';
import { login } from '../api/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: getUserCookies(),
    routes: []
  },
  mutations: {
    setUser(state, payload) {
      state.user = { ...payload }
    },
    logout(state) {
      state.user = {
        username: '',
        appKey: '',
        role: '',
        email: ''
      }
    },
    setRoutes(state, asyncRoutes) {
      state.routes = asyncRoutes
    }
  },
  actions: {
    //设置用户信息cookies
    setUserInfo({ commit }, userInfo) {
      commit('setUser', userInfo)
      setUserCookies(userInfo)
    },
    //用户登陆
    userLogin({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(res => {
          // console.log(res);
          commit('setUser', res)
          setUserCookies(res)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    //用户登出
    userLogout({ commit }) {
      commit('logout')
      removeUserCookies()
    },
    asyncSetRoutes({ commit }, asyncRoutes) {
      commit('setRoutes', asyncRoutes)
    }

  },
  modules: {
  },
});
