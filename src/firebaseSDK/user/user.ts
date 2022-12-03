import Firebase from "firebase/compat"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../config"

export type CreateUserPayload = {
  id: string
  displayName: string
  email: string
  createdAt: string
}

export type CreateUserResponse = Promise<void>

async function createUserDocument(
  payload: CreateUserPayload
): CreateUserResponse {
  await setDoc(doc(db, "users", payload.id), {
    displayName: payload.displayName,
    email: payload.email,
    createdAt: payload.createdAt,
  })
}

export type FetchUserPayload = string
export type FetchUserResponse = Promise<Firebase.firestore.DocumentData | null>

async function fetchUserDocument(id: FetchUserPayload): FetchUserResponse {
  const docRef = doc(db, `users/${id}`)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return null
  }
}

export default {
  createUserDocument,
  fetchUserDocument,
}
