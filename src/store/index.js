import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./auth/authSlice"
import { cartReducer } from "./cart/cartSlice"
import { userReducer } from "./user/userSlice"

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
  },
})
