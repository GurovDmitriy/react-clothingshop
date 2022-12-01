import { createAsyncThunk } from "@reduxjs/toolkit"
import Firebase from "firebase/compat"
import api from "../../api/api"
import {createAppAsyncThunk} from "../store";

type CreateUserData = {
  id: string
  displayName: string
  email: string
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
    }
  }
)

type FetchUserDocumentResponse = Firebase.firestore.DocumentData | null

const fetchUserAction = createAppAsyncThunk(
  "user/fetchUserAction",
  async (payload, thunkAPI) => {
    const userId: string | null = thunkAPI.getState().auth?.entities?.id || null

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
      const response: FetchUserDocumentResponse = await api.user.fetchUserDocument(userId)

      return {
        id: response?.uid,
        displayName: response?.displayName,
        email: response?.email,
        createdAt: response?.createdAt.toDate().toString(),
      }
  }
)

const clearUserAction = createAsyncThunk("user/clearUserAction", async () => {
  return null
})

export { fetchUserAction, createUserAction, clearUserAction }
