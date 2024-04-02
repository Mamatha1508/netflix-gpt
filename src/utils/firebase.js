// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrBKJ0Ku_lI5XWWKErWjHGpcTNE51XYF8",
  authDomain: "netflixgpt-ba415.firebaseapp.com",
  projectId: "netflixgpt-ba415",
  storageBucket: "netflixgpt-ba415.appspot.com",
  messagingSenderId: "982607987875",
  appId: "1:982607987875:web:c347efe44216420f3e2b16",
  measurementId: "G-KMTPQBPKJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();