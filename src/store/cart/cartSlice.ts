import { createSlice } from "@reduxjs/toolkit"
import {
  addToCartAction,
  clearCartAction,
  deleteFromCartAction,
  fetchCartAction,
  removeFromCartAction,
} from "./cartAction"

import {ActionStatus} from "../../helpers/constants"

interface CartState {
  entities?: object | null
  status: string
  error?: string | null
}

const initialState: CartState = {
  entities: null,
  status: ActionStatus.useless,
  error: null,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCartAction.pending, (state) => {
        state.status = ActionStatus.pending
        state.error = null
      })
      .addCase(fetchCartAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = ActionStatus.success
      })
      .addCase(fetchCartAction.rejected, (state, action) => {
        state.status = ActionStatus.failure
        state.error = action.error.message
      })
      .addCase(addToCartAction.pending, (state) => {
        state.status = ActionStatus.pending
        state.error = null
      })
      .addCase(addToCartAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = ActionStatus.success
      })
      .addCase(addToCartAction.rejected, (state, action) => {
        state.status = ActionStatus.failure
        state.error = action.error.message
      })
      .addCase(removeFromCartAction.pending, (state) => {
        state.status = ActionStatus.pending
        state.error = null
      })
      .addCase(removeFromCartAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = ActionStatus.success
      })
      .addCase(removeFromCartAction.rejected, (state, action) => {
        state.status = ActionStatus.failure
        state.error = action.error.message
      })
      .addCase(deleteFromCartAction.pending, (state) => {
        state.status = ActionStatus.pending
        state.error = null
      })
      .addCase(deleteFromCartAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = ActionStatus.success
      })
      .addCase(deleteFromCartAction.rejected, (state, action) => {
        state.status = ActionStatus.failure
        state.error = action.error.message
      })
      .addCase(clearCartAction.pending, (state) => {
        state.status = ActionStatus.pending
        state.error = null
      })
      .addCase(clearCartAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = ActionStatus.success
      })
      .addCase(clearCartAction.rejected, (state, action) => {
        state.status = ActionStatus.failure
        state.error = action.error.message
      })
  },
})

const cartReducer = cartSlice.reducer

export { cartReducer }
