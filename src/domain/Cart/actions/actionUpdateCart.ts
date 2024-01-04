"use client"

import { ICartProduct } from "@/domain/Cart/types/types"
import { db } from "@/modules/firebaseSDK/config"
import { doc, updateDoc } from "firebase/firestore"

export async function actionUpdateCart(
  uid: string,
  payload: ICartProduct,
): Promise<void> {
  const cartsRef = doc(db, "carts", uid)

  await updateDoc(cartsRef, {
    [String(payload.id)]: {
      id: payload.id,
      name: payload.name,
      imageUrl: payload.imageUrl,
      count: payload.count,
      price: payload.price,
    },
  })
}
