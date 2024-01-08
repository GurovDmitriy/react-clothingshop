"use client"

import {
  IAuthMethods,
  IAuthState,
  ISignPayload,
  IUser,
} from "@/domain/Sign/types/types"
import { useStateFetch } from "@/shared/hooks/useStateFetch"
import { IPropsChildrenNode } from "@/shared/lib/types/definitions"
import { UNullishObj } from "@/shared/lib/types/util"
import { auth } from "@/shared/modules/firebaseSDK/config"
import { UISpinner } from "@/shared/ui/UISpinner/UISpinner"
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as signOutFB,
} from "firebase/auth"
import { usePathname, useRouter } from "next/navigation"
import { createContext, useContext, useLayoutEffect, useState } from "react"

const provider = new GoogleAuthProvider()

interface IState extends IAuthState {}
interface IMethods extends IAuthMethods {}

const ContextState = createContext<IState>(null!)
const ContextMethods = createContext<IMethods>(null!)

export function ProviderAuth(props: IPropsChildrenNode) {
  const pathname = usePathname()
  const router = useRouter()

  const [user, setUser] = useState<UNullishObj<IUser>>(undefined)
  const isAuth = Boolean(user?.uid)

  useLayoutEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ email: user.email, uid: user.uid })
        redirectToPrev()
      } else {
        setUser(null)
        resetError()
        redirectToSign()
      }
    })
  }, [])

  const signUp = useStateFetch((payload: ISignPayload) =>
    createUserWithEmailAndPassword(auth, payload.email, payload.password),
  )

  const signIn = useStateFetch((payload: ISignPayload) =>
    signInWithEmailAndPassword(auth, payload.email, payload.password),
  )

  const signWithGoogle = useStateFetch(async () => {
    const result = await signInWithPopup(auth, provider)
    GoogleAuthProvider.credentialFromResult(result)
  })

  async function signOut() {
    await signOutFB(auth)
    setUser(null)
  }

  function resetError() {
    signIn.resetError()
    signUp.resetError()
    signWithGoogle.resetError()
  }

  function redirectToSign() {
    router.push("/sign-in")
  }

  function redirectToPrev() {
    if (["/sign-in", "/sign-up"].includes(pathname)) {
      router.push("/")
    } else if (pathname === "/") {
      return
    } else {
      router.push(pathname)
    }
  }

  const state: IState = {
    user,
    isAuth,
  }

  const methods: IMethods = {
    signOut,
    signUp,
    signIn,
    signWithGoogle,
  }

  const inner = renderInner()

  function renderInner() {
    if (user === undefined) return <UISpinner />
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
