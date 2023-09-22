import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'formiojs/dist/formio.full.min.css'
import 'formiojs/dist/formio.full.min.js.LICENSE.txt'
import 'formiojs/dist/formio.embed.min.js.LICENSE.txt'
import 'formiojs/dist/formio.form.min.js.LICENSE.txt'
import 'formiojs/dist/formio.utils.min.js.LICENSE.txt'

import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)

app.mount('#app')
