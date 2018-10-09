import Vue from "Vue"
import VueRouter from "vue-router"

import mian from "components/main.vue"
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path:'/',component:mian
    }
  ]
})

export default router