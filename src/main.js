import Vue from 'vue'
import Icon from 'vue-awesome/components/Icon'
import router from './router/index'

import App from './App.vue'

import 'vue-awesome/icons'

Vue.config.productionTip = false

Vue.component('v-icon', Icon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')