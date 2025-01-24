import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChJ8hQa5v4WuElHRuqW2XL6BTNUO4RFgA",
  authDomain: "my-portfolio-b205f.firebaseapp.com",
  projectId: "my-portfolio-b205f",
  storageBucket: "my-portfolio-b205f.firebasestorage.app",
  messagingSenderId: "623971620922",
  appId: "1:623971620922:web:f4ef4495d0b3e0aaeb7d03",
  measurementId: "G-67KJFK8Z6W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
