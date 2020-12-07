import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
     component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
	path:'/register',
	name:'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
  	path:'/product',
  	name:'Product',
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
