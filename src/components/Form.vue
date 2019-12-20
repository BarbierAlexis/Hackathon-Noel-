<template>
  <div class="container">
    <hr>
    <center><b-form-group class="input" id="input-group-2" label="Description:" label-for="input-2" max-length="200">
      <b-form-input
        id="input-2"
        v-model="form.description"
        required
        placeholder="Description"
      ></b-form-input>
    </b-form-group></center>
    <center><b-form-group class="input" id="input-group-3" label="Déchets:" label-for="input-3" width=50%>
      <b-form-select
        id="input-3"
        v-model="form.dechet"
        :options="dechets"
        required
      ></b-form-select>
    </b-form-group></center>
    <b-button type="submit" variant="primary" @click="onSubmit" >Envoyer</b-button>
    <Camera v-on:takePicture="this.takePicture" />
    <Gallery />
    <hr>
    <p v-if="this.form.temperature"><b>Il fait {{this.form.temperature}}°C à Nantes</b></p>
    <p v-else></p>
    <b-button variant="primary" @click="Meteo" >Temperature</b-button>
    <hr>
  </div>
</template>
<script>

  import Camera from './Camera'
  import Gallery from './Gallery'

  export default {
    components: {
    Camera,
    Gallery
    },
    // mounted() {
    //   console.log('Component Mounted')
    // }

    data() {
      return {
        form: {
          image: null,
          description: '',
          dechet: null,
          checked: [],
          latitude: null,
          longitude: null,
          temperature: null
        },
        dechets: [{ text: 'Selectionner', value: null }, 'Encombrants', 'Déjections animales', 'Autres'],
        show: true
      }
    },

    methods: {

      Meteo:function (){
      axios('http://localhost:8090/weather')
      .then((response) => {
        return this.form.temperature =response.data.observations.location[0].observation[0].temperature;
      })
    },
    
      Geo: function (){
    navigator.geolocation.getCurrentPosition((success, error, options) =>{
      return (this.form.latitude = success.coords.latitude,
      this.form.longitude = success.coords.longitude)
    })
    },
    Return: function (){
      return (this.form.latitude = null,
      this.form.longitude = null)
    },

      takePicture () {
        let ratio = (window.innerHeight > window.innerWidth) ? 16 / 9 : 9 /16;
        const picture = document.querySelector("canvas");
        const ctx = picture.getContext("2d");
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(document.querySelector("video"),0,0, picture.width, picture.height)
        this.form.image = picture
        console.log(this.form.image)
      },

      async onSubmit(evt) {
        evt.preventDefault();
        await this.Geo();
        axios.post('http://localhost:8090/tweet/', {
          description: this.form.description,
          dechet: this.form.dechet,
          latitude: this.form.latitude,
          longitude: this.form.longitude
        }).then((response) => {
          console.log(response);
        }).catch(err => {
          console.error(err);
        })
      console.log(this.form.description)
    },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.description = ''
        this.form.dechet = null

        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }  
</script>

<style>
hr {
  background-color: #ffc201;
}
.container {
  margin-top: 50px;
}
.form-group {
  width: 50%;
}
</style>