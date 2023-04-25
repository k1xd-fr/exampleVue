import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Views/HomeMainView.vue'
import AdminView from "../Views/AdminView.vue"
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: AdminView
    }
  ]
})

export default router
