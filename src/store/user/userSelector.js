/**
 *  @param {object} state - State Redux
 *  @returns {string} - User status fetch
 */
function selectUserStatusFetch(state) {
  return state.user.status
}

/**
 *  @param {object} state - State Redux
 *  @returns {object} - User data
 */
function selectUser(state) {
  return state.user.entities
}

export { selectUserStatusFetch, selectUser }
