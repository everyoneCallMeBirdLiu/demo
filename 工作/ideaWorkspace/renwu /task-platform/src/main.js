import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from './vant/index';
import "amfe-flexible";
Vue.config.productionTip = false

for (let key in vant) {
  Vue.use(vant[key])
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
