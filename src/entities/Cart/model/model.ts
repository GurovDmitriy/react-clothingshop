"use client"

import { ICart, ICartProduct } from "@/entities/Cart"
import { adapterAddToCart } from "@/entities/Cart/adapters"
import { IProduct } from "@/entities/Product"
import { useStateFetch } from "@/shared/hooks/useStateFetch"
import { auth, db } from "@/shared/modules/firebaseSDK/config"
import Firebase from "firebase/compat/app"
import { deleteField, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"

export async function addToCartFB(
  uid: string,
  payload: ICartProduct,
): Promise<void> {
  const cartsRef = doc(db, "carts", uid)

  await setDoc(
    cartsRef,
    {
      [String(payload.id)]: {
        id: payload.id,
        name: payload.name,
        imageUrl: payload.imageUrl,
        count: payload.count,
        price: payload.price,
      },
    },
    { merge: true },
  )
}

export async function deleteFromCartFB(
  uid: string,
  payload: ICartProduct,
): Promise<void> {
  const cartsRef = doc(db, "carts", uid)

  await updateDoc(cartsRef, {
    [String(payload.id)]: deleteField(),
  })
}

export async function fetchCartFB(
  uid: string,
): Promise<Firebase.firestore.DocumentData | null> {
  const cartsRef = doc(db, `carts/${uid}`)
  const docSnap = await getDoc(cartsRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return null
  }
}

export async function updateCartFB(
  uid: string,
  payload: ICartProduct,
): Promise<void> {
  const cartsRef = doc(db, "carts", uid)

  await updateDoc(cartsRef, {
    [String(payload.id)]: {
      id: payload.id,
      name: payload.name,
      imageUrl: payload.imageUrl,
      count: payload.count,
      price: payload.price,
    },
  })
}

function useCart() {
  const { fetch, pending } = useStateFetch(fetchCart)
  const [cart, setCart] = useState<ICart>({})

  const uid = auth.currentUser?.uid
  const isAvailableActions = Boolean(uid)

  const total = Object.values(cart).reduce((prev, next) => {
    const count = next.count
    const price = next.price
    return count * price + prev
  }, 0)

  useEffect(() => {
    fetch()
  }, [])

  async function fetchCart(): Promise<void | undefined> {
    if (!isAvailableActions) return undefined

    const cart = await fetchCartFB(uid!)

    if (!cart) {
      setCart({})
    } else {
      setCart(cart)
    }
  }

  async function add(payload: IProduct): Promise<void | undefined> {
    if (!isAvailableActions) return undefined

    await addToCartFB(uid!, adapterAddToCart(payload))
    await fetch()
  }

  async function increase(product: ICartProduct): Promise<void | undefined> {
    if (!isAvailableActions) return undefined

    const payload = { ...product, count: product.count + 1 }

    await updateCartFB(uid!, payload)
    await fetch()
  }

  async function decrease(product: ICartProduct): Promise<void | undefined> {
    if (!isAvailableActions) return undefined

    if (product.count > 1) {
      const payload = { ...product, count: product.count - 1 }
      await updateCartFB(uid!, payload)
      await fetch()
    }
  }

  async function remove(product: ICartProduct): Promise<void | undefined> {
    if (!isAvailableActions) return undefined

    await deleteFromCartFB(uid!, product)
    await fetch()
  }

  return {
    cart,
    total,
    pending,
    add,
    increase,
    decrease,
    remove,
  }
}

export const modelCart = {
  useCart,
}
