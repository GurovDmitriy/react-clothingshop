"use sever"

import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/modules/firebaseSDK/config"
import { ISignPayload } from "@/domain/Sign/types/types"

export async function actionSignIn(payload: ISignPayload) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    payload.email,
    payload.password,
  )

  return userCredential
}
