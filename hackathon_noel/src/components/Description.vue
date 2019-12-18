
<template>
  <div >
    <div v-if="latitude && longitude">
      <Form />
      <Button @click="Return">Return</Button>
    </div>
    <div v-else>
      <p>Bienvenue sur l'application "Un pied dans la merde", cette application vous permet de géolocaliser les déchets que vous croiser sur la ville de Nantes </p>
      <div class="Cards">
        <div>
          <img alt="Number1" src="../assets/number1.png">
          <p>Blabla</p>
        </div>
        <div>
          <img alt="Number2" src="../assets/number2.png">
          <p>Blabla</p>
        </div>
        <div>
          <img alt="Number3" src="../assets/number3.png">
          <p>Blabla</p>
        </div>
      </div>
      <div>
      <b-button pill variant="outline-primary" @click="Geo">Démarrer</b-button>
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
  }
  .Cards img{
    height: 50px;
  }

</style>