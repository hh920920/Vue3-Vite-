import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { ref } from 'vue'

const routes = [{
        path: '/',
        component: () => import('../views/Main.vue'),
        name: 'home1',
        redirect: '/home',
        // children: [
        //   {
        //     path: '/home',
        //     name: 'home',
        //     component: () => import('../views/home/Home.vue')
        //   },
        //   {
        //     path: '/user',
        //     name: 'user',
        //     component: () => import('../views/User/User.vue')
        //   },
        //   {
        //     path: '/page1',
        //     name: 'page1',
        //     component: () => import('../views/Page1.vue')
        //   },
        //   {
        //     path: '/page2',
        //     name: 'page2',
        //     component: () => import('../views/Page2.vue')
        //   }
        // ],
        children: []
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login/Login.vue')
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes
})


const registerRouteFresh = ref(true) // 定义标识，记录路由是否添加
const menu = JSON.parse(localStorage.getItem('menu'))
// 路由守卫
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    if (!token && to.name !== 'login') {
        next({ name: 'login' })

    } else {
        next()
    }
    //
})


export default router