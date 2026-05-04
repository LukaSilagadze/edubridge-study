// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNEZ5msO2ui0-7ODzTwBQ2QNtSBKfX4EY",
  authDomain: "edubridge-events.firebaseapp.com",
  projectId: "edubridge-events",
  storageBucket: "edubridge-events.firebasestorage.app",
  messagingSenderId: "21831701849",
  appId: "1:21831701849:web:d8d7a58dc1a9c2579c6848"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
