<template>
  <div class="header">
    <h1>{{title}}</h1>
    <!--<img src="../assets/logo.png">-->
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        title: 'This is title'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    /*width: 1500px;*/
    /*height: 300px;*/
    /*height: 30%;*/
    /*align-items: center;*/
  }
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
