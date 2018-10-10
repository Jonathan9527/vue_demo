import Vue from 'vue'
import App from './App.vue'

import router from "@/router/router.js"
// import "./assets/css/index.scss"
import elementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(elementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
