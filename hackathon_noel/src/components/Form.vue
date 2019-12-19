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
     <b-button type="submit" variant="primary" @click="onSubmit" >Submit</b-button>
  </div>
</template>

<script>
 
  export default {
    data() {
      return {
        form: {
          description: '',
          dechet: null,
          checked: []
        },
        dechets: [{ text: 'Selectionner', value: null }, 'Encombrants', 'Déjections animales', 'Autres'],
        show: true
      }
    },


    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
        axios.post('http://localhost:8000/tweet', {
        description: this.form.description,
        dechet: this.form.dechets
      })
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