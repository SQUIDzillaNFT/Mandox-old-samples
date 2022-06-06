// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFrsuV4yEhTl4nlcd4aocX97mlQzFnxoA",
  authDomain: "mandox-llc.firebaseapp.com",
  projectId: "mandox-llc",
  storageBucket: "mandox-llc.appspot.com",
  messagingSenderId: "351305413183",
  appId: "1:351305413183:web:151cc4567e4dffdec8be8a",
  measurementId: "G-NBBTRF6D0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);