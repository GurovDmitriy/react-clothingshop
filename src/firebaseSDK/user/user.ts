import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../config"
import Firebase from "firebase/compat";

type CreateUserDocumentFBPayload = {
  id: string
  displayName: string
  email: string
  createdAt: string
}

async function createUserDocumentFB(payload: CreateUserDocumentFBPayload): Promise<void> {
  await setDoc(doc(db, "users", payload.id), {
    displayName: payload.displayName,
    email: payload.email,
    createdAt: payload.createdAt,
  })
}

async function fetchUserDocumentFB(id: string): Promise<Firebase.firestore.DocumentData | null> {
  const docRef = doc(db, `users/${id}`)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return null
  }
}

export default {
  createUserDocumentFB,
  fetchUserDocumentFB,
}
