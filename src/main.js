import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import * as firebase from "firebase/app";
import VueMaterial from 'vue-material'
import VueCarousel from 'vue-carousel';
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
// Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(VueCarousel);
Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyB2DxlFN0B51lWB_vk_MYVyJNGI4qljFt4",
  authDomain: "vue-cli-2798a.firebaseapp.com",
  projectId: "vue-cli-2798a",
  storageBucket: "vue-cli-2798a.appspot.com",
  messagingSenderId: "765196850524",
  appId: "1:765196850524:web:890c679e732e3d9f1e5d99"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
