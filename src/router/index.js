// index.js中的内容可以写到main.js中
import Home from '../components/Home.vue'
import HomeIndex from '../components/second/HomeIndex.vue'
import Show from '../components/second/Show.vue'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        component: HomeIndex
      }
    ]
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        component: HomeIndex
      },
      {
        path: 'show',
        component: Show
      }
    ]
  }
]
export default routes
