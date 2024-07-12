import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import SpencerPlus from './views/SpencerPlus.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/spencer-plus',
    name: 'SpencerPlus',
    component: SpencerPlus
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router