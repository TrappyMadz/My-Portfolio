import AbouteMe from '@/views/AbouteMe.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'À propos de moi',
      component: AbouteMe,
    },
  ],
})

export default router
