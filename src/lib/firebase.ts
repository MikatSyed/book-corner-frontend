// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7t9iIF_q3ZYlADbqpZIQ5NXZty5hohfg",
  authDomain: "tech-net-98649.firebaseapp.com",
  projectId: "tech-net-98649",
  storageBucket: "tech-net-98649.appspot.com",
  messagingSenderId: "452741508170",
  appId: "1:452741508170:web:f3eddf422dac5071894ab3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);