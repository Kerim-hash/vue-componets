import Vue from 'vue'
import Vuex from 'vuex'
import { createModule } from 'vuex-toast'
Vue.use(Vuex)
import 'vuex-toast/dist/vuex-toast.css'
import auth from './authStore'
import blogs from './blogs'
import shop from './shop'
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    toast: createModule({
      dismissInterval: 3000
    }),
    auth,
    blogs,
    shop
  }
})
