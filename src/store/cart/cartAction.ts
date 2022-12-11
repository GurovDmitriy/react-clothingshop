import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../api/api"
import { CollectionPreviewItemEntities } from "../../api/shop/data"
import { CartEntities } from "../../firebaseSDK/cart/cart"
import { RootState } from "../store"
import { CartEntitiesItem } from "./cartType"

const fetchCartAction = createAsyncThunk<
  CartEntitiesItem,
  null | undefined,
  { state: RootState }
>("cart/fetchCartAction", async (payload, thunkAPI) => {
  const userId = thunkAPI.getState().auth?.entities?.id
  let cartOld = null

  if (userId) {
    cartOld = await api.cart.fetchCartDocument(userId)
  }

  return cartOld as CartEntitiesItem
})

const addToCartAction = createAsyncThunk<
  CartEntitiesItem,
  CollectionPreviewItemEntities,
  { state: RootState }
>("cart/addToCartAction", async (payload, thunkAPI) => {
  const userId: any = thunkAPI.getState().auth?.entities?.id
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

  return cartNew as CartEntitiesItem
})

const removeFromCartAction = createAsyncThunk<
  CartEntitiesItem,
  CartEntities,
  { state: RootState }
>("cart/removeFromCartAction", async (payload, thunkAPI) => {
  const userId: any = thunkAPI.getState().auth?.entities?.id
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

  return cartNew as CartEntitiesItem
})

const deleteFromCartAction = createAsyncThunk<
  CartEntitiesItem,
  CartEntities,
  { state: RootState }
>("cart/deleteFromCartAction", async (payload, thunkAPI) => {
  const userId: any = thunkAPI.getState().auth?.entities?.id

  await api.cart.deleteCartFieldDocument({
    userId,
    id: payload.id,
  })

  const cartNew = await api.cart.fetchCartDocument(userId)

  return cartNew as CartEntitiesItem
})

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
