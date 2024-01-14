"use client"

import { IAuthMethods, IAuthState, modelSign } from "@/entities/Sign"
import { IPropsChildrenNode } from "@/shared/lib/types/definitions"
import { auth } from "@/shared/modules/firebaseSDK/config"
import { UISpinner } from "@/shared/ui/UISpinner/UISpinner"
import { onAuthStateChanged } from "firebase/auth"
import { usePathname, useRouter } from "next/navigation"
import { createContext, useContext, useEffect } from "react"

interface IState extends IAuthState {}
interface IMethods extends IAuthMethods {}

const ContextState = createContext<IState>(null!)
const ContextMethods = createContext<IMethods>(null!)

export function ProviderAuth(props: IPropsChildrenNode) {
  const pathname = usePathname()
  const router = useRouter()
  const sign = modelSign.useModelSign()

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        sign.setUser({ email: user.email, uid: user.uid })
        redirectToPrev()
      } else {
        sign.setUser(null)
        redirectToSign()
      }
    })
  }, [])

  function redirectToSign() {
    router.push("/sign-in")
  }

  function redirectToPrev() {
    const pathn = window?.location.pathname || pathname
    if (/sign-in|sign-up/.test(pathn)) {
      return router.push("/")
    } else if (pathname === "/") {
      return
    } else {
      return router.push(pathname)
    }
  }

  const state: IState = {
    user: sign.user,
    isAuth: sign.isAuth,
  }

  const methods: IMethods = {
    signOut: sign.signOut,
    signUp: sign.signUp,
    signIn: sign.signIn,
    signWithGoogle: sign.signWithGoogle,
  }

  const inner = renderInner()

  function renderInner() {
    if (sign.user === undefined) return <UISpinner />
    else return props.children
  }

  return (
    <ContextState.Provider value={state}>
      <ContextMethods.Provider value={methods}>{inner}</ContextMethods.Provider>
    </ContextState.Provider>
  )
}

export function useContextAuthState() {
  return useContext(ContextState)
}

export function useContextAuthMethods() {
  return useContext(ContextMethods)
}
