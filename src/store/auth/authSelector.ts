import { ActionStatus } from "../storeType"
import { AuthEntities, AuthModule } from "./authType"

function selectAuthStatusFetch(state: AuthModule): ActionStatus {
  return state.auth.status
}

function selectAuth(state: AuthModule): AuthEntities | null | undefined {
  return state.auth.entities
}

export { selectAuthStatusFetch, selectAuth }
