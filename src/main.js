import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'vue-search-select/dist/VueSearchSelect.css';


import axios from 'axios'

Vue.prototype.$axios = axios;
Vue.prototype.$url_devise_key= '1bc7a3306ba06819c6fc';
Vue.prototype.$url_news_key= 'b91aaef1b9ab4235b6fe1766bff8d3e2';
Vue.prototype.$url_news = 'http://newsapi.org/v2/top-headlines?country=fr&category=technology&apiKey=b91aaef1b9ab4235b6fe1766bff8d3e2';
Vue.prototype.$url_devise = 'https://free.currconv.com/api/v7/convert';
Vue.prototype.$own_api_url = 'https://boiling-escarpment-06159.herokuapp.com'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')