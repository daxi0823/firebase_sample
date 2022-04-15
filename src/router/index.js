import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/clock',
    name: 'Clock',
    component: () => import('../views/Clock.vue')
  },
  {
    path: '/webapi',
    name: 'WebApi',
    component: () => import('../views/WebApi.vue')
  },
  {
    path: '/webapi-img',
    name: 'WebApiImg',
    component: () => import('../views/WebApiImg.vue')
  },
  {
    path: '/vuex',
    name: 'VuexComp',
    component: () => import('../views/VuexComp.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
