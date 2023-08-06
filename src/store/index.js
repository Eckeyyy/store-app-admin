import Vue from 'vue';
import Vuex from 'vuex';
import { setUserCookies, removeUserCookies, getUserCookies } from '../utils/cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: getUserCookies()
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
    }
  },
  actions: {
    setUserInfo({ commit }, userInfo) {
      commit('setUser', userInfo)
      setUserCookies(userInfo)
    },
    userLogout({ commit }) {
      commit('logout')
      removeUserCookies()
    }
  },
  modules: {
  },
});
