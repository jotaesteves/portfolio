import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    themeSwitch: false,
  },
  mutations: {
    SET_THEME_SWITCH: (state, bool) => {
      localStorage.setItem('theme', bool)
      state.themeSwitch = bool
    } 
  },
  actions: {
    setThemeSwitch: (state, bool) => {
      state.commit("SET_THEME_SWITCH", bool)
    }
  },
  getters: {
    themeSwitch: state => {
      return state.themeSwitch
    },
    isDarkTheme: state => {
      return state.themeSwitch === true
    },
    isLightTheme: state => {
      return state.themeSwitch === false
    }
  },
  modules: {
  }
})
