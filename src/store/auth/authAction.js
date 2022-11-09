import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../api"

const signUpAction = createAsyncThunk("auth/signUpAction", async (payload) => {
  const response = await api.auth.signUp(payload)

  const data = {
    id: response.uid,
    displayName: response.displayName,
    email: response.email,
  }

  return data
})

const signInAction = createAsyncThunk("auth/signInAction", async (payload) => {
  const response = await api.auth.signIn(payload)
  return response.data
})

const signInWithGoogleAction = createAsyncThunk(
  "auth/signUpWithGoogleAction",
  async () => {
    const response = await api.auth.signInWithGoogle()

    const data = {
      id: response.user.uid,
      displayName: response.user.displayName,
      email: response.user.email,
    }
    return data
  }
)

const signCheckAction = createAsyncThunk("auth/signCheckAction", async () => {
  const response = await api.auth.signCheck()
  return response
})

const signOutAction = createAsyncThunk("auth/signOutAction", async () => {
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
