import { createSlice } from "@reduxjs/toolkit"
import actionStatusTypes from "../../helpers/constants"
import {
  addToCartAction,
  clearCartAction,
  deleteFromCartAction,
  fetchCartAction,
  removeFromCartAction,
} from "./cartAction"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    entities: null,
    status: actionStatusTypes.useless,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCartAction.pending, (state) => {
        state.status = actionStatusTypes.pending
        state.error = null
      })
      .addCase(fetchCartAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = actionStatusTypes.success
      })
      .addCase(fetchCartAction.rejected, (state, action) => {
        state.status = actionStatusTypes.failure
        state.error = action.error.message
      })
      .addCase(addToCartAction.pending, (state) => {
        state.status = actionStatusTypes.pending
        state.error = null
      })
      .addCase(addToCartAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = actionStatusTypes.success
      })
      .addCase(addToCartAction.rejected, (state, action) => {
        state.status = actionStatusTypes.failure
        state.error = action.error.message
      })
      .addCase(removeFromCartAction.pending, (state) => {
        state.status = actionStatusTypes.pending
        state.error = null
      })
      .addCase(removeFromCartAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = actionStatusTypes.success
      })
      .addCase(removeFromCartAction.rejected, (state, action) => {
        state.status = actionStatusTypes.failure
        state.error = action.error.message
      })
      .addCase(deleteFromCartAction.pending, (state) => {
        state.status = actionStatusTypes.pending
        state.error = null
      })
      .addCase(deleteFromCartAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = actionStatusTypes.success
      })
      .addCase(deleteFromCartAction.rejected, (state, action) => {
        state.status = actionStatusTypes.failure
        state.error = action.error.message
      })
      .addCase(clearCartAction.pending, (state) => {
        state.status = actionStatusTypes.pending
        state.error = null
      })
      .addCase(clearCartAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = actionStatusTypes.success
      })
      .addCase(clearCartAction.rejected, (state, action) => {
        state.status = actionStatusTypes.failure
        state.error = action.error.message
      })
  },
})

const cartReducer = cartSlice.reducer

export { cartReducer }
