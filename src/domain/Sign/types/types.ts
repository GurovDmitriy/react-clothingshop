export enum TPathFormSign {
  signIn = "/sign-in",
  signUp = "/sign-up",
}

export interface ISignPayload {
  email: string
  password: string
}
