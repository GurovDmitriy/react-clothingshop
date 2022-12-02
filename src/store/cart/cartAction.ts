import api from "../../api/api"
import { createAppAsyncThunk } from "../store"

const fetchCartAction = createAppAsyncThunk(
  "cart/fetchCartAction",
  async (payload, thunkAPI) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const userId = thunkAPI.getState().auth?.entities?.id
    let cartOld = null

    if (userId) {
      cartOld = await api.cart.fetchCartDocument(userId)
    }

    return cartOld
  }
)

const addToCartAction = createAppAsyncThunk(
  "cart/addToCartAction",
  async (payload: CartEntitiesType, thunkAPI) => {
    const userId = thunkAPI.getState().auth?.entities?.id
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const cartOld = await api.cart.fetchCartDocument(userId)

    const existItem = cartOld?.[String(payload.id)]
    let count = 1

    if (existItem) {
      count = existItem.count + 1
    }

    await api.cart.createCartDocument({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      userId,
      id: payload.id,
      name: payload.name,
      imageUrl: payload.imageUrl,
      price: payload.price,
      count,
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const cartNew = await api.cart.fetchCartDocument(userId)

    return cartNew
  }
)

const removeFromCartAction = createAppAsyncThunk(
  "cart/removeFromCartAction",
  async (payload: CartEntitiesType, thunkAPI) => {
    const userId = thunkAPI.getState().auth?.entities?.id
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const cartOld = await api.cart.fetchCartDocument(userId)

    const existItem = cartOld?.[String(payload.id)]
    let count = 0

    if (existItem && existItem.count > 0) {
      count = existItem.count - 1
    }

    switch (count) {
      case 0:
        await api.cart.deleteCartFieldDocument({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          userId,
          id: payload.id,
        })
        break

      default:
        await api.cart.updateCartDocument({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          userId,
          id: payload.id,
          name: payload.name,
          imageUrl: payload.imageUrl,
          price: payload.price,
          count,
        })
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const cartNew = await api.cart.fetchCartDocument(userId)

    return cartNew
  }
)

const deleteFromCartAction = createAppAsyncThunk(
  "cart/deleteFromCartAction",
  async (payload: CartEntitiesType, thunkAPI) => {
    const userId = thunkAPI.getState().auth?.entities?.id

    await api.cart.deleteCartFieldDocument({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      userId,
      id: payload.id,
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const cartNew = await api.cart.fetchCartDocument(userId)

    return cartNew
  }
)

const clearCartAction = createAppAsyncThunk(
  "cart/clearCartAction",
  async () => {
    return null
  }
)

export {
  fetchCartAction,
  addToCartAction,
  removeFromCartAction,
  deleteFromCartAction,
  clearCartAction,
}
