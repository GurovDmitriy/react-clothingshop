import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../api"

const createUserAction = createAsyncThunk(
  "user/createUserAction",
  async (payload) => {
    const createdAt = new Date()
    const response = await api.user.createUserDocument({
      ...payload,
      createdAt,
    })
    return response.data
  }
)

const fetchUserAction = createAsyncThunk("user/fetchUserAction", async (id) => {
  const response = await api.user.getUserDocument(id)
  return {
    id,
    ...response,
    createdAt: response.createdAt.toDate().toString(),
  }
})

const clearUserAction = createAsyncThunk("user/clearUserAction", async () => {
  return null
})

export { fetchUserAction, createUserAction, clearUserAction }
