import { createSlice } from "@reduxjs/toolkit"
import {
  signCheckAction,
  signInAction,
  signInWithGoogleAction,
  signOutAction,
  signUpAction,
} from "./authAction"

interface AuthState {
  entities?: object | null
  status: string
  error?: string | null
}

const initialState: AuthState = {
  entities: null,
  status: ActionStatus.useless,
  error: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signUpAction.pending, (state) => {
        state.status = ActionStatus.pending
        state.error = null
      })
      .addCase(signUpAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = ActionStatus.success
      })
      .addCase(signUpAction.rejected, (state, action) => {
        state.status = ActionStatus.failure
        state.error = action.error.message
      })
      .addCase(signInAction.pending, (state) => {
        state.status = ActionStatus.pending
        state.error = null
      })
      .addCase(signInAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = ActionStatus.success
      })
      .addCase(signInAction.rejected, (state, action) => {
        state.status = ActionStatus.failure
        state.error = action.error.message
      })
      .addCase(signInWithGoogleAction.pending, (state) => {
        state.status = ActionStatus.pending
        state.error = null
      })
      .addCase(signInWithGoogleAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = ActionStatus.success
      })
      .addCase(signInWithGoogleAction.rejected, (state, action) => {
        state.status = ActionStatus.failure
        state.error = action.error.message
      })
      .addCase(signCheckAction.pending, (state) => {
        state.status = ActionStatus.pending
        state.error = null
      })
      .addCase(signCheckAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = ActionStatus.success
      })
      .addCase(signCheckAction.rejected, (state, action) => {
        state.status = ActionStatus.failure
        state.error = action.error.message
      })
      .addCase(signOutAction.pending, (state) => {
        state.status = ActionStatus.pending
        state.error = null
      })
      .addCase(signOutAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = ActionStatus.success
      })
      .addCase(signOutAction.rejected, (state, action) => {
        state.status = ActionStatus.failure
        state.error = action.error.message
      })
  },
})

const authReducer = authSlice.reducer

export { authReducer }
