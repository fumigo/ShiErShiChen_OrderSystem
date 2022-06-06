import { createRouter, createWebHistory } from 'vue-router'
import layout from '../layout/layout.vue'


const routes = [
  {
    path: '/',
    name: 'layout',
    component: layout,
    children:[
      {
        path: '/employee',
        name: 'Employee',
        component: () => import( '../views/Employee')
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import( '../views/Order')
      },
      {
        path: '/food',
        name: 'Food',
        component: () => import( '../views/Food')
      },
      {
        path: '/classification',
        name: 'Classification',
        component: () => import( '../views/Classification')
      },
      {
        path: '/package',
        name: 'Package',
        component: () => import( '../views/Package')
      },
      {
        path: '/managerperson',
        name: 'ManagerPerson',
        component: () => import( '../views/ManagerPerson')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/login.vue')
  },
  {
    path: '/customer-login',
    name: 'customer-login',
    component: () => import( '../views/customer-login.vue')
  },
  {
    path: '/customer-index',
    name: 'customer-index',
    component: () => import( '../views/customer-index.vue')
  },
  {
    path: '/customer-address',
    name: 'customer-address',
    component: () => import( '../views/customer-address.vue')
  },
  {
    path: '/customer-address-add',
    name: 'customer-address-add',
    component: () => import( '../views/customer-address-add.vue')
  },
  {
    path: '/customer-person',
    name: 'customer-person',
    component: () => import( '../views/customer-person.vue')
  },
  {
    path: '/customer-pay',
    name: 'customer-pay',
    component: () => import( '../views/customer-pay.vue')
  },
  {
    path: '/customer-store',
    name: 'customer-store',
    component: () => import( '../views/customer-store.vue')
  },
  {
    path: '/customer-order',
    name: 'customer-order',
    component: () => import( '../views/customer-order.vue')
  },
  {
    path: '/customer-store',
    name: 'customer-store',
    component: () => import( '../views/customer-store')
  },
  {
    path: '/customer-delivery',
    name: 'customer-delivery',
    component: () => import( '../views/customer-delivery.vue')
  },
  {
    path: '/customer-search',
    name: 'customer-search',
    component: () => import( '../views/customer-search.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
