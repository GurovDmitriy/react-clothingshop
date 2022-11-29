import { createAsyncThunk } from "@reduxjs/toolkit"
import Firebase from "firebase/compat"
import api from "../../api/api"

type CreateUserData = {
  id: string
  displayName: string
  email: string
}

type CreateUserResponse = {
  id: string
  displayName: string
  email: string
  createdAt: string
}

const createUserAction = createAsyncThunk(
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

const fetchUserAction = createAsyncThunk(
  "user/fetchUserAction",
  async (payload, thunkAPI) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const userId = thunkAPI.getState().auth?.entities?.id
    const response: Firebase.firestore.DocumentData | null =
      await api.user.fetchUserDocument(userId)

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
