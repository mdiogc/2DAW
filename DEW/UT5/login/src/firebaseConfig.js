import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD6C2z671JApwqmJGFG9u3hJ7VQ9uq21No",
  authDomain: "login-proyecto-2b1ab.firebaseapp.com",
  projectId: "login-proyecto-2b1ab",
  storageBucket: "login-proyecto-2b1ab.firebasestorage.app",
  messagingSenderId: "646547998903",
  appId: "1:646547998903:web:140c6ebc523cc7ccb62532",
  measurementId: "G-F8V1DG4LP1"
};
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export default firebaseApp;
