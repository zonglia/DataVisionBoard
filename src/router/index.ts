import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue' // 主布局组件，用于嵌套路由展示
import Drilling from '../components/Drilling.vue';
import Test from '../components/Test.vue';
import DroughtPrevention from '../components/DroughtPrevention.vue';
import JiangXiN2 from '../components/JiangXiN2.vue'
import BBTAVI from '@/components/BBTAVI.vue'
import AOI from '../components/AOI.vue';
import ElectroPlating from '../components/ElectroPlating.vue';
import ElectroPlatingMain from '../views/ElectroPlating/ElectroPlatingMain.vue'
import ProcessIndicators from '../views/ElectroPlating/ProcessIndicators.vue'

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
    },
    {
        path: '/drilling',
        component: Drilling,
    },
    {
        path: '/electroPlating',
        component: ElectroPlating,
        children: [
            {
                path: '', // 匹配 /electroPlating
                redirect: '/electroPlating/main' // 重定向到完整路径
            },
            {
                path: 'main', // 相对路径，匹配 /electroPlating/main
                component: ElectroPlatingMain,
            },
            {
                path: 'processIndicators', // 相对路径，匹配 /electroPlating/processIndicators
                name: 'ProcessIndicators',
                component: ProcessIndicators,
            }
            
        ]
    },
    {
        path: '/test',
        component: Test,
    },
    {
        path: '/droughtPrevention',
        component: DroughtPrevention,
    },

    {
        path: '/jiangXiN2',
        component: JiangXiN2,
    },
    {
        path: '/bbtAvi',
        component: BBTAVI,
    },
    {
        path: '/aoi',
        component: AOI,
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
