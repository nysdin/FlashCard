import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "rememberTest" */ './views/RememberTest.vue')
    },
    {
      path: '/result/:count',
      name: 'result',
      component: () => import(/* webpackChunkName: "result" */'./views/Result.vue')
    },
    {
      path: '/wrong-test',
      name: 'wrong-test',
      component: () => import(/* webpackChunkName: "wrongTest" */'./views/WrongTest.vue')
    }
  ]
})
