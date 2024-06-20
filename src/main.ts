import { createApp, onMounted } from 'vue'
import App from './App.vue'
import { clerkPlugin } from 'vue-clerk/plugin'
import router from './router'
import { registerLayout } from './utils/import'
import { createPinia } from 'pinia'
import VueSocials from 'vue-socials'
import 'ant-design-vue/dist/reset.css'
import './assets/global.css'
import 'aos/dist/aos.css'

const app = createApp(App)
const pinia = createPinia()

registerLayout(app)
app.use(clerkPlugin, {
  publishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
})
app.use(pinia)
app.use(VueSocials)
app.use(router)
app.mount('#app')
