import Firebase from "firebase/compat"
import firebaseSDK from "../../firebaseSDK/firebaseSDK"

type CreateUserDocumentPayload = {
  id: string
  email: string
  displayName: string
  createdAt: string
}

type CreateUserDocumentResponse = Promise<void>

function createUserDocument(
  payload: CreateUserDocumentPayload
): CreateUserDocumentResponse {
  const data = {
    id: payload.id,
    email: payload.email,
    displayName: payload.displayName,
    createdAt: payload.createdAt,
  }

  return firebaseSDK.user.createUserDocumentFB(data)
}

type FetchUserDocumentResponse = Promise<Firebase.firestore.DocumentData | null>

function fetchUserDocument(id: string): FetchUserDocumentResponse {
  return firebaseSDK.user.getUserDocumentFB(id)
}

export default {
  createUserDocument,
  fetchUserDocument,
}
