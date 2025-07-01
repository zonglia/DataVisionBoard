import { createApp } from 'vue'
import App from '@/App.vue'


import '@/utils/rem'

import 'virtual:svg-icons-register'

// 3. 引入第三方库及其样式
import DataVVue3 from '@kjgl77/datav-vue3'


// 4. 引入全局自定义样式（覆盖第三方样式）
import '@/styles/index.scss'


import router from '@/router'



import SvgIcon from '@/components/SvgIcon/index.vue'


const app = createApp(App)
app.use(router) // 使用路由
app.use(DataVVue3)
app.component('SvgIcon', SvgIcon)
app.mount('#app')
