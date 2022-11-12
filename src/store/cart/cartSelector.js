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

export { selectCartStatusFetch, selectCart, selectCartError }
