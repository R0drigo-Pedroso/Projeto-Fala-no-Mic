import { initializeApp } from "firebase/app";

//Documentação: https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWJ7xruqhoSm9qm9secyR-yQE4pUGpHuA",
  authDomain: "fala-no-mic.firebaseapp.com",
  projectId: "fala-no-mic",
  storageBucket: "fala-no-mic.appspot.com",
  messagingSenderId: "356208823714",
  appId: "1:356208823714:web:908e7de67dc183eae936fb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
