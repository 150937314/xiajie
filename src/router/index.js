import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/register.vue'
import Login from '../views/login.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/',redirect: "/login"},
  { path: '/register',name: 'register',component: Register},
  {path: '/login',name:'login',component: () => import('../views/login.vue')},
  {path:"/aaa",name:"aaa",component:()=>import("../views/AAA.vue")},
  {path:"/botnav",name:"botnav",component:()=>import("../views/Botnav.vue"),
  children:[
    {path:"/botnav",redirect:"/botnav/index"},
    {path:"index",name:"index",component:()=>import("../views/index.vue")},
    {path:"list",name:"list",component:()=>import("../views/List.vue")},
    {path:"search",name:"search",component:()=>import("../views/Search.vue")},
    {path:"cart",name:"cart",component:()=>import("../views/Cart.vue")},
    {path:"mine",name:"mine",component:()=>import("../views/Mine.vue")},
  ]}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
