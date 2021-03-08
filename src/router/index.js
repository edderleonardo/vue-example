import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Contact from '../views/Contact'
import Game from '../views/Game'
import Error404 from "../views/Error404";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contacto',
    component: Contact
  },
  {
    path: '/ps5/:name',
    component: Game
  },
  {
    path: '/:catchAll(.*)',
    component: Error404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
