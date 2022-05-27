// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa3paJfxmJx13xKX3wFAE0cyYXLjwpHgI",
  authDomain: "my-dictionary-3e592.firebaseapp.com",
  projectId: "my-dictionary-3e592",
  storageBucket: "my-dictionary-3e592.appspot.com",
  messagingSenderId: "328257627194",
  appId: "1:328257627194:web:ac12bcb51ff23a64344103",
  measurementId: "G-JPRLPG8E46"
};

initializeApp(firebaseConfig);
// Initialize Firebase
//const app = initializeApp(firebaseConfig);

export const db = getFirestore();