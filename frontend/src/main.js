import './assets/main.css'
import { createPinia } from 'pinia'
import './axios'
import { createApp } from 'vue'
import App from './App.vue'
import route from './route'

const pinia = createApp()
const app = createApp(App)
app.use(pinia)
app.use(route)

app.mount('#app')
