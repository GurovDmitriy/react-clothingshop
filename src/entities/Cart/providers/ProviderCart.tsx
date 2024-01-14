"use client"

import { ICartMethods, ICartState, modelCart } from "@/entities/Cart"
import { IProduct } from "@/entities/Product"
import { IPropsChildrenNode } from "@/shared/lib/types/definitions"
import { message } from "antd"
import { createContext, useContext, useMemo } from "react"

interface IState extends ICartState {
  pending: boolean
}
interface IMethods extends ICartMethods {}

const ContextState = createContext<IState>(null!)
const ContextMethods = createContext<IMethods>(null!)

export function ProviderCart(props: IPropsChildrenNode) {
  const cart = modelCart.useCart()

  const [messageApi, contextHolder] = message.useMessage()

  async function add(payload: IProduct): Promise<void | undefined> {
    await addWithMessage(async () => {
      await cart.add(payload)
    })
  }

  async function addWithMessage(cb: () => Promise<any>) {
    const key = "addToCart"
    messageApi.open({ key, type: "loading", content: "Add to cart..." })
    await cb()
    messageApi.open({ key, type: "success", content: "Product added" })
  }

  const state: IState = {
    cart: cart.cart,
    total: cart.total,
    pending: cart.pending,
  }

  const methods: IMethods = useMemo(() => {
    return {
      add: add,
      increase: cart.increase,
      decrease: cart.decrease,
      remove: cart.remove,
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
