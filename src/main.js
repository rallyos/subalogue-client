import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Landing from './Landing.vue'
import App from './App.vue'
import { GridGlobal  } from 'gridjs-vue'
import {version} from '../package.json';

Vue.use(GridGlobal)

Vue.config.productionTip = false
Vue.use(Buefy, {
  defaultIconPack: 'fas',
});

const routes = {
  '/': Landing,
  '/app': App,
}

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
    version: version
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute]// || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app')

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
