<!--首页-->
<template>
  <div class="hello">
    <Head></Head>
    <div>
      <p>主页</p>
      <div>
        <label>
          <input width="200px" @keyup.enter="showAlert()" v-model="inputData"/>
          <p>{{ inputData }}</p>
        </label>
      </div>
      <p>已添加:</p>
      <div v-for="item in result">
        {{ item }}
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
  import Head from './Head.vue'
  import Foot from './Foot.vue'

  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Home',
        result: [''],
        inputData: ''
      }
    },
    components: {
      Head,
      Foot
    },
    methods: {
      addResult (param) {
        this.result.push(param)
      },
      showAlert () {
        let that = this
        alert('哈哈')
        this.addResult(that.inputData)
        this.inputData = ''
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
</style>
