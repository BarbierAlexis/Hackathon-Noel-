<template>
  <div id="app">
    <Navbar />
    <Description />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Form from './components/Form'
import Description from './components/Description.vue'
import Footer from './components/Footer'


export default {
  name: 'app',
  components: {
    Navbar,
    Description,
    Form,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #122A2B;
}
</style>
