import { createSlice } from "@reduxjs/toolkit"
import { ActionStatus } from "../storeType"
import { ThemeModule, ThemeType } from "./themeType"

const initialState: ThemeModule = {
  entities: {
    value: ThemeType.light,
  },
  status: ActionStatus.useless,
  error: null,
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemeActionPending(state) {
      state.status = ActionStatus.pending
      state.error = null
    },

    setThemeActionSuccess(state, action) {
      if (state.entities) {
        state.entities.value = action.payload
        state.status = ActionStatus.success
      }
    },

    setThemeActionFailure(state) {
      state.status = ActionStatus.failure
      state.error = "Error set theme"
    },
  },
})

const themeReducer = themeSlice.reducer

export { themeReducer }
