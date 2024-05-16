// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
// import Catalog from '../views/Catalog.vue'
// import Quote from '../views/Quote.vue'
// import Orders from '../views/Orders.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
//   {
//     path: '/catalog',
//     name: 'Catalog',
//     component: Catalog
//   },
//   {
//     path: '/quote',
//     name: 'Quote',
//     component: Quote
//   },
//   {
//     path: '/orders',
//     name: 'Orders',
//     component: Orders
//   },
  // outras rotas vão aqui
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router