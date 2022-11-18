import { createSlice } from "@reduxjs/toolkit"
import actionStatusTypes from "../types/actionStatusTypes"
import {
  clearUserAction,
  createUserAction,
  fetchUserAction,
} from "./userAction"

const userSlice = createSlice({
  name: "user",
  initialState: {
    entities: null,
    status: actionStatusTypes.useless,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createUserAction.pending, (state) => {
        state.status = actionStatusTypes.pending
        state.error = null
      })
      .addCase(createUserAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = actionStatusTypes.success
      })
      .addCase(createUserAction.rejected, (state, action) => {
        state.status = actionStatusTypes.failure
        state.error = action.error.message
      })
      .addCase(fetchUserAction.pending, (state) => {
        state.status = actionStatusTypes.pending
        state.error = null
      })
      .addCase(fetchUserAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = actionStatusTypes.success
      })
      .addCase(fetchUserAction.rejected, (state, action) => {
        state.status = actionStatusTypes.failure
        state.error = action.error.message
      })
      .addCase(clearUserAction.pending, (state) => {
        state.status = actionStatusTypes.pending
        state.error = null
      })
      .addCase(clearUserAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = actionStatusTypes.success
      })
      .addCase(clearUserAction.rejected, (state, action) => {
        state.status = actionStatusTypes.failure
        state.error = action.error.message
      })
  },
})

const userReducer = userSlice.reducer

export { userReducer }
