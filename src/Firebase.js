import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6igjtTqs7NHZakj0O3DbUwAgOX4sMB5c",
  authDomain: "react-portfolio-73767.firebaseapp.com",
  projectId: "react-portfolio-73767",
  storageBucket: "react-portfolio-73767.appspot.com",
  messagingSenderId: "87281517544",
  appId: "1:87281517544:web:bdbef7317e22bc27acda5d",
  measurementId: "G-C83KD1TYDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
