import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '@/views/LandingPageView.vue'
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
      name: 'landingPage',
      component: LandingPageView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/parks/:parkId',
      name: 'park',
      component: ParkView,
      meta: {
        requiresAuth: true
      }
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
      component:PlaceView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path:"/notifications",
      name:"notification",
      component:NotificationView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path:"/reports/:parkId",
      name:"reports",
      component:ReportsView,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && localStorage.getItem("loggedIn") !== "true") {
    next("/login");
  } else {
    next();
  }
});

export default router