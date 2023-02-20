import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import naive from 'naive-ui'
import './style.css'
import App from './App.vue'
import piniaInstall from './stores'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./pages/Home.vue'),
    }
  ],
})

const app = createApp(App)
app.use(router)
app.use(naive)
piniaInstall(app)

app.mount('#app')
