import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../api/api"

const fetchCartAction = createAsyncThunk(
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

const addToCartAction = createAsyncThunk(
  "cart/addToCartAction",
  async (payload: CartEntitiesType, thunkAPI) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const userId = thunkAPI.getState().auth?.entities?.id
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

    return cartNew
  }
)

const removeFromCartAction = createAsyncThunk(
  "cart/removeFromCartAction",
  async (payload: CartEntitiesType, thunkAPI) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const userId = thunkAPI.getState().auth?.entities?.id
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

    return cartNew
  }
)

const deleteFromCartAction = createAsyncThunk(
  "cart/deleteFromCartAction",
  async (payload: CartEntitiesType, thunkAPI) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const userId = thunkAPI.getState().auth?.entities?.id

    await api.cart.deleteCartFieldDocument({
      userId,
      id: payload.id,
    })

    const cartNew = await api.cart.fetchCartDocument(userId)

    return cartNew
  }
)

const clearCartAction = createAsyncThunk("cart/clearCartAction", async () => {
  return null
})

export {
  fetchCartAction,
  addToCartAction,
  removeFromCartAction,
  deleteFromCartAction,
  clearCartAction,
}
