<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<HelloWorld/>-->
    <!--<Hi/>-->
    <router-link to="/hi">Go to Hi</router-link>
    <router-link to="/one">Go to 1</router-link>
    <router-link to="/two">Go to 2</router-link>
    <router-view></router-view>
    <!--<router-link :to="{path:'hi'}">go hi</router-link>-->
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import Hi from './components/Hi.vue'

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
