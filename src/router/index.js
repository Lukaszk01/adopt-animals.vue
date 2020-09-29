import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

import Cats from '../views/Cats.vue'
import Dogs from '../views/Dogs.vue'
import Pet from '../views/Pet.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Cats',
    name: 'Cats',
    component: Cats
  },
  {
    path: '/Dogs',
    name: 'Dogs',
    component: Dogs
  },
  {
    path: '/Pet/:species/:id',
    name: 'Pet',
    component: Pet
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
