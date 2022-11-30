import type { TypedUseSelectorHook } from "react-redux"
import { RootState } from "../store"
import {ActionStatus} from "../../helpers/constants"

interface AuthState extends TypedUseSelectorHook<RootState> {
  auth: {
    entities: object
    status: ActionStatus
    error: string
  }
}

function selectAuthStatusFetch(state: AuthState) {
  return state.auth.status
}

function selectAuth(state: AuthState) {
  return state.auth.entities
}

export { selectAuthStatusFetch, selectAuth }
