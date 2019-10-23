import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFirestore from 'vue-firestore';
import firebase from 'firebase/app'
import "firebase/firestore"

Vue.config.productionTip = false
Vue.use(VueFirestore);

firebase.initializeApp({
  //add your api keys
});


export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
