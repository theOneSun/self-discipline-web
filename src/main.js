// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Hi from './components/Hi.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import One from './components/One.vue'
import Two from './components/Two.vue'
import Home from './components/Home.vue'
import ElementUI from 'element-ui'
import Show from './components/second/Show.vue'
import HomeIndex from './components/second/HomeIndex.vue'

Vue.use(VueRouter)
Vue.use(ElementUI)

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

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
