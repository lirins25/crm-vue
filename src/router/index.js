import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    /**
     * path  : 表示请求路径
     * name  : 表示名称 可以不要
     * component: 指定的组件路径（指定这个请求路径打开的组件）
     *  redirect: 表示重定向 指定定义好的路径即可
     * */
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/index.vue')
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('../views/main/index.vue'),
        children:[
            {
                path: 'index',
                name: 'index',
                component: () => import('../views/index/index.vue')
            },
            {
                path: 'supplier',
                name: 'supplier',
                component: () => import('../views/supplier/index.vue')
            },
            {
                path: 'brand',
                name: 'brand',
                component: () => import('../views/brand/index.vue')
            },
            {
                path: 'category',
                name: 'category',
                component: () => import('../views/category/index.vue')
            },
            {
                path: 'good',
                name: 'good',
                component: () => import('../views/good/index.vue')
            }
        ],
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
