import Vue from 'vue'
import VueRouter from '@/vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'a',
        name:'A',
        component:{
          render() {
            return <div>dfd</div>
          }
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children:[
      {
        path:'b',
        name:'B',
        component:{
          render() {
            return <div>dfd</div>
          }
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((form,to,next)=>{
  setTimeout(() => {
    next()
  }, 3000);
})
export default router
