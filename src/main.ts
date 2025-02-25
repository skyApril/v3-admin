import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
 
import { createPinia } from 'pinia'
import Elementplus from "element-plus";
import * as ElementplusIconsVue from "@element-plus/icons-vue"
// import router from './router'
 
// vue i18n
import I18n from "./languages/index.ts";


const app = createApp(App)
 
// app.use(createPinia()).use(Elementplus).use(router)
app.use(createPinia()).use(Elementplus).use(I18n)

 
//全局引入elementIcon图标 不需要的话可以不写（优先考虑运行速度时不写）
for (const [key,component] of Object.entries(ElementplusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
