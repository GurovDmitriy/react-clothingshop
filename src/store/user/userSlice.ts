import { createSlice } from "@reduxjs/toolkit"
import { ActionStatus } from "../store"
import {
  clearUserAction,
  createUserAction,
  fetchUserAction,
} from "./userAction"

export type UserEntities = {
  displayName: string
  email: string
  createdAt: string
}

export type UserState = {
  entities: UserEntities | null
  status: string
  error?: string | null
}

const initialState: UserState = {
  entities: null,
  status: ActionStatus.useless,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createUserAction.pending, (state) => {
        state.status = ActionStatus.pending
        state.error = null
      })
      .addCase(createUserAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = ActionStatus.success
      })
      .addCase(createUserAction.rejected, (state, action) => {
        state.status = ActionStatus.failure
        state.error = action.error.message
      })
      .addCase(fetchUserAction.pending, (state) => {
        state.status = ActionStatus.pending
        state.error = null
      })
      .addCase(fetchUserAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = ActionStatus.success
      })
      .addCase(fetchUserAction.rejected, (state, action) => {
        state.status = ActionStatus.failure
        state.error = action.error.message
      })
      .addCase(clearUserAction.pending, (state) => {
        state.status = ActionStatus.pending
        state.error = null
      })
      .addCase(clearUserAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = ActionStatus.success
      })
      .addCase(clearUserAction.rejected, (state, action) => {
        state.status = ActionStatus.failure
        state.error = action.error.message
      })
  },
})

const userReducer = userSlice.reducer

export { userReducer }
