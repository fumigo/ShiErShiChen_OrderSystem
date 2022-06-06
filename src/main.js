import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/dist/index.full.min'

import '@/assets/css/global.css'
import '@/assets/css/iconfont.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import axios from 'axios'
import VueAxios from "vue-axios";
import Vant from 'vant';
import 'vant/lib/index.css';
import '@vant/touch-emulator';
import "./assets/css/reset.css"

const app = createApp(App)
app.use(Vant);
app.use(store)
app.use(router)
app.use(ElementPlus,{
    locale: zhCn,
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
app.use(VueAxios,axios)
// createApp(App).use(store).use(router).use(ElementPlus).use(ElementPlusIconsVue).mount('#app')
