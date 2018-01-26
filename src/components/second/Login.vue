<template>
  <div>
    <label>
      <p>Login with Username and Password</p>
      <ul>
        <li>User:</li>
        <li><input v-model="code"></li>
        <li>Password:</li>
        <li><input type="password" v-model="password"/></li>
        <li colspan='2'>
          <button @click="login()">登录</button>
        </li>
      </ul>
    </label>
    <button @click="sayHello()">sayHello</button>
    {{ msg }}
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'login',
    data () {
      return {
        msg: 'yo',
        code: '',
        password: ''
      }
    },
    mounted () {
      console.log('login页')
    },
    methods: {
      login () {
        console.log(this.code, this.password)
        axios.post('/discipline/login', {
          code: this.code,
          password: this.password
        }).then(function (response) {

        }).catch(function (error) {
          console.log(error)
        })
      },
      sayHello () {
        axios.post('/discipline/demo/hello').then(function (response) {
          console.log(response)
          this.msg = response.data
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>

<style>

</style>
