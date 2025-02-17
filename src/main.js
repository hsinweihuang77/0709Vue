import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';

const app = createApp(App)
const pinia = createPinia();

app.use(router)
app.use(pinia)


app.mount('#app') //這行要放最後
