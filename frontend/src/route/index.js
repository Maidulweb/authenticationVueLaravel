import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import Profile from '../components/Profile.vue'
import ForgotPassword from '../components/ForgotPassword.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/forgot-password', name: 'ForgotPassword', component: ForgotPassword }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
