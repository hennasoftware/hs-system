import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";

import { auth } from "./client";

export function signInUser(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signUpUser(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signOutUser() {
  return signOut(auth);
}

export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}
