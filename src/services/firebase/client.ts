import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhbRHvd00yXXb9fQGuXUOH2VJ-JUrxtc4",
  authDomain: "hs-system.firebaseapp.com",
  projectId: "hs-system",
  storageBucket: "hs-system.firebasestorage.app",
  messagingSenderId: "1041096695313",
  appId: "1:1041096695313:web:097955058973e125f9dbb0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
