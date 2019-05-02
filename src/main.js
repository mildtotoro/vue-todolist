import Vue from 'vue'
import App from './App.vue'
import '../semantic/out/semantic.min.js';
import '../semantic/out/semantic.min.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
