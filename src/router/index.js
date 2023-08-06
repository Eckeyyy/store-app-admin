import Vue from 'vue';
import VueRouter from 'vue-router';
import layout from '../views/layout/index.vue';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    title: '首页',
    component: layout,
    meta: {
      auth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
