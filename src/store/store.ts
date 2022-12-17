import authStore from "./auth/authStore"
import cartStore from "./cart/cartStore"
import userStore from "./user/userStore"

const store = {
  auth: authStore,
  user: userStore,
  cart: cartStore,
}

export default store
