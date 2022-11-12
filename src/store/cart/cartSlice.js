import { createSlice } from "@reduxjs/toolkit"
import actionStatusTypes from "../actionStatusTypes"
import { addToCartAction, removeFromCartAction } from "./cartAction"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    entities: {},
    status: actionStatusTypes.useless,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
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
  },
})

const cartReducer = cartSlice.reducer

export { cartReducer }
