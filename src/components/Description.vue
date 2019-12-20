
<template>
  <div>
    <div v-if="latitude && longitude">
      <Form />
      <b-button pill variant="warning" @click="Return"><img alt="Arrow" class="arrow" src="../assets/arrow.png" height="40" width="40"></b-button>
    </div>
    <div v-else>
      <div class="center-text">
        <p class="text">Bienvenue sur l'application <i><b>Un pied dans la merde</b></i>!<br> Cette application te permet de géolocaliser les déchets que tu croises dans les rues de la ville de <b>Nantes.</b><br>L'envoi de ton formulaire génère automatiquement un Tweet qui permettra à la <b>#VilledeNantes</b> d'intervenir.</p>
      </div>
      
      <div class="Cards">
        <div class="Card">
          <img alt="Number1" src="../assets/number1.png">
          <p class="paragraphe">Appuie sur le bouton "Démarrer" </p>
        </div>
        <div class="Card">
          <img alt="Number2" src="../assets/number2.png">
          <p class="paragraphe">Remplis le formulaire et prends ta photo</p>
        </div>
        <div class="Card">
          <img alt="Number3" src="../assets/number3.png">
          <p class="paragraphe">Envoie le tout ! </p>
        </div>
      </div>
      <div>
      <b-button class="btn" pill variant="warning" @click="Geo"><b>Démarrer</b></b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Form from './Form'

export default {
  name: 'Description',
  props: {
    msg: String
  },
   components: {
    Form
  },  
  data() {
    return{
      latitude: null,
      longitude: null}
    
  },
  methods: {

      Geo: function (){
    navigator.geolocation.getCurrentPosition((success, error, options) =>{
      return (this.latitude = success.coords.latitude,
      this.longitude = success.coords.longitude)
    })
    
    },
    Return: function (){
      return (this.latitude = null,
      this.longitude = null)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .Cards{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:rgb(255, 255, 255);
    font-size: 1.5em;
  }
  .Card img{
    height: 70px;
    margin-bottom: 10px;
  }
  .Card{
    margin: 15px;
  }
  .btn{
    margin: 15px;
  }
  .text{
    font-size: 1.5em;
    color: black;
    width: 80%;
    margin-top: 16px;
  }
  .p{
    font-weight: 2em;
  }
  .center-text {

    background-color:#ffc107;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }



</style>
