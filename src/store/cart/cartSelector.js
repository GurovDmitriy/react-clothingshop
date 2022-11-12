import { createSelector } from "@reduxjs/toolkit"

/**
 *  @param {object} state - State Redux
 *  @returns {string} - Cart status fetch
 */
function selectCartStatusFetch(state) {
  return state.cart.status
}

/**
 * @param {object} state - State Redux
 * @returns {string} - Cart error
 */
function selectCartError(state) {
  return state.cart.error
}

/**
 * @param {object} state - State Redux
 * @returns {object} - Cart data
 */
function selectCart(state) {
  return state.cart.entities
}

/**
 * @param {object} state - State Redux
 * @returns {number} - Cart count items
 */
const selectCartCountItems = createSelector(
  [selectCart, (state) => state.auth.id],
  (cart) => {
    if (cart && Object.values(cart).length) {
      return Object.values(cart).reduce((previousValue, currentValue) => {
        return previousValue + currentValue.count
      }, 0)
    }
    return 0
  }
)

export {
  selectCartStatusFetch,
  selectCart,
  selectCartError,
  selectCartCountItems,
}
