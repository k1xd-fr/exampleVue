import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import Shared from "./components/shared"

import Icons from './components/Icons'


const app = createApp(App)

app.use(Shared)

app.use(Icons)


app.mount('#app')
