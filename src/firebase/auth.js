import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { auth, db } from "./config"

const provider = new GoogleAuthProvider()

async function createUserFB({ email, password }) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    return userCredential.user
  } catch (err) {
    console.error(`Oops! ${err.code} ${err.message}`)
  }
}

async function signInFB({ email, password }) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    return userCredential.user
  } catch (err) {
    console.error(`Oops! ${err.code} ${err.message}`)
  }
}

async function signInWithGoogleFB() {
  try {
    const result = await signInWithPopup(auth, provider)
    const credential = GoogleAuthProvider.credentialFromResult(result)
    const token = credential.accessToken

    return {
      user: result.user,
      token,
    }
  } catch (err) {
    console.error(`Oops! ${err.code} ${err.message}`)
  }
}

async function createUserDocumentFB({ createdAt, id, email, displayName }) {
  try {
    const docRef = doc(db, `users/${id}`)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) return

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

async function signOutFB() {
  const response = await auth.signOut()
  return response
}

function subscribeStateChangeFB(cb) {
  return onAuthStateChanged(auth, (user) => {
    cb(user)
  })
}

export default {
  createUserFB,
  signInFB,
  signInWithGoogleFB,
  createUserDocumentFB,
  getUserDocumentFB,
  signOutFB,
  subscribeStateChangeFB,
}
