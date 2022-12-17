import { action, makeObservable, observable } from "mobx"
import api from "../../api/api"
import {
  SignResponse,
  SignWithGoogleResponse,
} from "../../firebaseSDK/auth/auth"
import { ActionStatus } from "../storeType"
import { AuthEntities, SignPayload, SignReturnData } from "./authType"

class AuthStore {
  entities: AuthEntities | null = null
  status: ActionStatus = ActionStatus.useless
  error: string | null = null

  constructor() {
    makeObservable(this, {
      entities: observable,
      status: observable,
      error: observable,
      signUp: action,
      signIn: action,
      signInWithGoogle: action,
      signCheck: action,
      signOut: action,
    })
  }

  async signUp(payload: SignPayload): Promise<SignResponse | null | undefined> {
    try {
      this.status = ActionStatus.pending
      this.error = null
      const response = await api.auth.signUp(payload)

      const data = {
        id: response.uid,
        displayName: response.displayName,
        email: response.email,
      }

      this.entities = data
      this.status = ActionStatus.success

      return response
    } catch (err) {
      this.status = ActionStatus.failure
      this.error = "error"
    }
  }

  async signIn(payload: SignPayload): Promise<SignResponse | null | undefined> {
    try {
      this.status = ActionStatus.pending
      this.error = null
      const response = await api.auth.signIn(payload)

      const data = {
        id: response.uid,
        displayName: response.displayName,
        email: response.email,
      }

      this.entities = data
      this.status = ActionStatus.success

      return response
    } catch (err) {
      this.status = ActionStatus.failure
      this.error = "error"
    }
  }

  async signInWithGoogle(): Promise<SignWithGoogleResponse | null | undefined> {
    try {
      this.status = ActionStatus.pending
      this.error = null
      const response = await api.auth.signInWithGoogle()

      const data = {
        id: response.user.uid,
        displayName: response.user.displayName,
        email: response.user.email,
      }

      this.entities = data
      this.status = ActionStatus.success

      return response
    } catch (err) {
      this.status = ActionStatus.failure
      this.error = "error"
    }
  }

  async signCheck() {
    try {
      this.status = ActionStatus.pending
      this.error = null

      const response = await api.auth.signCheck()

      this.entities = response
      this.status = ActionStatus.success

      return response as SignReturnData
    } catch (err) {
      this.status = ActionStatus.failure
      this.error = "error"
    }
  }

  async signOut() {
    try {
      this.status = ActionStatus.pending
      this.error = null

      await api.auth.signOut()

      this.entities = null
      this.status = ActionStatus.success

      return null
    } catch (err) {
      this.status = ActionStatus.failure
      this.error = "error"
    }
  }
}

const authStore = new AuthStore()

export default authStore
