import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/style/common.less'
import './api/mock'
import './api/api'

import store from './store/index'
const app = createApp(App)

// element 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

const getMenu = () => {
    store.commit("addMenu", router)
}
const call = async () => {
    // 防止动态路由页面刷新找不到path而显示空白
    await getMenu()
    app.use(router).use(store).use(ElementPlus)
    app.mount('#app')
}

call()