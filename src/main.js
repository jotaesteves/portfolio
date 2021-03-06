import Vue from 'vue'
import App from './App.vue'

import Buefy from 'buefy'
import router from './router'
import store from './store'

import apolloProvider from './vue-apollo'

import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
//import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage)
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
