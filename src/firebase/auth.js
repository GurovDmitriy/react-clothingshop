import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth"
import { auth } from "./firebaseConfig"

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

export default {
  createUserFB,
  signInFB,
  signInWithGoogleFB,
}
