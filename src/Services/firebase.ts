
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyADUgODr1Vbf1ih_Ry1T_mjyeA85QXiWBg",
  authDomain: "auth-8f42a.firebaseapp.com",
  projectId: "auth-8f42a",
  storageBucket: "auth-8f42a.firebasestorage.app",
  messagingSenderId: "654102109618",
  appId: "1:654102109618:web:12d81aaf04295d939f98ab",
  measurementId: "G-GKC5BLPZ6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);