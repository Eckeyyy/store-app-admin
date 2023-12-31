import Vue from 'vue';
import VueRouter from 'vue-router';
import layout from '../views/layout/index.vue';

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: layout,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
