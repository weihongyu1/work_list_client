import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home";
import Login from "../views/Login";
import Product from "../views/Product";

const routes = [
    {
        path: '/index',
        name: 'Home',
        component: Home,
        meta:
            {
                title: '佳佳待办'
            }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta:
            {
                title: '佳佳待办'
            }
    },
    {
        path: '/product',
        name: 'Product',
        redirect: "/list-day",
        component: Product,
        meta:
            {
                title: '佳佳待办',
            },
        children: [
            {path: '/list-day', component: () => import("../components/product/list/ListDay")},
            {path: '/list-week', component: () => import("../components/product/list/ListWeek")},
            {path: '/list-month', component: () => import("../components/product/list/ListMonth")},
            {path: '/list-all', component: () => import("../components/product/list/ListAll")},

            {path: '/class-work', component: () => import("../components/product/class/ClassWork")},
            {path: '/class-person', component: () => import("../components/product/class/ClassPerson")},
            {path: '/class-shopping', component: () => import("../components/product/class/ClassShopping")},
            {path: '/class-study', component: () => import("../components/product/class/ClassStudy")},

            {path: '/com-completed', component: () => import("../components/product/complete/ComCompleted")},
            {path: '/com-expired', component: () => import("../components/product/complete/ComExpired")},
            {path: '/com-garbage', component: () => import("../components/product/complete/ComGarbage")},

            {path: '/pic-analyze', component: () => import("../components/product/pic/PicAnalyze")},
        ]
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
