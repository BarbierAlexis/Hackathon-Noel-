<template>
  <div class="footer">
    <img src="@/assets/here.png" alt="shoes" height="100" width="100"/>
    <h5>{{ new Date().getFullYear() }} — <strong>Un pied dans la merde</strong></h5>
    <p>Alexis BARBIER - Celine BERTHELIN - Mélanie LIRAUD-COEL - Héléna THOMASSIN</p>  
  </div>
</template>

<style scoped>
.footer {
  margin-top: 5%;
  padding: 10px;
  color: #62828E;
  background-color: #ffc107;
}
img {
  margin-bottom: 10px;
}

@media screen and (max-width: 650px){
 
  img{
    width: 70px;
    height: 70px;
  }
}

@media screen and (max-width: 450px){
  
  img{
    width: 50px;
    height: 50px;
  }
}
</style>
