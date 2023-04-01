import { setupLayouts } from 'virtual:generated-layouts'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Vant from 'vant'
import './style.css'
import App from './App.vue'
import piniaInstall from './stores'
import generatedRoutes from '~pages'

import 'uno.css'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(Vant)
piniaInstall(app)

app.mount('#app')
