import { ActionStatus } from "../storeType"

export type SignPayload = {
  email: string
  password: string
}

export type SignReturnData = {
  id: string
  displayName: string
  email: string
}

export type AuthModule = {
  auth: AuthState
}

export type AuthEntities = {
  id: string
}

export type AuthState = {
  entities?: AuthEntities | null
  status: ActionStatus
  error?: string | null
}
