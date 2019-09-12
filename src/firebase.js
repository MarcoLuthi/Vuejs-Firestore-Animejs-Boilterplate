import { firebase } from "@firebase/app";
import "@firebase/firestore";


const firebaseApp = firebase.initializeApp({
  //add your api keys
  apiKey: "prototype-da432.firebaseapp.com",
  authDomain: "prototype-da432.firebaseapp.com",
  databaseURL: "prototype-da432.firebaseio.com",
  projectId: "prototype-da432",
  storageBucket: "prototype-da432.appspot.com",
  messagingSenderId: "593384736192"
});
