import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './main.vue'
import router from './routes'

const app = createApp(App)
app.use(router)
app.mount('#app')