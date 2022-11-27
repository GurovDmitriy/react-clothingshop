import { deleteField, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { db } from "../config"

/**
 *
 * @param {object} payload
 * @param {string} payload.userId
 * @param {string} payload.id
 * @param {string} payload.name
 * @param {string} payload.imageUrl
 * @param {string} payload.count
 * @param {string} payload.price
 * @returns {Promise<void>}
 */
async function createCartDocumentFB(payload) {
  const cartsRef = doc(db, "carts", payload.userId)
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
    { merge: true }
  )
}

/**
 *
 * @param {object} payload
 * @param {string} payload.userId
 * @param {string} payload.id
 * @param {string} payload.name
 * @param {string} payload.imageUrl
 * @param {string} payload.count
 * @param {string} payload.price
 * @returns {Promise<void>}
 */
async function updateCartDocumentFB(payload) {
  const cartsRef = doc(db, "carts", payload.userId)
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

/**
 *
 * @param {object} payload
 * @param {string} payload.userId
 * @param {string} payload.id
 * @returns {Promise<void>}
 */
async function deleteCartFieldDocumentFB(payload) {
  const cartsRef = doc(db, "carts", payload.userId)
  await updateDoc(cartsRef, {
    [String(payload.id)]: deleteField(),
  })
}

/**
 * @param {string} id
 * @returns {Promise<DocumentData|null>}
 */
async function fetchCartDocumentFB(id) {
  const cartsRef = doc(db, `carts/${id}`)
  const docSnap = await getDoc(cartsRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return null
  }
}

export default {
  createCartDocumentFB,
  updateCartDocumentFB,
  deleteCartFieldDocumentFB,
  fetchCartDocumentFB,
}
