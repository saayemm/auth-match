// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy6HjdP5LCFlnGKF9IvA2e69oaMmBko7M",
  authDomain: "auth-match-cde32.firebaseapp.com",
  projectId: "auth-match-cde32",
  storageBucket: "auth-match-cde32.firebasestorage.app",
  messagingSenderId: "939498904388",
  appId: "1:939498904388:web:a59d517be9b4b6f9d21511"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;