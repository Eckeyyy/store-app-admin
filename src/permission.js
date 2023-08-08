import router from "./router";
import { asyncRoutes, routes } from "./router/routes";
import store from "./store";
// import { getUserCookies } from "./utils/cookie";

const roleAccess = {
    "coustomer": [
        { name: 'Product' },
        { name: 'ProductList' },
        { name: 'AddProduct' },
    ],
    'admin': [
        { name: 'Product' },
        { name: 'ProductList' },
        { name: 'AddProduct' },
        { name: 'Category' }
    ]
}
//获取对应权限的路由
function getMenuRoutes(role, routes) {
    const accessRoutesName = roleAccess[role].map(item => item.name)
    const resultRoutes = [];
    routes.forEach((route) => {
        if (accessRoutesName.includes(route.name)) {
            const filltered = { ...route }
            if (route.children) {
                filltered.children = getMenuRoutes(role, route.children)
            }
            resultRoutes.push(filltered)
        }
    })
    return resultRoutes
}

// console.log(getMenuRoutes('admin', asyncRoutes));
let isAddRoutes = false
router.beforeEach(async (to, from, next) => {
    let userInfo = store.state.user
    console.log(to);
    if (to.path !== '/login') {
        if (userInfo.appKey && userInfo.role) {
            if (isAddRoutes) {
                next()
            }
            else {
                const finalRoutes = getMenuRoutes(userInfo.role, asyncRoutes)
                router.addRoute(...finalRoutes)
                await store.dispatch('asyncSetRoutes', (routes.concat(finalRoutes)))
                isAddRoutes = true
                next()
            }
        }
        else {
            next('/login')
        }
    } else {
        next()
    }
})