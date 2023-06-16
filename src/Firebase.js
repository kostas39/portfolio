import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBf96AcCHQBSHRdQv-5yuUoCTZCI7XZZ7w",
  authDomain: "react-portfolio-9bbad.firebaseapp.com",
  projectId: "react-portfolio-9bbad",
  storageBucket: "react-portfolio-9bbad.appspot.com",
  messagingSenderId: "134534460385",
  appId: "1:134534460385:web:3bc424211d8d35bdd0d8a0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);
