import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChJ8hQa5v4WuElHRuqW2XL6BTNUO4RFgA",
  authDomain: "my-portfolio-b205f.firebaseapp.com",
  projectId: "my-portfolio-b205f",
  storageBucket: "my-portfolio-b205f.firebasestorage.app",
  messagingSenderId: "623971620922",
  appId: "1:623971620922:web:f4ef4495d0b3e0aaeb7d03",
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, "comments-app");
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
