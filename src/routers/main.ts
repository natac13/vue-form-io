import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '../views/HomeView.vue'
import CreateProject from '../views/CreateProjectView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/create-project',
    component: CreateProject
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
