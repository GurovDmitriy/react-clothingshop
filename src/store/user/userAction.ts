import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../api/api"

const createUserAction = createAsyncThunk(
  "user/createUserAction",
  async (payload) => {
    const createdAt = new Date()

    await api.user.createUserDocument({
      ...payload,
      createdAt,
    })

    const response = await api.user.getUserDocument(payload.id)

    return {
      id: payload.id,
      displayName: response.displayName,
      email: response.email,
      createdAt: response.createdAt.toDate().toString(),
    }
  }
)

const fetchUserAction = createAsyncThunk(
  "user/fetchUserAction",
  async (payload, thunkAPI) => {
    const userId = thunkAPI.getState().auth?.entities?.id
    const response = await api.user.getUserDocument(userId)

    return {
      id: response.uid,
      displayName: response.displayName,
      email: response.email,
      createdAt: response.createdAt.toDate().toString(),
    }
  }
)

const clearUserAction = createAsyncThunk("user/clearUserAction", async () => {
  return null
})

export { fetchUserAction, createUserAction, clearUserAction }
