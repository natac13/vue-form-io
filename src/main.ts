import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'formiojs/dist/formio.form.min.css'
import 'formiojs/dist/formio.full.min.css'

import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)

app.mount('#app')