"use sever"

import { SignPayload } from "@/modules/firebaseSDK/auth/auth"
import Firebase from "firebase/compat/app"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/modules/firebaseSDK/config"

export async function actionSignUp(
  payload: SignPayload,
): Promise<Firebase.User> {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    payload.email,
    payload.password,
  )

  return userCredential.user as Firebase.User
}
