import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios';
import * as L from 'leaflet'
import 'leaflet.chinatmsproviders'
import 'leaflet/dist/leaflet.css'
import store from './store'

Vue.config.productionTip = false

Vue.use(L)
Vue.use(ElementUI)
Vue.use(BootstrapVue)
Vue.L = Vue.prototype.$L = L
Vue.prototype.axios = axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
