import { action, computed, makeObservable, observable } from "mobx"
import api from "../../api/api"
import { CollectionPreviewItemEntities } from "../../api/shop/data"
import { CartEntities } from "../../firebaseSDK/cart/cart"
import authStore from "../auth/authStore"
import { ActionStatus } from "../storeType"
import { CartEntitiesItem } from "./cartType"

class CartStore {
  entities: CartEntitiesItem | null = null
  status: ActionStatus = ActionStatus.useless
  error: string | null = null

  constructor() {
    makeObservable(this, {
      entities: observable,
      status: observable,
      error: observable,
      cartCountItems: computed,
      cartTotalPrice: computed,
      fetchCart: action,
      addToCart: action,
      removeFromCart: action,
      deleteFromCart: action,
      clearCart: action,
    })
  }

  get cartCountItems() {
    if (this.entities && Object.values(this.entities).length) {
      return Object.values(this.entities).reduce(
        (previousValue, currentValue) => {
          return previousValue + currentValue.count
        },
        0
      )
    }
    return 0
  }

  get cartTotalPrice() {
    if (this.entities && Object.values(this.entities).length) {
      return Object.values(this.entities).reduce(
        (previousValue, currentValue) => {
          return previousValue + currentValue.price * currentValue.count
        },
        0
      )
    }

    return 0
  }

  async fetchCart(): Promise<CartEntitiesItem | undefined> {
    try {
      this.status = ActionStatus.pending
      this.error = null

      const userId: any = authStore?.entities?.id
      console.log(authStore)
      let cartOld = null

      if (userId) {
        cartOld = await api.cart.fetchCartDocument(userId)
      }

      this.entities = cartOld
      this.status = ActionStatus.success

      return cartOld as CartEntitiesItem
    } catch (err) {
      this.status = ActionStatus.failure
      this.error = "error"
    }
  }

  async addToCart(
    payload: CollectionPreviewItemEntities
  ): Promise<CartEntitiesItem | undefined> {
    try {
      this.status = ActionStatus.pending
      this.error = null

      const userId: any = authStore?.entities?.id
      const cartOld = await api.cart.fetchCartDocument(userId)

      const existItem = cartOld?.[String(payload.id)]
      let count = 1

      if (existItem) {
        count = existItem.count + 1
      }

      await api.cart.createCartDocument({
        userId,
        id: payload.id,
        name: payload.name,
        imageUrl: payload.imageUrl,
        price: payload.price,
        count,
      })

      const cartNew = await api.cart.fetchCartDocument(userId)

      this.entities = cartNew
      this.status = ActionStatus.success

      return cartNew as CartEntitiesItem
    } catch (err) {
      this.status = ActionStatus.failure
      this.error = "error"
    }
  }

  async removeFromCart(
    payload: CartEntities
  ): Promise<CartEntitiesItem | undefined> {
    try {
      this.status = ActionStatus.pending
      this.error = null

      const userId: any = authStore?.entities?.id
      const cartOld = await api.cart.fetchCartDocument(userId)

      const existItem = cartOld?.[String(payload.id)]
      let count = 0

      if (existItem && existItem.count > 0) {
        count = existItem.count - 1
      }

      switch (count) {
        case 0:
          await api.cart.deleteCartFieldDocument({
            userId,
            id: payload.id,
          })
          break

        default:
          await api.cart.updateCartDocument({
            userId,
            id: payload.id,
            name: payload.name,
            imageUrl: payload.imageUrl,
            price: payload.price,
            count,
          })
      }

      const cartNew = await api.cart.fetchCartDocument(userId)

      this.entities = cartNew
      this.status = ActionStatus.success

      return cartNew as CartEntitiesItem
    } catch (err) {
      this.status = ActionStatus.failure
      this.error = "error"
    }
  }

  async deleteFromCart(
    payload: CartEntities
  ): Promise<CartEntitiesItem | undefined> {
    try {
      this.status = ActionStatus.pending
      this.error = null

      const userId: any = authStore?.entities?.id

      await api.cart.deleteCartFieldDocument({
        userId,
        id: payload.id,
      })

      const cartNew = await api.cart.fetchCartDocument(userId)

      this.entities = cartNew
      this.status = ActionStatus.success

      return cartNew as CartEntitiesItem
    } catch (err) {
      this.status = ActionStatus.failure
      this.error = "error"
    }
  }

  clearCart() {
    try {
      this.status = ActionStatus.pending
      this.error = null

      this.entities = null
      this.status = ActionStatus.success

      return null
    } catch (err) {
      this.status = ActionStatus.failure
      this.error = "error"
    }
  }
}

const cartStore = new CartStore()

export default cartStore
