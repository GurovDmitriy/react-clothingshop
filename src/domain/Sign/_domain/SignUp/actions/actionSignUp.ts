"use sever"

import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/modules/firebaseSDK/config"
import { ISignPayload } from "@/domain/Sign/types/types"

export async function actionSignUp(payload: ISignPayload) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    payload.email,
    payload.password,
  )

  return userCredential
}
