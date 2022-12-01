import {AuthState} from "./authSlice"

type AuthModule = {
  auth: AuthState
}

function selectAuthStatusFetch(state: AuthModule) {
  return state.auth.status
}

function selectAuth(state: AuthModule) {
  return state.auth.entities
}

export { selectAuthStatusFetch, selectAuth }
