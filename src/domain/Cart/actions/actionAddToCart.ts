"use client"

import { ICartProduct } from "@/domain/Cart/types/types"
import { db } from "@/shared/modules/firebaseSDK/config"
import { doc, setDoc } from "firebase/firestore"

export async function actionAddToCart(
  uid: string,
  payload: ICartProduct,
): Promise<void> {
  const cartsRef = doc(db, "carts", uid)

  await setDoc(
    cartsRef,
    {
      [String(payload.id)]: {
        id: payload.id,
        name: payload.name,
        imageUrl: payload.imageUrl,
        count: payload.count,
        price: payload.price,
      },
    },
    { merge: true },
  )
}
