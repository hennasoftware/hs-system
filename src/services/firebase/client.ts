import { getEnvValue } from "@/shared/utils";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: getEnvValue("VITE_FIREBASE_API_KEY"),
  authDomain: getEnvValue("VITE_FIREBASE_AUTH_DOMAIN"),
  projectId: getEnvValue("VITE_FIREBASE_PROJECT_ID"),
  storageBucket: getEnvValue("VITE_FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: getEnvValue("VITE_FIREBASE_MESSAGING_SENDER_ID"),
  appId: getEnvValue("VITE_FIREBASE_APP_ID"),
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
