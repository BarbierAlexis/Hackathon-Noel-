<template>
  <div id="app">
    <HelloWorld msg="Gestion des déchets à Nantes"/>
    <Form/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Form from './components/Form'

export default {
  name: 'app',
  components: {
    HelloWorld,
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
  margin-top: 60px;
}
</style>
