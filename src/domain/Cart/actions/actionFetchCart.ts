"use client"

import Firebase from "firebase/compat/app"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/archive/firebaseSDK/config"

export async function actionFetchCart(
  uid: string,
): Promise<Firebase.firestore.DocumentData | null> {
  const cartsRef = doc(db, `carts/${uid}`)
  const docSnap = await getDoc(cartsRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return null
  }
}
