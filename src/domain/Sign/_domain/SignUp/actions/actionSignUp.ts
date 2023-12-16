"use sever"

import { SignPayload } from "@/modules/firebaseSDK/auth/auth"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/modules/firebaseSDK/config"

export async function actionSignUp(payload: SignPayload) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    payload.email,
    payload.password,
  )

  return userCredential
}
