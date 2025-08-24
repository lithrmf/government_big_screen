import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AppMap from '@map/app-map.vue'

const app = createApp(App)
// 将地图组件注册为全局组件
app.component('AppMap', AppMap)

app.use(createPinia())
app.use(router)

app.mount('#app')
