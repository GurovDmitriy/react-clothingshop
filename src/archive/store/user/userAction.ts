import { createAsyncThunk } from "@reduxjs/toolkit"
import Firebase from "firebase/compat"
import api from "../../api/api"
import { AppDispatch, RootState } from "../store"
import { CreateUserPayload, UserDataReturn } from "./userType"

const createUserAction = createAsyncThunk<UserDataReturn, CreateUserPayload>(
  "user/createUserAction",
  async (payload) => {
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

const fetchUserAction = createAsyncThunk<
  UserDataReturn,
  null | undefined,
  {
    dispatch: AppDispatch
    state: RootState
  }
>("user/fetchUserAction", async (payload, thunkAPI) => {
  const userId: any = thunkAPI.getState().auth?.entities?.id || null

  const response: FetchUserDocumentResponse = await api.user.fetchUserDocument(
    userId
  )

  return {
    id: response?.uid,
    displayName: response?.displayName,
    email: response?.email,
    createdAt: response?.createdAt.toDate().toString(),
  } as UserDataReturn
})

const clearUserAction = createAsyncThunk("user/clearUserAction", async () => {
  return null
})

export { fetchUserAction, createUserAction, clearUserAction }
