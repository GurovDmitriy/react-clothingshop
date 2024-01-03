"use client"

import { deleteField, doc, updateDoc } from "firebase/firestore"
import { db } from "@/archive/firebaseSDK/config"
import { ICartProduct } from "@/domain/Cart/types/types"

export async function actionDeleteFromCart(
  uid: string,
  payload: ICartProduct,
): Promise<void> {
  const cartsRef = doc(db, "carts", uid)

  await updateDoc(cartsRef, {
    [String(payload.id)]: deleteField(),
  })
}
