"use client"

import { IPropsChildrenNode } from "@/lib/types/definitions"
import {
  ICart,
  ICartMethods,
  ICartProduct,
  ICartState,
} from "@/domain/Cart/types/types"
import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { useContextAuthState } from "@/domain/Sign/providers/ProviderAuth"
import { actionAddToCart } from "@/domain/Cart/actions/actionAddToCart"
import { actionFetchCart } from "@/domain/Cart/actions/actionFetchCart"
import { actionUpdateCart } from "@/domain/Cart/actions/actionUpdateCart"
import { actionDeleteFromCart } from "@/domain/Cart/actions/actionDeleteFromCart"
import { useStateFetch } from "@/hooks/useStateFetch"
import { message } from "antd"

interface IState extends ICartState {
  pending: boolean
}
interface IMethods extends ICartMethods {}

const ContextState = createContext<IState>(null!)
const ContextMethods = createContext<IMethods>(null!)

export function ProviderCart(props: IPropsChildrenNode) {
  const { fetch, pending } = useStateFetch(fetchCart)
  const [cart, setCart] = useState<ICart>({})
  const auth = useContextAuthState()

  const [messageApi, contextHolder] = message.useMessage()

  const uid = auth.user?.uid ?? null
  const isAvailableActions = Boolean(auth.isAuth) && Boolean(uid)

  const total = Object.values(cart).reduce((prev, next) => {
    const count = next.count
    const price = next.price
    return count * price + prev
  }, 0)

  useEffect(() => {
    fetch()
  }, [])

  useEffect(() => {}, [cart])

  async function fetchCart(): Promise<void | undefined> {
    if (!isAvailableActions) return undefined

    const cart = await actionFetchCart(uid!)

    if (!cart) {
      setCart({})
    } else {
      setCart(cart)
    }
  }

  async function add(payload: ICartProduct): Promise<void | undefined> {
    if (!isAvailableActions) return undefined

    await addWithMessage(async () => {
      await actionAddToCart(uid!, payload)
      await fetch()
    })
  }

  async function increase(product: ICartProduct): Promise<void | undefined> {
    if (!isAvailableActions) return undefined

    const payload = { ...product, count: product.count + 1 }

    await actionUpdateCart(uid!, payload)
    await fetch()
  }

  async function decrease(product: ICartProduct): Promise<void | undefined> {
    if (!isAvailableActions) return undefined

    if (product.count > 1) {
      const payload = { ...product, count: product.count - 1 }
      await actionUpdateCart(uid!, payload)
      await fetch()
    }
  }

  async function remove(product: ICartProduct): Promise<void | undefined> {
    if (!isAvailableActions) return undefined

    await actionDeleteFromCart(uid!, product)
    await fetch()
  }

  async function addWithMessage(cb: () => Promise<any>) {
    const key = "addToCart"
    messageApi.open({ key, type: "loading", content: "Add to cart..." })
    await cb()
    messageApi.open({ key, type: "success", content: "Product added" })
  }

  const state: IState = {
    cart,
    total,
    pending,
  }

  const methods: IMethods = useMemo(() => {
    return {
      fetch,
      add,
      increase,
      decrease,
      remove,
    }
  }, [])

  return (
    <ContextState.Provider value={state}>
      <ContextMethods.Provider value={methods}>
        {contextHolder}
        {props.children}
      </ContextMethods.Provider>
    </ContextState.Provider>
  )
}

export function useContextCartState() {
  return useContext(ContextState)
}

export function useContextCartMethods() {
  return useContext(ContextMethods)
}
