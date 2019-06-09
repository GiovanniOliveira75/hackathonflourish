import Vue from 'vue'
import Router from 'vue-router'
import AuthLayout from '@/layout/AuthLayout'

Vue.use(Router)

const router = new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '1',
      component: () => import('./views/1.vue')
    },
    {
      path: '/2',
      name: '2',
      component: () => import('./views/2.vue')
    },
    {
      path: '/3',
      name: '3',
      component: () => import('./views/3.vue')
    },
    {
      path: '/4',
      name: '4',
      component: () => import('./views/4.vue')
    },
    {
      path: '/5',
      name: '5',
      component: () => import('./views/5.vue')
    },
    {
      path: '/6',
      name: '6',
      component: () => import('./views/6.vue')
    },
    {
      path: '/7',
      name: '7',
      component: () => import('./views/7.vue')
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('./views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('./views/Register.vue')
        }
      ]
    }
  ]
})

export default router;