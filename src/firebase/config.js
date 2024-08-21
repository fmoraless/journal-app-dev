// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8tVNEQ7116YocDtAS80sorp6g9RdV0_c",
  authDomain: "journal-app-b31c3.firebaseapp.com",
  projectId: "journal-app-b31c3",
  storageBucket: "journal-app-b31c3.appspot.com",
  messagingSenderId: "809369075384",
  appId: "1:809369075384:web:4da33cc81de61474253e4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(app);
export const FirebaseDB = getFirestore(app);
