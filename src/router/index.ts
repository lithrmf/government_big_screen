import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      meta:{
        name:'控制台'
      },
      component: () => import('../views/app-index.vue'),
    }
  ],
})

export default router
