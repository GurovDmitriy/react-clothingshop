import Firebase from "firebase/compat"
import firebaseSDK from "../../firebaseSDK/firebaseSDK"

type CreateCartDocumentPayload = {
  userId: string
  id: string
  name: string
  imageUrl: string
  count: number
  price: number
}

type CreateCartDocumentResponse = Promise<void>

function createCartDocument(
  payload: CreateCartDocumentPayload
): CreateCartDocumentResponse {
  const data = {
    userId: payload.userId,
    id: payload.id,
    name: payload.name,
    imageUrl: payload.imageUrl,
    count: payload.count,
    price: payload.price,
  }

  return firebaseSDK.cart.createCartDocumentFB(data)
}

type UpdateCartDocumentPayload = {
  userId: string
  id: string
  name: string
  imageUrl: string
  count: number
  price: number
}

type UpdateCartDocumentResponse = Promise<void>

function updateCartDocument(
  payload: UpdateCartDocumentPayload
): UpdateCartDocumentResponse {
  const data = {
    userId: payload.userId,
    id: payload.id,
    name: payload.name,
    imageUrl: payload.imageUrl,
    count: payload.count,
    price: payload.price,
  }

  return firebaseSDK.cart.updateCartDocumentFB(data)
}

type DeleteCartFieldDocumentPayload = {
  userId: string
  id: string
}

type DeleteCartFieldDocumentResponse = Promise<void>

function deleteCartFieldDocument(
  payload: DeleteCartFieldDocumentPayload
): DeleteCartFieldDocumentResponse {
  const data = {
    userId: payload.userId,
    id: payload.id,
  }

  return firebaseSDK.cart.deleteCartFieldDocumentFB(data)
}

type FetchCartDocumentResponse = Promise<Firebase.firestore.DocumentData | null>

function fetchCartDocument(id: string): FetchCartDocumentResponse {
  return firebaseSDK.cart.fetchCartDocumentFB(id)
}

export default {
  createCartDocument,
  updateCartDocument,
  deleteCartFieldDocument,
  fetchCartDocument,
}
