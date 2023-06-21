import { defineStore } from 'pinia'
import axios from 'axios'
export const useAuthStore = defineStore('auth', {
  state: () => ({
    authUser: null,
    authErrors: [],
    authStatus: null
  }),
  getters: {
    user: (state) => state.authUser,
    errors: (state) => state.authErrors,
    status: (state) => state.authStatus
  },
  actions: {
    async getToken() {
      await axios.get('/sanctum/csrf-cookie')
    },
    async getUser() {
      await this.getToken()
      const data = await axios.get('/api/user')
      this.authUser = data.data
    },
    async handleLogin(data) {
      this.authErrors = []
      try {
        await this.getToken()
        await axios.post('/login', {
          email: data.email,
          password: data.password
        })
        this.route.push('/')
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors
        }
      }
    },
    async handleRegister(data) {
      this.authErrors = []
      try {
        await this.getToken()
        await axios.post('/register', {
          name: data.name,
          email: data.email,
          password: data.password
        })
        this.route.push('/')
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors
        }
      }
    },
    async handleLogout(data) {
      await this.getToken()
      await axios.post('/logout')
      this.authUser = null
      this.route.push('/login')
    },
    async handleForgotPassword(email) {
      this.authErrors = []
      try {
        await this.getToken()
        const res = await axios.post('/forgot-password', {
          email: email
        })
        this.authStatus = res.data.status
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors
        }
      }
    },
    async handleResetPassword(data) {
      this.authErrors = []
      try {
        await this.getToken()
        await axios.post('/reset-password', {
          token: data.token,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation
        })
        this.route.push('/')
      } catch (error) {
        if (error.response.status === 422) {
          this.authErrors = error.response.data.errors
        }
      }
    }
  }
})
