import { configureStore, createAsyncThunk } from "@reduxjs/toolkit"
import { authReducer } from "./auth/authSlice"
import { cartReducer } from "./cart/cartSlice"
import { userReducer } from "./user/userSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
  rejectValue: string
  extra: { s: string; n: number }
}>()

export enum ActionStatus {
  useless = "useless",
  pending = "pending",
  success = "success",
  failure = "failure",
}

export default store
