import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./config"

async function createUserDocumentFB({ createdAt, id, email, displayName }) {
  try {
    const response = await setDoc(doc(db, "users", id), {
      displayName,
      createdAt,
      email,
    })

    return response
  } catch (err) {
    console.error(`Oops! ${err.code} ${err.message}`)
  }
}

async function getUserDocumentFB(id) {
  try {
    const docRef = doc(db, `users/${id}`)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      return null
    }
  } catch (err) {
    console.error(`Oops! ${err.code} ${err.message}`)
  }
}

export default {
  createUserDocumentFB,
  getUserDocumentFB,
}
