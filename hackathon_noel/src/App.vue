<template>
  <div id="app">
    <Description msg="Un pied dans la merde!!!" />
  </div>
</template>

<script>
import Description from './components/Description.vue'

export default {
  name: 'app',
  components: {
    Description
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
