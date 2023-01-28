// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeaaaoGMkEwKrxxOIO7pNIe7jSkqeKbbQ",
  authDomain: "chat-app-ca771.firebaseapp.com",
  projectId: "chat-app-ca771",
  storageBucket: "chat-app-ca771.appspot.com",
  messagingSenderId: "672175443652",
  appId: "1:672175443652:web:5a8c37c6448f02f8fa8391"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);