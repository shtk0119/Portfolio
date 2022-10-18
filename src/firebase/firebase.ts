// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDBdrP6TPzXE6SmmIFNIOQsNSiBGCLl5Uc",
  authDomain: "portfolio-a0aec.firebaseapp.com",
  projectId: "portfolio-a0aec",
  storageBucket: "portfolio-a0aec.appspot.com",
  messagingSenderId: "594371941441",
  appId: "1:594371941441:web:4f89295f4706ecce13e2c0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);