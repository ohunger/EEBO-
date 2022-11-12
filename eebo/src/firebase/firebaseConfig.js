// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAljI76OPn24ZPicYz27Yu5DkptneiWGlY",
  authDomain: "eebo-c2acf.firebaseapp.com",
  projectId: "eebo-c2acf",
  storageBucket: "eebo-c2acf.appspot.com",
  messagingSenderId: "385439455736",
  appId: "1:385439455736:web:d4c6229fdd6524de769e0d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)