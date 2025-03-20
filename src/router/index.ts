import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue' // 主布局组件，用于嵌套路由展示


// 公共路由
export const constantRoutes = [
    {
        path: '',//实际上表示应用的根路径 /
        component: Layout,
        redirect: '/index', // 默认重定向到首页
        children: [
            {
                path: '/index',
                component: () => import('@/views/index.vue'), // 懒加载首页组件
                name: 'Index',
                meta: { title: '首页', icon: 'dashboard', affix: true } // 路由元信息
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),// 使用 HTML5 History 模式（需服务器配置支持）
    routes: constantRoutes,// 路由规则数组
    scrollBehavior(to, from, savedPosition) {
        // 页面滚动行为控制
        // 如果存在浏览器保存的滚动位置（如前进/后退按钮），恢复该位置
        if (savedPosition) {
            return savedPosition
        }
        // 否则滚动到页面顶部
        return { top: 0 }
    },
});

export default router
