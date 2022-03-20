import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './static/css/reset.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as echarts from 'echarts';

createApp(App).config.globalProperties.echarts = echarts;
createApp(App).use(store).use(router).use(ElementPlus,{
    local: zhCn
}).mount('#app')

router.beforeEach((to, from, next) => {

    /* 路由发生变化修改页面title */
    if (to.meta.title) {

        document.title = to.meta.title
    }
    /* 路由发生变化修改页面title */
    if (to.meta.icon) {

        document.icon = to.meta.icon
    }
    next()
})