import { createRouter, createWebHashHistory } from 'vue-router';
import myHome from "@/main/webapp/views/myHome.vue";

const routes = [
    {
        path: '/',
        redirect: '/login', // 将根路径重定向到 /login
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/main/webapp/views/myLogin.vue'),
    },
    {
        path: '/myLog', // 修正为正确的路径 /myLog
        name: 'myLog',
        component:() => import('@/main/webapp/views/myLog.vue'),
    },
    {
        path: '/myRegister', // 修正为正确的路径 /myLog
        name: 'myRegister',
        component:() => import('@/main/webapp/views/myRegister.vue'),
    },
    {
        path: '/home',     // 路径
        component: myHome    // 跳转到的组件
    }

];


const router = createRouter({
    history: createWebHashHistory(),  // 使用 hash 模式
    routes,
});
// 导航守卫，前置处理


export default router;


