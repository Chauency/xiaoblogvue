import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Home from "../components/Home";
import ArticleList from "../components/ArticleList";
import PostArticle from "../components/PostArticle";
import BlogDetail from "../components/BlogDetail";
import CateMana from "../components/CateMana";
import DataCharts from "../components/DataCharts";
import UserMana from "../components/UserMana";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '登录',
        hidden: true,
        component: Login
    }, {
        path: '/home',
        name: '',
        component: Home,
        hidden: true
    }, {
        path: '/home',
        component: Home,
        name: '文章管理',
        iconCls: 'fa fa-file-text-o',
        children: [
            {
                path: '/articleList',
                name: '文章列表',
                component: ArticleList,
                meta: {
                    keepAlive: true
                }
            }, {
                path: '/postArticle',
                name: '发表文章',
                component: PostArticle,
                meta: {
                    keepAlive: false
                }
            }, {
                path: '/blogDetail',
                name: '博客详情',
                component: BlogDetail,
                hidden: true,
                meta: {
                    keepAlive: false
                }
            }, {
                path: '/editBlog',
                name: '编辑博客',
                component: PostArticle,
                hidden: true,
                meta: {
                    keepAlive: false
                }
            }
        ]
    }, {
        path: '/home',
        component: Home,
        name: '用户管理',
        children: [
            {
                path: '/user',
                iconCls: 'fa fa-user-o',
                name: '用户管理',
                component: UserMana
            }
        ]
    }, {
        path: '/home',
        component: Home,
        name: '栏目管理',
        children: [
            {
                path: '/cateMana',
                iconCls: 'fa fa-reorder',
                name: '栏目管理',
                component: CateMana
            }
        ]
    }, {
        path: '/home',
        component: Home,
        name: '数据统计',
        iconCls: 'fa fa-bar-chart',
        children: [
            {
                path: '/charts',
                iconCls: 'fa fa-bar-chart',
                name: '数据统计',
                component: DataCharts
            }
        ]
    }


]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
