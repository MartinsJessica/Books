import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAaYNV2JWTasI8Ln7yZhaAYjzHQvU_T1ME",
    authDomain: "jessica-39d0e.firebaseapp.com",
    projectId: "jessica-39d0e",
    storageBucket: "jessica-39d0e.appspot.com",
    messagingSenderId: "375180867437",
    appId: "1:375180867437:web:43f11e504bfb0c4a11cc64",
    measurementId: "G-3PBCL14FKH"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);