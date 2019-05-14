import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'
import store from './config/store'
import router from './config/router'
import './config/bootstrap'
import './config/msgs'

Vue.config.productionTip = false

// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IlBhdHJpY2sgQm9yZ2VzIiwiZW1haWwiOiJkZWx5dG9AZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTU1NzYxMTI1OSwiZXhwIjoxNTU3ODcwNDU5fQ.2M_k7xsPT1MCVuJo_FvebX-zwOyO3DU1mgbY9sN7YTc'
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')