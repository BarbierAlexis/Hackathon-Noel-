<template>
  <div class="container">
    <h2>FORMULAIRE</h2>
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
    <b-button type="submit" variant="primary" @click="Geo" >Submit</b-button>
    <Camera v-on:takePicture="this.takePicture" />
    <Gallery />
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
          longitude: null
        },
        dechets: [{ text: 'Selectionner', value: null }, 'Encombrants', 'Déjections animales', 'Autres'],
        show: true
      }
    },

    methods: {
    
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

      onSubmit(evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
        axios.post('http://localhost:8000/tweet/', {
          description: this.form.description,
          dechet: this.form.dechet
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
.form-group {
  width: 50%;
}
</style>