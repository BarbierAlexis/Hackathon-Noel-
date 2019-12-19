
<template>
  <div >
    <div v-if="latitude && longitude">
      <Form />
      <b-button pill variant="warning" @click="Return"><img alt="Arrow" class="arrow" src="../assets/arrow.png" height="40" width="40"></b-button>
    </div>
    <div v-else>
      <p class="text">Bienvenue sur l'application "Un pied dans la merde", cette application vous permet de géolocaliser les déchets que vous croiser sur la ville de Nantes </p>
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
      <b-button class="btn" pill variant="warning" @click="Geo">Démarrer</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Form from './Form'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)

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
    color:#62828E;
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
    background-color:#2293bb;
    font-size: 1.5em;
  }
  .p{
    font-weight: 2em;
  }

</style>
