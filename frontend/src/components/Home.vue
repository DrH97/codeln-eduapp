<template>
<!--  <div class="hello">-->
<!--    <h1>{{ msg }}</h1>-->

<!--    <div class="alert alert-success alert-dismissible fade show" role="alert">-->
<!--      With Bootstrap!-->
<!--      <button type="button" class="close" data-dismiss="alert" aria-label="Close">-->
<!--        <span aria-hidden="true">&times;</span>-->
<!--      </button>-->
<!--    </div>-->

<!--    <h2>Essential Links</h2>-->
<!--    <ul>-->
<!--      <li>-->
<!--        <a-->
<!--          href="https://vuejs.org"-->
<!--          target="_blank"-->
<!--        >-->
<!--          Core Docs-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a-->
<!--          href="https://forum.vuejs.org"-->
<!--          target="_blank"-->
<!--        >-->
<!--          Forum-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a-->
<!--          href="https://chat.vuejs.org"-->
<!--          target="_blank"-->
<!--        >-->
<!--          Community Chat-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a-->
<!--          href="https://twitter.com/vuejs"-->
<!--          target="_blank"-->
<!--        >-->
<!--          Twitter-->
<!--        </a>-->
<!--      </li>-->
<!--      <br>-->
<!--      <li>-->
<!--        <a-->
<!--          href="http://vuejs-templates.github.io/webpack/"-->
<!--          target="_blank"-->
<!--        >-->
<!--          Docs for This Template-->
<!--        </a>-->
<!--      </li>-->
<!--    </ul>-->
<!--    <h2>Ecosystem</h2>-->
<!--    <ul>-->
<!--      <li>-->
<!--        <a-->
<!--          href="http://router.vuejs.org/"-->
<!--          target="_blank"-->
<!--        >-->
<!--          vue-router-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a-->
<!--          href="http://vuex.vuejs.org/"-->
<!--          target="_blank"-->
<!--        >-->
<!--          vuex-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a-->
<!--          href="http://vue-loader.vuejs.org/"-->
<!--          target="_blank"-->
<!--        >-->
<!--          vue-loader-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a-->
<!--          href="https://github.com/vuejs/awesome-vue"-->
<!--          target="_blank"-->
<!--        >-->
<!--          awesome-vue-->
<!--        </a>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container text-left text-white my-5 my-lg-5 pt-lg-5">
        <h1 class="display-5 font-weight-bold">Learn everything</h1>
        <p class="lead">Study what you want, explore for free</p>
      </div>
    </div>
    <bottom-banner-infographic/>
    <page-content/>
  </div>

</template>

<script>
import BottomBannerInfographic from '@/components/BottomBannerInfographic'
import PageContent from '@/components/PageContent'

export default {
  name: 'Home',
  components: {PageContent, BottomBannerInfographic},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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

.jumbotron {
  background: url('../assets/banner.png') no-repeat;
  background-size: cover;
  height: 500px;
  background-position: center;
  margin-top: -60px;
  margin-bottom: 0;
}

.container {
  margin-top: 300px;
}

.lead {
  font-size: xx-large;
}
</style>
