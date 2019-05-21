<template>
  <div id="app">
    <app-navbar></app-navbar>

    <router-view/>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar'
// import BottomBannerInfographic from '@/components/BottomBannerInfographic'
// import PageContent from '@/components/PageContent'
import AppFooter from '@/components/AppFooter'
// import CourseCard from '@/components/CourseCard'

export default {
  name: 'App',
  components: {
    // CourseCard,
    AppFooter,
    // PageContent,
    AppNavbar
    // BottomBannerInfographic
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
