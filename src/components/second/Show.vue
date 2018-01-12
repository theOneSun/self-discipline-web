<template>
  <div>
    <h1>data</h1>
    <h2>已输入</h2>
    <ul v-for="item in alreadyInput">
      <li>{{item}}</li>
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
      this.alreadyInput = ['asd', '123']
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
