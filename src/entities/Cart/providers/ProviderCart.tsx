"use client"

import { IModelCart, useModelCart } from "@/entities/Cart"
import { ICartProduct } from "@/feature/Cart"
import { IPropsChildrenNode } from "@/shared/lib/types/definitions"
import { message } from "antd"
import { createContext, useContext, useMemo } from "react"

interface IState extends Pick<IModelCart, "cart" | "total" | "pending"> {}
interface IMethods
  extends Pick<IModelCart, "add" | "remove" | "increase" | "decrease"> {}

const ContextState = createContext<IState>(null!)
const ContextMethods = createContext<IMethods>(null!)

export function ProviderCart(props: IPropsChildrenNode) {
  const cart = useModelCart()

  const [messageApi, contextHolder] = message.useMessage()

  async function add(payload: ICartProduct): Promise<void | undefined> {
    await addWithMessage(async () => {
      cart.add(payload)
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
