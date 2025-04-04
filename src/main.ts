import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DataVVue3 from '@kjgl77/datav-vue3'
import './assets/css/index.css' // index样式
import 'lib-flexible/flexible'
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'


const app = createApp(App)
app.use(router) // 使用路由
app.use(DataVVue3)
app.component('SvgIcon', SvgIcon)
app.mount('#app')
