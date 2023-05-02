import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Views/HomeMainView.vue'
import AdminView from '../Views/AdminView.vue'
import state from '../store/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      beforeEnter: (to, from, next) => {
        if (state.isAuthenticated) {
          next()
        } else {
          next('/')
        }
      }
    }
  ]
})

export default router
