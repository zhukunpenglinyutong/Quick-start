import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          component: () => import('./components/login.vue')
        },
        {
          path: '/register',
          component: () => import('./components/register.vue')
        },
        {
          path: '/main',
          component: () => import('./components/main.vue')
        }
      ]
    }
  ]
})
