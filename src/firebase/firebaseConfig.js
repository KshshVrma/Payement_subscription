// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyCzq-iY4doTTZkZ1JYJf2_rdsU7TH0IF7g",
  authDomain: "stripe-subscription-290c8.firebaseapp.com",
  projectId: "stripe-subscription-290c8",
  storageBucket: "stripe-subscription-290c8.appspot.com",
  messagingSenderId: "430715494811",
  appId: "1:430715494811:web:a2d2e958cf3a38a467413e"
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export default firebase;
// Initialize Firebase
// const app = initializeApp(firebaseConfig);