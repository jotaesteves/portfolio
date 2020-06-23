import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Buefy from 'buefy'

import VueTypedJs from 'vue-typed-js'
import VueScrollTo from 'vue-scrollto'

import 'animate.css'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'

Vue.use(Buefy)
Vue.use(VueFullPage)
Vue.use(VueTypedJs)
Vue.use(VueScrollTo)

Vue.config.productionTip = process.env === 'production' ? false : true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
