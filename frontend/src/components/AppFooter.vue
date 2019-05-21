<template>
  <div class="container-fluid pt-2" style="background: black">
<!--    <div class="row">-->
      <ul class="nav row">
        <li class="col-4 text-left">
          <router-link to="/" class="navbar-brand" >
            <img src="../assets/logo.jpg" width="30" height="30" class="d-inline-block align-top" alt="">
            Eduapp
          </router-link>
        </li>
        <li class="col-4 pt-2 align-middle">
          <p>Copyright &copy; 2019 CodeLn</p>
        </li>
        <li class="col-4 text-right pt-2">
          <a href="#">Policy and Cookie Policy</a>
          <a href="#">Intellectual Property</a>
        </li>
      </ul>
<!--      <div class="col-4 text-left">-->
<!--        <a class="navbar-brand" href="#">-->
<!--            <img src="../assets/logo.jpg" width="30" height="30" class="d-inline-block align-top" alt="">-->
<!--          Eduapp-->
<!--        </a>-->
<!--      </div>-->
<!--      <div class="col-4 py-1">-->
<!--        <p>Copyright &copy; 2019 CodeLn</p>-->
<!--      </div>-->
<!--      <div class="col-4 text-right">-->
<!--        <a href="#">Policy and Cookie Policy</a>-->
<!--        <a href="#">Intellectual Property</a>-->
<!--      </div>-->

<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.navbar-brand {
  font-weight: bold;
  color: rgba(255,255,255,.9);
}

a, p {
  color: rgba(255,255,255,.9);
}
</style>
