import { createSlice } from "@reduxjs/toolkit"
import fetchStateTypes from "../statusAction"
import { fetchUserAction } from "./userAction"

const userSlice = createSlice({
  name: "user",
  initialState: {
    entities: null,
    status: fetchStateTypes.useless,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUserAction.pending, (state) => {
        state.status = fetchStateTypes.pending
      })
      .addCase(fetchUserAction.fulfilled, (state, action) => {
        state.entities = action.payload
        state.status = fetchStateTypes.success
      })
      .addCase(fetchUserAction.rejected, (state, action) => {
        state.error = action.error.message
        state.status = fetchStateTypes.failure
      })
  },
})

const userReducer = userSlice.reducer

export { userReducer }
