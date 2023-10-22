import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnMoA-P0OtxFBSBh954ktpAnTEpeMTKT8",
  authDomain: "posts-app-a3f39.firebaseapp.com",
  projectId: "posts-app-a3f39",
  storageBucket: "posts-app-a3f39.appspot.com",
  messagingSenderId: "910105465483",
  appId: "1:910105465483:web:85c6b334e098969cc9ba8e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
