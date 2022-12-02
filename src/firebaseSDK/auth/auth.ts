import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"
import Firebase from "firebase/compat"
import { auth } from "../config"

const provider = new GoogleAuthProvider()

export type SignPayload = {
  email: string
  password: string
}

export type SignResponse = Promise<Firebase.User | any>

async function signUp(payload: SignPayload): SignResponse {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    payload.email,
    payload.password
  )

  return userCredential.user
}

async function signIn(payload: SignPayload): SignResponse {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    payload.email,
    payload.password
  )

  return userCredential.user
}

export type SignWithGoogleResponse = Promise<{
  user: Firebase.User | any
  token: string | object | null | undefined
}>

async function signInWithGoogle(): SignWithGoogleResponse {
  const result = await signInWithPopup(auth, provider)
  const credential = GoogleAuthProvider.credentialFromResult(result)
  const token = credential?.accessToken

  return {
    user: result.user,
    token,
  }
}

export type AuthCurrentUserResponse = Firebase.User | any

export type SignCheckResponse = Promise<{
  displayName: string
  id: string
  email: string
}>

async function signCheck(): SignCheckResponse {
  const response: AuthCurrentUserResponse = await auth.currentUser

  const data = {
    id: response.uid,
    displayName: response.displayName,
    email: response.email,
  }

  return data
}

export type SignOutResponse = Promise<void>

async function signOut(): SignOutResponse {
  const response = await auth.signOut()
  return response
}

export type SubscribeStateChangePayload = (user: Firebase.User | any) => void

function subscribeStateChange(cb: SubscribeStateChangePayload) {
  return onAuthStateChanged(auth, (user) => {
    cb(user)
  })
}

export default {
  signUp,
  signIn,
  signInWithGoogle,
  signOut,
  subscribeStateChange,
  signCheck,
}
