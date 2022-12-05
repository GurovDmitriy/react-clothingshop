import firebaseSDK from "../../firebaseSDK/firebaseSDK"
import {
  CreateUserPayload,
  CreateUserResponse,
  FetchUserPayload,
  FetchUserResponse,
} from "../../firebaseSDK/user/user"

function createUserDocument(payload: CreateUserPayload): CreateUserResponse {
  const data = {
    id: payload.id,
    email: payload.email,
    displayName: payload.displayName,
    createdAt: payload.createdAt,
  }

  return firebaseSDK.user.createUserDocument(data)
}

function fetchUserDocument(id: FetchUserPayload): FetchUserResponse {
  return firebaseSDK.user.fetchUserDocument(id)
}

export default {
  createUserDocument,
  fetchUserDocument,
}
