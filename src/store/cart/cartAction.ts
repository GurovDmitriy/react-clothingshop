import api from "../../api/api"
import {
  CartEntities,
  FetchCartDocumentResponse,
} from "../../firebaseSDK/cart/cart"
import { createAppAsyncThunk } from "../store"

const fetchCartAction = createAppAsyncThunk(
  "cart/fetchCartAction",
  async (payload, thunkAPI) => {
    const userId = thunkAPI.getState().auth?.entities?.id
    let cartOld = null

    if (userId) {
      cartOld = await api.cart.fetchCartDocument(userId)
    }

    return cartOld as FetchCartDocumentResponse
  }
)

const addToCartAction = createAppAsyncThunk(
  "cart/addToCartAction",
  async (payload: CartEntities, thunkAPI) => {
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

    return cartNew as FetchCartDocumentResponse
  }
)

const removeFromCartAction = createAppAsyncThunk(
  "cart/removeFromCartAction",
  async (payload: CartEntities, thunkAPI) => {
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

    return cartNew as FetchCartDocumentResponse
  }
)

const deleteFromCartAction = createAppAsyncThunk(
  "cart/deleteFromCartAction",
  async (payload: CartEntities, thunkAPI) => {
    const userId = thunkAPI.getState().auth?.entities?.id

    await api.cart.deleteCartFieldDocument({
      userId,
      id: payload.id,
    })

    const cartNew = await api.cart.fetchCartDocument(userId)

    return cartNew as FetchCartDocumentResponse
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
