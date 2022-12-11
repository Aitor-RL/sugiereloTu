// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhxxC1zYhGfgp28BLxlPlfPulbd5fQBDo",
  authDomain: "fir-cebem.firebaseapp.com",
  projectId: "fir-cebem",
  storageBucket: "fir-cebem.appspot.com",
  messagingSenderId: "348122685901",
  appId: "1:348122685901:web:d43812b2eca098920b2484"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}