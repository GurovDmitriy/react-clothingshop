/** Selector for User fetch status
 *  @param {object} state - State Redux
 *  @returns {string|null} - User status fetch
 */
function selectUserStatusFetch(state) {
  if (state && state.user && state.user.status) {
    return state.user.status
  }
  return null
}

/** Selector for User fetch status
 *  @param {object} state - State Redux
 *  @returns {object|null} - User data
 */
function selectUser(state) {
  if (state && state.user) {
    return state.user.entities
  }
  return null
}

export { selectUserStatusFetch, selectUser }
