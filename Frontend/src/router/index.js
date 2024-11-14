import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ParkView from '../views/ParkView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import PlaceView from '@/views/PlaceView.vue'
import NotificationView from '@/views/NotificationView.vue'
import ReportsView from '@/views/ReportsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/parks/:parkId',
      name: 'park',
      component: ParkView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path:"/places/:placeId",
      name:"place",
      component:PlaceView
    },
    {
      path:"/notifications",
      name:"notification",
      component:NotificationView
    },
    {
      path:"/reports/:parkId",
      name:"reports",
      component:ReportsView
    }
  ]
})

export default router
