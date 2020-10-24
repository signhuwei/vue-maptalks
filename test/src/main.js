import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import mt from '../libs'

createApp(App)
.use(mt)
.mount('#app')
