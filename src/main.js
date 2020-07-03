import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Buefy from 'buefy'

import VueTypedJs from 'vue-typed-js'
import VueScrollTo from 'vue-scrollto'
import VueNumber from 'vue-number-animation'

import 'animate.css'
/*
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
*/

import inViewportDirective from 'vue-in-viewport-directive'

/* Vue.use(VueFullPage) */
Vue.use(Buefy)
Vue.use(VueTypedJs)
Vue.use(VueScrollTo)
Vue.use(VueNumber)

Vue.directive('in-viewport', inViewportDirective)
Vue.directive('scroll-toggle-class', {
  inserted: (el, binding) => {
    const inView = rect =>
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);

    el.checkInView = () => el.classList.toggle(
      binding.arg,
      inView(el.getBoundingClientRect())
    );

    el.checkInView();
    window.addEventListener('scroll', el.checkInView);
  },
  unbind: (el) => {
    window.removeEventListener('scroll', el.checkInView);
  }
});


Vue.config.productionTip = process.env === 'production' ? false : true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
