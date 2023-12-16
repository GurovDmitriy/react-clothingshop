"use sever"

import { SignPayload } from "@/modules/firebaseSDK/auth/auth"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/modules/firebaseSDK/config"

export async function actionSignIn(payload: SignPayload) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    payload.email,
    payload.password,
  )

  return userCredential
}
