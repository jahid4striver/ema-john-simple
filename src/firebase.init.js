// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8jZO3ghhRWIZy9vGyJFVO-M03HYCeZk8",
  authDomain: "ema-john-simple-2c741.firebaseapp.com",
  projectId: "ema-john-simple-2c741",
  storageBucket: "ema-john-simple-2c741.appspot.com",
  messagingSenderId: "279178361094",
  appId: "1:279178361094:web:dfd5cc01821610e552c687"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export default auth;