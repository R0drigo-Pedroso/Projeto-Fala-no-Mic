// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const st = getStorage(app);

