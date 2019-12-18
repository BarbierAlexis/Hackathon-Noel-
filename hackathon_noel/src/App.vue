<template>
  <div id="app">
    <Navbar />
    <Description />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Form from './components/Form'
import Description from './components/Description.vue'


export default {
  name: 'app',
  components: {
    Navbar,
    Description,
    Form
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2F4F4F;
}
</style>
