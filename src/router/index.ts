import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import BasketView from '../views/BasketView.vue';





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vakko-hakkinda-kurucu/',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Login/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/Basket/',
      name: 'basket',
      component: () => import('../views/BasketView.vue')
    },

  ]
})

export default router

