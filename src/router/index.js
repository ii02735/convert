import Vue from 'vue'
import VueRouter from 'vue-router'
import * as VeeValidate from 'vee-validate';

Vue.use(VueRouter);
Vue.use(VeeValidate);


  const routes = [
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children:[
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Home/Description'),
      },
      {
        path: 'convertir-base',
        name: 'base',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Home/Devise'),
      },
      {
        path: 'convertir-devise',
        name: 'devise',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Home/Devise'),
      },
      {
        path: 'convertir-distance',
        name: 'distance',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Home/Distance'),
      },
      {
        path: 'convertir-masse',
        name: 'masse',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Home/Masse'),
      },
      {
        path: 'convertir-resolution',
        name: 'resolution',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Home/Resolution'),
      },
      {
        path: 'oumar-marega',
        name: 'me',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Home/AboutMe'),
      }
    ]
  },
  {
    path: "*",
    redirect: "/"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
