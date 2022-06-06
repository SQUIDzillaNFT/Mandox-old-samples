import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfux6bkhfniSJEe8Av2xHnGeKNF8P5PDM",
  authDomain: "mandox-nft.firebaseapp.com",
  projectId: "mandox-nft",
  storageBucket: "mandox-nft.appspot.com",
  messagingSenderId: "483756838034",
  appId: "1:483756838034:web:50086598e9c9b329fa6a4b",
  measurementId: "G-KYRR1ZFSFP"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
