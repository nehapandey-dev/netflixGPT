// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_Zsh_HCMsMJO9Pp_A2g2OoPeA0Y9XwA4",
  authDomain: "netflixgpt-bca5d.firebaseapp.com",
  projectId: "netflixgpt-bca5d",
  storageBucket: "netflixgpt-bca5d.appspot.com",
  messagingSenderId: "1042716722183",
  appId: "1:1042716722183:web:2a6c981ec7e681dc4bd6a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();