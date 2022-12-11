import { CartEntities } from "../../firebaseSDK/cart/cart"
import { ActionStatus } from "../storeType"

export type CartEntitiesItem = {
  [id: string | number]: CartEntities
}

export type CartState = {
  entities?: CartEntitiesItem | null
  status: ActionStatus
  error?: string | null
}

export type CartModule = {
  cart: CartState
}
