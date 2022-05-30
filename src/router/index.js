import { createRouter, createWebHistory } from 'vue-router'
import layout from '../layout/layout.vue'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children:[
      {
        path: '/HomeView',
        name: 'HomeView',
        component: () => import( '../views/HomeView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
