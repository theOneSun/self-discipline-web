<!--首页-->
<template>
  <div class="home">
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
  .home {
    height: 100%;
    width: 100%;
    background-image: url("../assets/Iniesta.jpg");
    background-size: cover;
  }
</style>
