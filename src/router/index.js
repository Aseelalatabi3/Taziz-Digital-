import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Programs from '../views/Programs.vue'  // المكون الجديد
import Events from '../views/Events.vue'
import Resources from '../views/Resources.vue' // سابقاً Library
import Stories from '../views/Stories.vue'    // سابقاً Success
import Volunteer from '../views/Volunteer.vue' // سابقاً Booking

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/programs',
    name: 'Programs',
    component: Programs
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  },
  {
    path: '/stories',
    name: 'Stories',
    component: Stories
  },
  {
    path: '/volunteer',
    name: 'Volunteer',
    component: Volunteer
  },
  // روابط احتياطية للتوافق مع الروابط القديمة
  {
    path: '/calculator',
    redirect: '/programs'
  },
  {
    path: '/library',
    redirect: '/resources'
  },
  {
    path: '/success',
    redirect: '/stories'
  },
  {
    path: '/booking',
    redirect: '/volunteer'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router