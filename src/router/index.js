// index.js中的内容可以写到main.js中
import HelloWorld from '../components/HelloWorld.vue'
import Hi from '../components/Hi.vue'
import One from '../components/One.vue'
import Two from '../components/Two.vue'
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
  },
  {path: '/hi', component: Hi},
  {path: '/one', component: One},
  {path: '/two', component: Two},
  {path: '/hello', component: HelloWorld}
]
export default routes
