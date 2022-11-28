import { deleteField, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../config"
import Firebase from "firebase/compat";

type CartDocumentFBPayload = {
  userId: string
  id: string
  name: string
  imageUrl: string
  count: number
  price: number
}

async function createCartDocumentFB(payload: CartDocumentFBPayload): Promise<void> {
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

async function updateCartDocumentFB(payload: CartDocumentFBPayload): Promise<void> {
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

type DeleteCartFieldDocumentFBPayload = {
  userId: string
  id: string
}

async function deleteCartFieldDocumentFB(payload: DeleteCartFieldDocumentFBPayload): Promise<void> {
  const cartsRef = doc(db, "carts", payload.userId)
  await updateDoc(cartsRef, {
    [String(payload.id)]: deleteField(),
  })
}

async function fetchCartDocumentFB(id: string): Promise<Firebase.firestore.DocumentData | null> {
  const cartsRef = doc(db, `carts/${id}`)
  const docSnap = await getDoc(cartsRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return null
  }
}

export default {
  createCartDocumentFB,
  updateCartDocumentFB,
  deleteCartFieldDocumentFB,
  fetchCartDocumentFB,
}
