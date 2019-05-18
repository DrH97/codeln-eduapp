<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: rgba(3,3,3,.4);">
      <button class="navbar-toggler" type="button" data-toggle="offcanvas" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">
          <img src="../assets/logo.jpg" width="30" height="30" class="d-inline-block align-top" alt="">
        Eduapp
      </a>
      <div class="offcanvas-collapse navbar-collapse" id="navbarNavDropdown" style="text-align: center">
        <ul class="nav flex-column flex-sm-row nav-fill" style="width: -webkit-fill-available;">
          <li class="flex-sm-fill text-sm-center nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,30">
              Categories
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="flex-sm-fill text-sm-center nav-item">
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search for Tutorials" aria-label="Search">
    <!--          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>-->
            </form>
          </li>
          <li class="flex-sm-fill text-sm-center nav-item">
            <a class="nav-link text-white" href="#">tutormix for business</a>
          </li>
          <li class="flex-sm-fill text-sm-center nav-item">
            <a class="nav-link text-white" href="#">become a instructor</a>
          </li>
        </ul>
      </div>

      <div >
        <a class="btn btn-light btn-sm" href="#" role="button">Sign Up</a>
        <a class="btn btn-danger btn-sm" href="#" role="button">Log In</a>
      </div>
    </nav>
    <div class="jumbotron jumbotron-fluid">
      <div class="container text-left text-white my-5 my-lg-5 pt-lg-5">
        <h1 class="display-5 font-weight-bold">Learn everything</h1>
        <p class="lead">Study what you want, explore for free</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'AppNavbar'
}
</script>

<style scoped>
  .navbar-brand {
    font-weight: bold;
  }

  #navbarDropdownMenuLink{
    color: black;
  }

.jumbotron {
  background: url('../assets/banner.png') no-repeat;
  background-size: cover;
  height: 500px;
  background-position: center;
  margin-top: -60px;
  margin-bottom: 0;
}

.lead {
  font-size: xx-large;
}
</style>
