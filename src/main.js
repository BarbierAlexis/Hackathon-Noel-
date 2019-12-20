import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import axios from 'axios'


Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
