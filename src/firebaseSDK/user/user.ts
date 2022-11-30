import Firebase from "firebase/compat"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../config"

type CreateUserPayload = {
  id: string
  displayName: string
  email: string
  createdAt: string
}

type CreateUserReturn = Promise<void>

async function createUserDocumentFB(
  payload: CreateUserPayload
): CreateUserReturn {
  await setDoc(doc(db, "users", payload.id), {
    displayName: payload.displayName,
    email: payload.email,
    createdAt: payload.createdAt,
  })
}

type FetchUserPayload = string
type FetchUserReturn = Promise<Firebase.firestore.DocumentData | null>

async function fetchUserDocumentFB(id: FetchUserPayload): FetchUserReturn {
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
