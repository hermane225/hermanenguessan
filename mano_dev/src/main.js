import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { reveal, spotlight, tilt } from './directives'
import './assets/css/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('reveal', reveal)
app.directive('spotlight', spotlight)
app.directive('tilt', tilt)

app.mount('#app')
