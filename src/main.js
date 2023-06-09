import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import './assets/style.css'

import Shared from './components/shared'

import Icons from './components/Icons'

import UI from './components/UI/index'

const app = createApp(App)
app.use(router)

app.use(UI)

app.use(Shared)

app.use(Icons)

app.mount('#app')
