import Vue from 'vue'
import App from './App.vue'
import './main.css';

require('../semantic/out/semantic.min.js');
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
