export type CreateUserPayload = {
  id: string
  displayName: string
  email: string
}

export type UserDataReturn = {
  id: string
  displayName: string
  email: string
  createdAt: string
}

export type UserEntities = {
  displayName: string
  email: string
  createdAt: string
}

export type UserState = {
  entities: UserEntities | null
  status: string
  error?: string | null
}

export type UserModule = {
  user: UserState
}
