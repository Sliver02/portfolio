<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <Home msg="What I can do."/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Home,
  }
}
</script>

<style lang="scss">
@import '/assets/scss/main';

</style>
