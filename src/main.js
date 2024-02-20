import './assets/main.css'

import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import Product from './pages/Product.vue'
import ToOrder from './pages/ToOrder.vue'
import Favorites from './pages/Favorites.vue'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favorites', name: 'Favorites', component: Favorites },
  { path: '/toorder', name: 'ToOrder', component: ToOrder },
  { path: '/product/:id', name: 'Product', component: Product }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')
