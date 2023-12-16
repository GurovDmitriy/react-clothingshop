import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import delayedMessageMiddleware from "../middleware/delayedMessageMiddleware/delayedMessageMiddleware"
// import loggerMiddleware from "../middleware/loggerMiddleware/loggerMiddleware"
import createSagaMiddleware from "redux-saga"
import { authReducer } from "./auth/authSlice"
import { cartReducer } from "./cart/cartSlice"
import { setThemeSaga } from "./theme/themeSaga"
import { themeReducer } from "./theme/themeSlice"
import { userReducer } from "./user/userSlice"

const sagaMiddleware = createSagaMiddleware()

const appMiddleware = [
  delayedMessageMiddleware,
  // loggerMiddleware,
  sagaMiddleware,
]

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
    theme: themeReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appMiddleware),
})

sagaMiddleware.run(setThemeSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
