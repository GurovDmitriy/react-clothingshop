/**
 *  @param {object} state - State Redux
 *  @returns {string} - Auth status fetch
 */
function selectAuthStatusFetch(state) {
  return state.auth.status
}

/**
 *  @param {object} state - State Redux
 *  @returns {object} - Auth data
 */
function selectAuth(state) {
  return state.auth.entities
}

export { selectAuthStatusFetch, selectAuth }
