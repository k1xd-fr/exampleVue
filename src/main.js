import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import Shared from './components/shared'

import Icons from './components/Icons'

import UI from './components/UI/index'

const app = createApp(App)

app.use(UI)

app.use(Shared)

app.use(Icons)

app.mount('#app')
