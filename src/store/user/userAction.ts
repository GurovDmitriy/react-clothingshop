import Firebase from "firebase/compat"
import api from "../../api/api"
import { createAppAsyncThunk } from "../store"

export type CreateUserData = {
  id: string
  displayName: string
  email: string
}

export type UserDataReturn = {
  id: string
  displayName: string
  email: string
  createdAt: string
}

const createUserAction = createAppAsyncThunk(
  "user/createUserAction",
  async (payload: CreateUserData) => {
    const createdAt: any = new Date()

    await api.user.createUserDocument({
      ...payload,
      createdAt,
    })

    const response: Firebase.firestore.DocumentData | null =
      await api.user.fetchUserDocument(payload.id)

    return {
      id: payload.id,
      displayName: response?.displayName,
      email: response?.email,
      createdAt: response?.createdAt.toDate().toString(),
    } as UserDataReturn
  }
)

type FetchUserDocumentResponse = Firebase.firestore.DocumentData | null

const fetchUserAction = createAppAsyncThunk(
  "user/fetchUserAction",
  async (payload, thunkAPI) => {
    const userId: string | null = thunkAPI.getState().auth?.entities?.id || null

    const response: FetchUserDocumentResponse =
      await api.user.fetchUserDocument(userId)

    return {
      id: response?.uid,
      displayName: response?.displayName,
      email: response?.email,
      createdAt: response?.createdAt.toDate().toString(),
    } as UserDataReturn
  }
)

const clearUserAction = createAppAsyncThunk(
  "user/clearUserAction",
  async () => {
    return null
  }
)

export { fetchUserAction, createUserAction, clearUserAction }
