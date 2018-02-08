<!--首页-->
<template>
  <div class="hello">
    <div>
      <p>主页</p>
      <div>
        <label>
          <input width="200px" @keyup.enter="showAlert()" v-model="inputData"/>
          <!--<input width="200px" @keyup.enter="addResult2()" ref="test1"/>-->
          <p>{{ inputData }}</p>
        </label>
      </div>
      <p>已添加:</p>
      <div v-for="item in inputResult">
        {{ item }}
      </div>
      <div>
        <!--<router-link to="/home/show" @click="goShow()">Go to Show</router-link>-->
        <button @click="goShow()">展示数据</button>
      </div>
      <button @click="goLogin()">登录</button>
    </div>
    <div>
      <p>测试</p>
      <p>{{ testData }}</p>
      <button @click="testHello()"></button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'HomeIndex',
    data () {
      return {
        msg: 'Welcome to Home',
        inputResult: [],
        inputData: '',
        testData: ''
      }
    },
    methods: {
      addResult (param) {
        this.inputResult.push(param)
      },
//      addResult2 () {
//        let val = this.$refs.test1.value
//        this.inputResult.push(val)
//        this.$refs.test1.value = ''
//      },
      showAlert () {
        let that = this
        alert('哈哈')
        this.addResult(that.inputData)
        this.inputData = ''
      },
      goShow () {
        localStorage.setItem('inputResult', JSON.stringify(this.inputResult))
        this.$router.push({path: '/home/show'})
      },
      goLogin () {
        this.$router.push({path: '/home/login'})
      },
      testHello () {
        axios.get('http://localhost:8086/demo/hello', {headers: {'Access-Control-Allow-Origin': '*'}})
          .then(function (response) {
            console.log(response)
          }).catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  button {
    width: 100px;
    height: 30px;
  }
</style>
