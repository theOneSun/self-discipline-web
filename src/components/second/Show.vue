<template>
  <div>
    <h1>data</h1>
    <h2>已输入</h2>
    <ul>
      <li v-for="item in alreadyInput">{{ item }}</li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'Show',
    data () {
      return {
        msg2: 'show data',
        alreadyInput: []
      }
    },
    mounted () {
      console.log(localStorage.getItem('inputResult'))
      this.alreadyInput = JSON.parse(localStorage.getItem('inputResult'))
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
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
