import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
<<<<<<< HEAD
import axios from 'axios'

Vue.use(BootstrapVue)
Vue.use(axios)
=======
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
>>>>>>> geoloc

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
