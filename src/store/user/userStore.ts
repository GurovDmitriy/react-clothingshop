import Firebase from "firebase/compat"
import { action, makeObservable, observable, runInAction } from "mobx"
import api from "../../api/api"
import authStore from "../auth/authStore"
import { ActionStatus } from "../storeType"
import { CreateUserPayload, UserDataReturn, UserEntities } from "./userType"

class UserStore {
  entities: UserEntities | null = null
  status: ActionStatus = ActionStatus.useless
  error: string | null = null

  constructor() {
    makeObservable(this, {
      entities: observable,
      status: observable,
      error: observable,
      createUser: action,
      fetchUser: action,
      clearUser: action,
    })
  }

  async createUser(
    payload: CreateUserPayload
  ): Promise<UserDataReturn | undefined> {
    this.status = ActionStatus.pending
    this.error = null

    try {
      const createdAt: any = new Date()

      await api.user.createUserDocument({
        ...payload,
        createdAt,
      })

      const response: Firebase.firestore.DocumentData | null =
        await api.user.fetchUserDocument(payload.id)

      const user = {
        id: payload.id,
        displayName: response?.displayName,
        email: response?.email,
        createdAt: response?.createdAt.toDate().toString(),
      }

      runInAction(() => {
        this.entities = user
        this.status = ActionStatus.success
      })

      return user as UserDataReturn
    } catch (err) {
      runInAction(() => {
        this.status = ActionStatus.failure
        this.error = "error"
      })
    }
  }

  async fetchUser(): Promise<UserDataReturn | undefined> {
    this.status = ActionStatus.pending
    this.error = null

    try {
      const userId: any = authStore?.entities?.id || null

      const response: Firebase.firestore.DocumentData | null =
        await api.user.fetchUserDocument(userId)

      const user = {
        id: response?.uid,
        displayName: response?.displayName,
        email: response?.email,
        createdAt: response?.createdAt.toDate().toString(),
      }

      runInAction(() => {
        this.entities = user
        this.status = ActionStatus.success
      })

      return user as UserDataReturn
    } catch (err) {
      runInAction(() => {
        this.status = ActionStatus.failure
        this.error = "error"
      })
    }
  }

  clearUser() {
    this.status = ActionStatus.pending
    this.error = null

    try {
      this.entities = null
      this.status = ActionStatus.success

      return null
    } catch (err) {
      this.status = ActionStatus.failure
      this.error = "error"
    }
  }
}

const userStore = new UserStore()

export default userStore
