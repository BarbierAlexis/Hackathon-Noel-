<template>
  <div>
      <b-form-group class="description" id="input-group-2" label="Description:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.description"
          required
          placeholder="Description"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Déchets:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.dechet"
          :options="dechets"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
  </div>
</template>

<script>
 
  export default {
    // mounted() {
    //   console.log('Component Mounted')
    // }
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
        // this.axios.post(`https://api.twitter.com/DesNantais/`), {
        //   description: this.description,
        //   dechet: this.dechet
        }
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

</script>

<style>

</style>
