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
  apiKey: "prototype-da432.firebaseapp.com",
  authDomain: "prototype-da432.firebaseapp.com",
  databaseURL: "prototype-da432.firebaseio.com",
  projectId: "prototype-da432",
  storageBucket: "prototype-da432.appspot.com",
  messagingSenderId: "593384736192"
});


export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
