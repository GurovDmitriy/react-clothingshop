import { useStateFetch } from "@/shared/hooks/useStateFetch"
import { UNullishObj } from "@/shared/lib/types/util"

export enum TPathFormSign {
  signIn = "/sign-in",
  signUp = "/sign-up",
}

export interface ISignPayload {
  email: string
  password: string
}

export interface IFormSign {
  onSubmit(payload: ISignPayload): void
  onSignGoogle(): void
  hrefToggleForm: string
}

export interface IError {
  error: Error | null
}

export interface IAuthState {
  user: UNullishObj<IUser>
  isAuth: boolean
}

export interface IAuthMethods {
  signOut(): void
  signUp: ReturnType<typeof useStateFetch>
  signIn: ReturnType<typeof useStateFetch>
  signWithGoogle: ReturnType<typeof useStateFetch>
}

export interface IUser {
  email: string | null
  uid: string
}
