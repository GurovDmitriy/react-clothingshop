import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../api"

const fetchUserAction = createAsyncThunk("user/fetchUser", async (id) => {
  const response = await api.auth.getUserDocument(id)
  const { createdAt, displayName, email } = response
  return {
    id,
    createdAt: createdAt.toDate().toString(),
    displayName,
    email,
  }
})

export { fetchUserAction }
