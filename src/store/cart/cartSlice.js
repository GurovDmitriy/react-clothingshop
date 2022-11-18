import { createSlice } from "@reduxjs/toolkit"
import actionStatusTypes from "../types/actionStatusTypes"
import { fetchCartAction, updateCartAction } from "./cartAction"

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
      .addCase(updateCartAction.pending, (state) => {
        state.status = actionStatusTypes.pending
        state.error = null
      })
      .addCase(updateCartAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = actionStatusTypes.success
      })
      .addCase(updateCartAction.rejected, (state, action) => {
        state.status = actionStatusTypes.failure
        state.error = action.error.message
      })
  },
})

const cartReducer = cartSlice.reducer

export { cartReducer }
