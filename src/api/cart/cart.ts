import {
  CartDocumentPayload,
  CartDocumentResponse,
  DeleteCartFieldDocumentPayload,
  DeleteCartFieldDocumentResponse,
  FetchCartDocumentPayload,
  FetchCartDocumentResponse,
} from "../../firebaseSDK/cart/cart"
import firebaseSDK from "../../firebaseSDK/firebaseSDK"

function createCartDocument(
  payload: CartDocumentPayload
): CartDocumentResponse {
  const data = {
    userId: payload.userId,
    id: payload.id,
    name: payload.name,
    imageUrl: payload.imageUrl,
    count: payload.count,
    price: payload.price,
  }

  return firebaseSDK.cart.createCartDocument(data)
}

function updateCartDocument(
  payload: CartDocumentPayload
): CartDocumentResponse {
  const data = {
    userId: payload.userId,
    id: payload.id,
    name: payload.name,
    imageUrl: payload.imageUrl,
    count: payload.count,
    price: payload.price,
  }

  return firebaseSDK.cart.updateCartDocument(data)
}

function deleteCartFieldDocument(
  payload: DeleteCartFieldDocumentPayload
): DeleteCartFieldDocumentResponse {
  const data = {
    userId: payload.userId,
    id: payload.id,
  }

  return firebaseSDK.cart.deleteCartFieldDocument(data)
}

function fetchCartDocument(
  id: FetchCartDocumentPayload
): FetchCartDocumentResponse {
  return firebaseSDK.cart.fetchCartDocument(id)
}

export default {
  createCartDocument,
  updateCartDocument,
  deleteCartFieldDocument,
  fetchCartDocument,
}
