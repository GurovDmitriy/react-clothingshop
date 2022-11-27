import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../config"

/**
 *
 * @param {object} payload
 * @param {string} payload.id
 * @param {string} payload.email
 * @param {string} payload.displayName
 * @param {string} payload.createdAt
 * @returns {Promise<void>}
 */
async function createUserDocumentFB(payload) {
  await setDoc(doc(db, "users", payload.id), {
    displayName: payload.displayName,
    email: payload.email,
    createdAt: payload.createdAt,
  })
}

/**
 * @param {string} id
 * @returns {Promise<DocumentData|null>}
 */
async function getUserDocumentFB(id) {
  const docRef = doc(db, `users/${id}`)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return null
  }
}

export default {
  createUserDocumentFB,
  getUserDocumentFB,
}
