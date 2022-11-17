import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../api"
import cartOperationTypes from "../cartOperationTypes"

const updateCartAction = createAsyncThunk(
  "cart/updateCartAction",
  async (payload, thunkAPI) => {
    const userId = thunkAPI.getState().auth?.entities?.id
    const cartOld = await api.cart.fetchCartDocument(userId)
    let cartNew = null

    switch (payload.cartOperation) {
      case cartOperationTypes.increment:
        cartNew = await addToCart(userId, cartOld, payload)
        return cartNew

      case cartOperationTypes.decrement:
        cartNew = await removeFromCart(userId, cartOld, payload)
        return cartNew

      case cartOperationTypes.delete:
        cartNew = await deleteFromCart(userId, payload)
        return cartNew

      case cartOperationTypes.clear:
        cartNew = await clearCart()
        return cartNew

      default:
        return cartOld
    }
  }
)

const fetchCartAction = createAsyncThunk(
  "cart/fetchCartAction",
  async (payload, thunkAPI) => {
    const userId = thunkAPI.getState().auth?.entities?.id
    let cartOld = null

    if (userId) {
      cartOld = await api.cart.fetchCartDocument(userId)
    }

    return cartOld
  }
)

async function addToCart(userId, cartOld, payload) {
  const existItem = cartOld?.[String(payload.cartItem.id)]
  let count = 1

  if (existItem) {
    count = existItem.count + 1
  }

  await api.cart.createCartDocument({
    userId,
    id: payload.cartItem.id,
    name: payload.cartItem.name,
    imageUrl: payload.cartItem.imageUrl,
    price: payload.cartItem.price,
    count,
  })

  const cartNew = await api.cart.fetchCartDocument(userId)

  return cartNew
}

async function removeFromCart(userId, cartOld, payload) {
  const existItem = cartOld?.[String(payload.cartItem.id)]
  let count = 0

  if (existItem && existItem.count > 0) {
    count = existItem.count - 1
  }

  switch (count) {
    case 0:
      await api.cart.deleteCartFieldDocument({
        userId,
        id: payload.cartItem.id,
      })
      break

    default:
      await api.cart.updateCartDocument({
        userId,
        id: payload.cartItem.id,
        name: payload.cartItem.name,
        imageUrl: payload.cartItem.imageUrl,
        price: payload.cartItem.price,
        count,
      })
  }

  const cartNew = await api.cart.fetchCartDocument(userId)

  return cartNew
}

async function deleteFromCart(userId, payload) {
  await api.cart.deleteCartFieldDocument({
    userId,
    id: payload.cartItem.id,
  })

  const cartNew = await api.cart.fetchCartDocument(userId)

  return cartNew
}

async function clearCart() {
  return null
}

export { fetchCartAction, updateCartAction }
