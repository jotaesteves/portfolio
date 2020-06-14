import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
      path: "/",
      component: () => import(/* webpackChunkName: "home" */ '../components/Container.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/clients',
    name: 'Clients',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "clients" */ '../components/Clients.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
