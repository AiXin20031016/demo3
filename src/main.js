import { createApp } from 'vue'
import router from './main/webapp/router'
import views from '@/main/webapp/views/views'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from "@vue/cli-plugin-eslint/eslintOptions";

const app = createApp(App)

app.use(router).use(views);
app.use(ElementPlus)
app.mount('#app')

// 关闭 Vue 的生产提示
Vue.config.productionTip = false

// 使用插件
Vue.use(ElementPlus) // element plus 插件
Vue.use(router) // 路由插件
Vue.use(VueAxios, axios) // 使用 axios 插件

// 创建 Vue 实例对象
new Vue({
    render: h => h(App),  // render 函数将帮助解析模板，传入的参数 h 为一个函数，该函数可用来解析 App 这个组件
    router
}).$mount('#app') // 将 App.vue 组件挂载到 index.html 中的 id 为 app 的 div 标签上


