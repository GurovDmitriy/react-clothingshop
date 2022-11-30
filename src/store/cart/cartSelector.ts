import { createSelector } from "@reduxjs/toolkit"
import type { TypedUseSelectorHook } from "react-redux"
import { ActionStatus } from "../../helpers/constants"
import { RootState } from "../store"

interface CartState extends TypedUseSelectorHook<RootState> {
  cart: {
    entities: object
    status: ActionStatus
    error: string
  }
}

function selectCartStatusFetch(state: CartState) {
  return state.cart.status
}

function selectCartError(state: CartState) {
  return state.cart.error
}

function selectCart(state: CartState) {
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
