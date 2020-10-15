import { createApp } from 'vue'
import App from './App.vue'
import './index.css'


import router from './router'
import stort from './stort'
// import axios from './api'


import Vant from 'vant'
import 'vant/lib/index.css'

createApp(App).use(Vant).use(router).use(stort).mount('#app')
