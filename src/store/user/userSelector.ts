import { UserState } from "./userSlice"

type UserModule = {
  user: UserState
}

function selectUserStatusFetch(state: UserModule) {
  return state.user.status
}

function selectUser(state: UserModule) {
  return state.user.entities
}

export { selectUserStatusFetch, selectUser }
