import { createSelector } from "@reduxjs/toolkit"
import { CartState } from "./cartSlice"

type CartModule = {
  cart: CartState
}

function selectCartStatusFetch(state: CartModule) {
  return state.cart.status
}

function selectCartError(state: CartModule) {
  return state.cart.error
}

function selectCart(state: CartModule) {
  return state.cart.entities
}

const selectCartCountItems = createSelector([selectCart], (cart) => {
  if (cart && Object.values(cart).length) {
    return Object.values(cart).reduce((previousValue, currentValue) => {
      return previousValue + currentValue.count
    }, 0)
  }
  return 0
})

const selectCartTotalPrice = createSelector([selectCart], (cart) => {
  if (cart && Object.values(cart).length) {
    return Object.values(cart).reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price * currentValue.count
    }, 0)
  }

  return 0
})

export {
  selectCartStatusFetch,
  selectCart,
  selectCartError,
  selectCartCountItems,
  selectCartTotalPrice,
}
