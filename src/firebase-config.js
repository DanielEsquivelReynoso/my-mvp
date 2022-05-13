// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTif04FZHsgMdk6Dl4dBPxrsN7hR4PuBY",
  authDomain: "my-mvp-5c1e0.firebaseapp.com",
  projectId: "my-mvp-5c1e0",
  storageBucket: "my-mvp-5c1e0.appspot.com",
  messagingSenderId: "753665041798",
  appId: "1:753665041798:web:f3b8ab755623336252f807",
  measurementId: "G-SNL2BPRES7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
