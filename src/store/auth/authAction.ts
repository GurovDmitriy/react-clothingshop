import api from "../../api/api"
import { createAppAsyncThunk } from "../store"

type SignPayload = {
  email: string
  password: string
}

type SignReturnData = {
  id: string
  displayName: string
  email: string
}

const signUpAction = createAppAsyncThunk(
  "auth/signUpAction",
  async (payload: SignPayload) => {
    const response = await api.auth.signUp(payload)

    const data = {
      id: response.uid,
      displayName: response.displayName,
      email: response.email,
    }

    return data as SignReturnData
  }
)

const signInAction = createAppAsyncThunk(
  "auth/signInAction",
  async (payload: SignPayload) => {
    const response = await api.auth.signIn(payload)

    const data = {
      id: response.uid,
      displayName: response.displayName,
      email: response.email,
    }

    return data as SignReturnData
  }
)

const signInWithGoogleAction = createAppAsyncThunk(
  "auth/signUpWithGoogleAction",
  async () => {
    const response = await api.auth.signInWithGoogle()

    const data = {
      id: response.user.uid,
      displayName: response.user.displayName,
      email: response.user.email,
    }

    return data as SignReturnData
  }
)

const signCheckAction = createAppAsyncThunk(
  "auth/signCheckAction",
  async () => {
    const response = await api.auth.signCheck()
    return response as SignReturnData
  }
)

const signOutAction = createAppAsyncThunk("auth/signOutAction", async () => {
  await api.auth.signOut()
  return null
})

export {
  signInAction,
  signUpAction,
  signInWithGoogleAction,
  signOutAction,
  signCheckAction,
}
