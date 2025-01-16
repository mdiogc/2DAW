// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6C2z671JApwqmJGFG9u3hJ7VQ9uq21No",
  authDomain: "login-proyecto-2b1ab.firebaseapp.com",
  projectId: "login-proyecto-2b1ab",
  storageBucket: "login-proyecto-2b1ab.firebasestorage.app",
  messagingSenderId: "646547998903",
  appId: "1:646547998903:web:140c6ebc523cc7ccb62532",
  measurementId: "G-F8V1DG4LP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);