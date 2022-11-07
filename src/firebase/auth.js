import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"
import { auth } from "./config"

const provider = new GoogleAuthProvider()

/**
 * @param email
 * @param password
 * @returns {Promise<User>}
 */
async function signUpFB({ email, password }) {
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

/**
 * @param email
 * @param password
 * @returns {Promise<User>}
 */
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

/**
 * @returns {Promise<{user: User, token: string}>}
 */
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

/**
 * @returns {Promise<{displayName: string, id: string, email: string}>}
 */
async function signCheckFB() {
  const response = await auth.currentUser

  const data = {
    id: response.uid,
    displayName: response.displayName,
    email: response.email,
  }
  return data
}

/**
 * @returns {Promise<void>}
 */
async function signOutFB() {
  const response = await auth.signOut()
  return response
}

/**
 * @param cb
 * @returns {Unsubscribe}
 */
function subscribeStateChangeFB(cb) {
  return onAuthStateChanged(auth, (user) => {
    cb(user)
  })
}

export default {
  signUpFB,
  signInFB,
  signInWithGoogleFB,
  signOutFB,
  subscribeStateChangeFB,
  signCheckFB,
}
