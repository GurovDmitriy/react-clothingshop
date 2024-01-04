"use client"

import { ICartProduct } from "@/domain/Cart/types/types"
import { db } from "@/modules/firebaseSDK/config"
import { deleteField, doc, updateDoc } from "firebase/firestore"

export async function actionDeleteFromCart(
  uid: string,
  payload: ICartProduct,
): Promise<void> {
  const cartsRef = doc(db, "carts", uid)

  await updateDoc(cartsRef, {
    [String(payload.id)]: deleteField(),
  })
}
