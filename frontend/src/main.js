import './assets/main.css'
import { createPinia } from 'pinia'
import './axios'
import { createApp, markRaw } from 'vue'
import App from './App.vue'
import route from './route'

const pinia = createPinia()
pinia.use(({ store }) => {
  store.route = markRaw(route)
})
const app = createApp(App)
app.use(pinia)
app.use(route)

app.mount('#app')
app.config.devtools = true
