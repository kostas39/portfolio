import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC1Ygjg01xorwmrxFN6Gy-24IUTUEakNpQ",
  authDomain: "portfolio-c8d71.firebaseapp.com",
  projectId: "portfolio-c8d71",
  storageBucket: "portfolio-c8d71.appspot.com",
  messagingSenderId: "1069075674706",
  appId: "1:1069075674706:web:524c230fb996086bb0918b",
  measurementId: "G-3PJGTPLBDG"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
