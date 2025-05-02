import { createApp } from 'vue'
import App from './App.vue'

// import Arco Design Framework
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

// import router
import { router } from './routers'

const app = createApp(App)

app.use(ArcoVue)
app.use(router)
app.mount('#app')
