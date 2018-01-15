<template>
  <div class="footer">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      message: 'This is bottom message'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    /*height: 30%;*/
  }
h1, h2 {
  font-weight: normal;
}

</style>
