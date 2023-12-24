"use client"

import { createContext, useContext, useLayoutEffect, useState } from "react"
import { IPropsChildrenNode } from "@/lib/types/definitions"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as signOutFB,
} from "firebase/auth"
import { useRouter } from "next/navigation"
import { auth } from "@/modules/firebaseSDK/config"
import {
  IAuthMethods,
  IAuthState,
  ISignPayload,
  IUser,
} from "@/domain/Sign/types/types"
import { useStateFetch } from "@/hooks/useStateFetch"
import { UNullishObj } from "@/lib/types/util"

interface IState extends IAuthState {}
interface IMethods extends IAuthMethods {}

const ContextState = createContext<IState>(null!)
const ContextMethods = createContext<IMethods>(null!)

export function ProviderAuth(props: IPropsChildrenNode) {
  const router = useRouter()
  const [user, setUser] = useState<UNullishObj<IUser>>(undefined)
  const isAuth = Boolean(user?.uid)

  const signUp = useStateFetch((payload: ISignPayload) =>
    createUserWithEmailAndPassword(auth, payload.email, payload.password),
  )

  const signIn = useStateFetch((payload: ISignPayload) =>
    signInWithEmailAndPassword(auth, payload.email, payload.password),
  )

  const sig = useStateFetch((payload: ISignPayload) =>
    signInWithGoogle(auth, payload.email, payload.password),
  )

  function signOut() {
    signOutFB(auth)
  }

  useLayoutEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ email: user.email, uid: user.uid })
        router.push("/")
      } else {
        setUser(null)
        router.push("/sign-in")
      }
    })
  }, [])

  const state: IState = {
    user,
    isAuth,
  }

  const methods: IMethods = {
    signOut,
    signUp,
    signIn,
    signInWithGoogle,
  }

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
