import Firebase from "firebase/compat"
import { deleteField, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../config"

export type CartDocumentPayload = {
  userId: string
  id: string
  name: string
  imageUrl: string
  count: number
  price: number
}

export type CartDocumentResponse = Promise<void>

async function createCartDocument(
  payload: CartDocumentPayload
): CartDocumentResponse {
  const cartsRef = doc(db, "carts", payload.userId)
  await setDoc(
    cartsRef,
    {
      [String(payload.id)]: {
        id: payload.id,
        name: payload.name,
        imageUrl: payload.imageUrl,
        count: payload.count,
        price: payload.price,
      },
    },
    { merge: true }
  )
}

async function updateCartDocument(
  payload: CartDocumentPayload
): CartDocumentResponse {
  const cartsRef = doc(db, "carts", payload.userId)
  await updateDoc(cartsRef, {
    [String(payload.id)]: {
      id: payload.id,
      name: payload.name,
      imageUrl: payload.imageUrl,
      count: payload.count,
      price: payload.price,
    },
  })
}

export type DeleteCartFieldDocumentPayload = {
  userId: string
  id: string
}

export type DeleteCartFieldDocumentResponse = Promise<void>

async function deleteCartFieldDocument(
  payload: DeleteCartFieldDocumentPayload
): DeleteCartFieldDocumentResponse {
  const cartsRef = doc(db, "carts", payload.userId)
  await updateDoc(cartsRef, {
    [String(payload.id)]: deleteField(),
  })
}

export type FetchCartDocumentPayload = string

export type FetchCartDocumentResponse =
  Promise<Firebase.firestore.DocumentData | null>

async function fetchCartDocument(
  id: FetchCartDocumentPayload
): FetchCartDocumentResponse {
  const cartsRef = doc(db, `carts/${id}`)
  const docSnap = await getDoc(cartsRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return null
  }
}

export default {
  createCartDocument,
  updateCartDocument,
  deleteCartFieldDocument,
  fetchCartDocument,
}
