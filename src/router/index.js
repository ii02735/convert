import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children:[
      {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Home/Description'),
      },
      {
        path: 'devise',
        name: 'devise',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Home/Devise'),
      },
      {
        path: 'distance',
        name: 'distance',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Home/Distance'),
      },
      {
        path: 'masse',
        name: 'masse',
        component: () => import(/* webpackChunkName: "about" */ '@/components/Home/Masse'),
      },
      {
        path: 'resolution',
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
