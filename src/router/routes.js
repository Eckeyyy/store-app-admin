import layout from '../views/layout/index.vue';

export const asyncRoutes = [{
    path: '/product',
    name: 'Product',
    component: layout,
    meta: {
        title: '商品管理',
        auth: true,
        icon: 'appstore'
    },
    children: [
        {
            path: 'productList',
            name: 'ProductList',
            component: () => import('@/views/pages/productList'),
            meta: {
                title: '商品列表',
                auth: true,
                icon: 'unordered-list'
            }
        },
        {
            path: 'addProduct',
            name: 'AddProduct',
            component: () => import('@/views/pages/addProduct'),
            meta: {
                title: '商品添加',
                auth: true,
                icon: 'edit'
            }
        },
        {
            path: 'category',
            name: 'Category',
            component: () => import('@/views/pages/category'),
            meta: {
                title: '商品分类',
                auth: true
            }
        }
    ]
}]

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: layout,
        meta: {
            auth: true,
            title: '首页',
            icon: 'home'
        },
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: () => import('@/views/pages/dashboard'),
            meta: {
                auth: true,
                title: '统计',
                icon: 'bar-chart'
            }
        }]
    },
    {
        path: '/login',
        name: 'Login',
        hidden: true,
        component: () => import('@/views/login'),
        meta: {
            title: '登陆'
        }
    },
];
