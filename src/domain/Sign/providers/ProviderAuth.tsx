import { createContext, useContext, useEffect, useState } from "react"
import { IPropsChildrenNode } from "@/lib/types/definitions"
import { auth } from "@/archive/firebaseSDK/config"
import { onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation"

interface IState {
  user: IUser | null | undefined
  isAuth: boolean
}

interface IMethods {}

interface IUser {
  email: string | null
  uid: string
}

const ContextState = createContext<IState>(null!)
const ContextMethods = createContext<IMethods>(null!)

export function ProviderAuth(props: IPropsChildrenNode) {
  const router = useRouter()
  const [user, setUser] = useState<IUser | null | undefined>(undefined)

  const isAuth = Boolean(user?.uid)

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ email: user.email, uid: user.uid })
        router.push("/")
      } else {
        router.push("/sign-in")
      }
    })
  }, [])

  const state: IState = {
    user,
    isAuth,
  }

  const methods: IMethods = {}

  return (
    <ContextState.Provider value={state}>
      <ContextMethods.Provider value={methods}>
        {user === undefined ? "loading..." : props.children}
      </ContextMethods.Provider>
    </ContextState.Provider>
  )
}

export function useContextAuthState() {
  return useContext(ContextState)
}

export function useContextAuthMethods() {
  return useContext(ContextMethods)
}
