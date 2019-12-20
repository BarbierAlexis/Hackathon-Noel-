<template>
 <div class="navbar_style">
  <b-navbar variant="faded" type="light">
    <div><img src="@/assets/running-shoes.png" alt="shoes" height="100" width="100"/></div>
    <div><b-navbar-brand tag="h1" class="title mb-3">Un pied <br>dans la merde</b-navbar-brand></div>
    <div> <a href="http://twitter.com/DesNantais"><img src="@/assets/twitter_logo.png" alt="twitter_logo" heigt="100" width="100"></a></div>
  </b-navbar>
</div>
</template>

<style scoped>

.navbar {
  display: flex;
  justify-content: space-around;
  max-width: 100%
}
.navbar-light .navbar-brand {
  color: rgb(241, 242, 242) !important;
}

.title {
  font-size:3.5em;
}

@media screen and (max-width: 650px){
  .title{
    font-size:2.5em;
    font-family: Pacifico !important;
  }
  img{
    width: 70px;
    height: 70px;
  }
}

@media screen and (max-width: 450px){
  .title{
    font-size:1.9em;
  }
  img{
    width: 50px;
    height: 50px;
  }
}
</style>
