import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home
      component:()=>import('./views/Home.vue')//路由懒加载 
    },
    {
      path: '/list',
      name: 'list',
      // component: Home
      component:()=>import('./views/List.vue')//路由懒加载 
    },
    {
      path: '/cart',
      name: 'cart',
      // component: Home
      component:()=>import('./views/Cart.vue')//路由懒加载 
    },
    {
      path: '/detail',
      name: 'detail',
      // component: Home
      component:()=>import('./views/Detail.vue')//路由懒加载 
    }, {
      path: '/profile',
      name: 'profile',
      // component: Home
      component:()=>import('./views/Profile.vue')//路由懒加载 
    },
    {
      path:"/*",
      redirect:"/"
    }
   
  ]
})
