import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'formiojs/dist/formio.full.min.css'
import 'formiojs/dist/formio.full.min.js.LICENSE.txt'

import { createApp } from 'vue'

import App from './App.vue'
import { router } from './routers/main'

const app = createApp(App)

app.use(router)
app.mount('#app')
