<template>
  <div id="app">
    <app-navbar></app-navbar>
    <bottom-banner-infographic></bottom-banner-infographic>
<!--    <router-view/>-->
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar'
import BottomBannerInfographic from './components/BottomBannerInfographic'

export default {
  name: 'App',
  components: {
    AppNavbar,
    BottomBannerInfographic
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
