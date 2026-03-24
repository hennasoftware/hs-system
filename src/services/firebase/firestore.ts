import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

import { db } from "./client";

export async function createDocument(collectionName: string, data: never) {
  const ref = collection(db, collectionName);
  return addDoc(ref, data);
}

export async function getCollection(collectionName: string) {
  const ref = collection(db, collectionName);
  const snapshot = await getDocs(ref);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function getDocument<Document>(collectionName: string, id: string): Promise<Document | null> {
  const ref = doc(db, collectionName, id);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as Document;
}

export async function updateDocument(collectionName: string, id: string, data: never) {
  const ref = doc(db, collectionName, id);
  return updateDoc(ref, data);
}

export async function deleteDocument(collectionName: string, id: string) {
  const ref = doc(db, collectionName, id);
  return deleteDoc(ref);
}
