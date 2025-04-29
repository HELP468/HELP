import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import UserDashboard from '../views/UserDashboard.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import TicketDetails from '../views/TicketDetails.vue'
import RegistrationSuccess from '@/views/RegistrationSuccess.vue'
import LoginSuccess from '@/views/LoginSuccess.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/userdashboard', component: UserDashboard },
  { path: '/admindashboard', component: AdminDashboard }, // You can redirect to AdminDashboard later based on role
  { path: '/tickets/:id', component: TicketDetails },
  {
    path: '/registration-success',
    name: 'RegistrationSuccess',
    component: RegistrationSuccess
  },
  {
    path: '/login-success',
    name: 'LoginSuccess',
    component: LoginSuccess
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  
  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router