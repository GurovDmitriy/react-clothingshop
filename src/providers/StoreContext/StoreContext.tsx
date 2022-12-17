import React from "react"
import store from "../../store/store"
import { StoreContextProps } from "./storeContextType"

export const StoreContext = React.createContext<typeof store>(store)

function StoreProvider(props: StoreContextProps) {
  const { children } = props

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreProvider
