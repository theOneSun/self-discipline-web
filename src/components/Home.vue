<!--首页-->
<template>
  <div class="hello">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import Footer from './Footer.vue'

  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Home'
      }
    },
    components: {
      Header,
      Footer
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
