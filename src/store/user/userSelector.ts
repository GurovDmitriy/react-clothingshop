function selectUserStatusFetch(state) {
  return state.user.status
}

function selectUser(state) {
  return state.user.entities
}

export { selectUserStatusFetch, selectUser }
