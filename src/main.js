import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Buefy, {
  defaultIconPack: 'fas',
});

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
