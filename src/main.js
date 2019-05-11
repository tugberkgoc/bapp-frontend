import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import UUID from 'vue-uuid';

import 'vuetify/dist/vuetify.min.css'

import vBTooltip from 'bootstrap-vue/es/directives/tooltip/tooltip'
Vue.directive('b-tooltip', vBTooltip)

Vue.use(Vuetify)
Vue.use(UUID);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
