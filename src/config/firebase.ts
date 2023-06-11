// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTp42gec_-dbauh8uKsvRr2IGWfqLYn_4",
  authDomain: "react-social-media-proje-a1f5c.firebaseapp.com",
  projectId: "react-social-media-proje-a1f5c",
  storageBucket: "react-social-media-proje-a1f5c.appspot.com",
  messagingSenderId: "658534977773",
  appId: "1:658534977773:web:cb90675772479b022c7ce4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
