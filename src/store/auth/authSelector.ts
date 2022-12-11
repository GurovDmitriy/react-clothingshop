import { AuthModule } from "./authType"

function selectAuthStatusFetch(state: AuthModule) {
  return state.auth.status
}

function selectAuth(state: AuthModule) {
  return state.auth.entities
}

export { selectAuthStatusFetch, selectAuth }
