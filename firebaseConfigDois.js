import firebaseDois from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfigDois = {
    apiKey: "AIzaSyCVcfn2jGucObfdMCKmj-CHKOgZWXaU-28",
    authDomain: "falanomic-e8ea9.firebaseapp.com",
    databaseURL: "https://falanomic-e8ea9-default-rtdb.firebaseio.com",
    projectId: "falanomic-e8ea9",
    storageBucket: "falanomic-e8ea9.appspot.com",
    messagingSenderId: "1041087420943",
    appId: "1:1041087420943:web:c70dced89e36424eb7a17a"
};

if (!firebaseDois.apps.length) {
  firebaseDois.initializeApp(firebaseConfigDois);
}

export { firebaseDois };