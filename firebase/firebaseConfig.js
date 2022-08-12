import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFKb-5JMJMgePKgxp96AMl2qKI1s5--QY",
  authDomain: "portfolio-191c0.firebaseapp.com",
  projectId: "portfolio-191c0",
  storageBucket: "portfolio-191c0.appspot.com",
  messagingSenderId: "629183989267",
  appId: "1:629183989267:web:3e3439a96715440675a1e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);