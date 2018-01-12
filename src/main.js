// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import Routes from './router/index'

Vue.use(VueRouter)
Vue.use(ElementUI)

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  // routes // （缩写）相当于 routes: routes
  routes: Routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
