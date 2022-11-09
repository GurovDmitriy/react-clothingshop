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
 * @param {object} payload
 * @param {string} payload.email
 * @param {string} payload.password
 * @returns {Promise<User>}
 */
async function signUpFB(payload) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    payload.email,
    payload.password
  )

  return userCredential.user
}

/**
 * @param {object} payload
 * @param {string} payload.email
 * @param {string} payload.password
 * @returns {Promise<User>}
 */
async function signInFB(payload) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    payload.email,
    payload.password
  )

  return userCredential.user
}

/**
 * @returns {Promise<{user: User, token: string}>}
 */
async function signInWithGoogleFB() {
  const result = await signInWithPopup(auth, provider)
  const credential = GoogleAuthProvider.credentialFromResult(result)
  const token = credential.accessToken

  return {
    user: result.user,
    token,
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
