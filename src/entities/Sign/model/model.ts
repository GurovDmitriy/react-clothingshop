"use client"

import { ISignPayload, IUser } from "@/entities/Sign"
import { useStateFetch } from "@/shared/hooks/useStateFetch"
import { UNullishObj } from "@/shared/lib/types/util"
import { auth } from "@/shared/modules/firebaseSDK/config"
import { signOut as signOutFB } from "@firebase/auth"
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"
import { useState } from "react"

const provider = new GoogleAuthProvider()

function useModelSign() {
  const [user, setUser] = useState<UNullishObj<IUser>>(undefined)
  const isAuth = Boolean(user?.uid)

  const signUp = useStateFetch((payload: ISignPayload) => {
    resetError()
    return createUserWithEmailAndPassword(auth, payload.email, payload.password)
  })

  const signIn = useStateFetch((payload: ISignPayload) => {
    resetError()
    return signInWithEmailAndPassword(auth, payload.email, payload.password)
  })

  const signWithGoogle = useStateFetch(async () => {
    resetError()
    const result = await signInWithPopup(auth, provider)
    return GoogleAuthProvider.credentialFromResult(result)
  })

  async function signOut() {
    resetError()
    await signOutFB(auth)
    setUser(null)
  }

  function resetError() {
    signIn.resetError()
    signUp.resetError()
    signWithGoogle.resetError()
  }

  return {
    user,
    isAuth,
    setUser,
    signUp,
    signIn,
    signWithGoogle,
    signOut,
  }
}

export const modelSign = {
  useModelSign,
}
