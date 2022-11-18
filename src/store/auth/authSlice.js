import { createSlice } from "@reduxjs/toolkit"
import actionStatusTypes from "../types/actionStatusTypes"
import {
  signCheckAction,
  signInAction,
  signInWithGoogleAction,
  signOutAction,
  signUpAction,
} from "./authAction"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    entities: null,
    status: actionStatusTypes.useless,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signUpAction.pending, (state) => {
        state.status = actionStatusTypes.pending
        state.error = null
      })
      .addCase(signUpAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = actionStatusTypes.success
      })
      .addCase(signUpAction.rejected, (state, action) => {
        state.status = actionStatusTypes.failure
        state.error = action.error.message
      })
      .addCase(signInAction.pending, (state) => {
        state.status = actionStatusTypes.pending
        state.error = null
      })
      .addCase(signInAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = actionStatusTypes.success
      })
      .addCase(signInAction.rejected, (state, action) => {
        state.status = actionStatusTypes.failure
        state.error = action.error.message
      })
      .addCase(signInWithGoogleAction.pending, (state) => {
        state.status = actionStatusTypes.pending
        state.error = null
      })
      .addCase(signInWithGoogleAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = actionStatusTypes.success
      })
      .addCase(signInWithGoogleAction.rejected, (state, action) => {
        state.status = actionStatusTypes.failure
        state.error = action.error.message
      })
      .addCase(signCheckAction.pending, (state) => {
        state.status = actionStatusTypes.pending
        state.error = null
      })
      .addCase(signCheckAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = actionStatusTypes.success
      })
      .addCase(signCheckAction.rejected, (state, action) => {
        state.status = actionStatusTypes.failure
        state.error = action.error.message
      })
      .addCase(signOutAction.pending, (state) => {
        state.status = actionStatusTypes.pending
        state.error = null
      })
      .addCase(signOutAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = actionStatusTypes.success
      })
      .addCase(signOutAction.rejected, (state, action) => {
        state.status = actionStatusTypes.failure
        state.error = action.error.message
      })
  },
})

const authReducer = authSlice.reducer

export { authReducer }
