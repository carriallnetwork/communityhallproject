// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGLiaiXtdcSHgh7eFdQ0rnPLQJa7mWorE",
  authDomain: "communityhallproject.firebaseapp.com",
  projectId: "communityhallproject",
  storageBucket: "communityhallproject.appspot.com",
  messagingSenderId: "209651201210",
  appId: "1:209651201210:web:4a24a0c4f1dd2afba1fe83",
  measurementId: "G-R9LN247KS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;