import {
  action,
  flowResult,
  makeObservable,
  observable,
  runInAction,
} from "mobx"
import api from "../../api/api"
import {
  SignResponse,
  SignWithGoogleResponse,
} from "../../firebaseSDK/auth/auth"
import { ActionStatus } from "../storeType"
import { AuthEntities, SignPayload, SignReturnData } from "./authType"

class AuthStore {
  entities: AuthEntities | null
  status: ActionStatus
  error: string | null

  constructor() {
    this.entities = null
    this.status = ActionStatus.useless
    this.error = null

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
    this.status = ActionStatus.pending
    this.error = null

    try {
      const response = await api.auth.signUp(payload)

      const data = {
        id: response.uid,
        displayName: response.displayName,
        email: response.email,
      }

      runInAction(() => {
        this.entities = data
        this.status = ActionStatus.success
      })

      return flowResult(response)
    } catch (err) {
      runInAction(() => {
        this.status = ActionStatus.failure
        this.error = "error"
      })
    }
  }

  async signIn(payload: SignPayload): Promise<SignResponse | null | undefined> {
    this.status = ActionStatus.pending
    this.error = null

    try {
      const response = await api.auth.signIn(payload)

      const data = {
        id: response.uid,
        displayName: response.displayName,
        email: response.email,
      }

      runInAction(() => {
        this.entities = data
        this.status = ActionStatus.success
      })

      return response
    } catch (err) {
      runInAction(() => {
        this.status = ActionStatus.failure
        this.error = "error"
      })
    }
  }

  async signInWithGoogle(): Promise<SignWithGoogleResponse | null | undefined> {
    this.status = ActionStatus.pending
    this.error = null

    try {
      const response = await api.auth.signInWithGoogle()

      const data = {
        id: response.user.uid,
        displayName: response.user.displayName,
        email: response.user.email,
      }

      runInAction(() => {
        this.entities = data
        this.status = ActionStatus.success
      })

      return response
    } catch (err) {
      runInAction(() => {
        this.status = ActionStatus.failure
        this.error = "error"
      })
    }
  }

  async signCheck() {
    this.status = ActionStatus.pending
    this.error = null

    try {
      const response = await api.auth.signCheck()

      runInAction(() => {
        this.entities = response
        this.status = ActionStatus.success
      })

      return response as SignReturnData
    } catch (err) {
      runInAction(() => {
        this.status = ActionStatus.failure
        this.error = "error"
      })
    }
  }

  async signOut() {
    this.status = ActionStatus.pending
    this.error = null

    try {
      await api.auth.signOut()

      runInAction(() => {
        this.entities = null
        this.status = ActionStatus.success
      })

      return null
    } catch (err) {
      runInAction(() => {
        this.status = ActionStatus.failure
        this.error = "error"
      })
    }
  }
}

const authStore = new AuthStore()

export default authStore
