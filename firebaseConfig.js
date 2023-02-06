// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCVcfn2jGucObfdMCKmj-CHKOgZWXaU-28",
  authDomain: "falanomic-e8ea9.firebaseapp.com",
  databaseURL: "https://falanomic-e8ea9-default-rtdb.firebaseio.com",
  projectId: "falanomic-e8ea9",
  storageBucket: "falanomic-e8ea9.appspot.com",
  messagingSenderId: "1041087420943",
  appId: "1:1041087420943:web:c70dced89e36424eb7a17a"
};



// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth(app);
export const db = firebase.database(app);
export const st = firebase.storage(app);

