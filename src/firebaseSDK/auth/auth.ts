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

type EmailPasswordType = {
  email: string
  password: string
}

async function signUpFB(payload: EmailPasswordType): Promise<Firebase.User | any> {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    payload.email,
    payload.password
  )

  return userCredential.user
}

async function signInFB(
  payload: EmailPasswordType
): Promise<Firebase.User | any> {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    payload.email,
    payload.password
  )

  return userCredential.user
}

async function signInWithGoogleFB(): Promise<{ user: Firebase.User | any; token: any }> {
  const result = await signInWithPopup(auth, provider)
  const credential = GoogleAuthProvider.credentialFromResult(result)
  const token = credential.accessToken

  return {
    user: result.user,
    token,
  }
}

type SignCheckFBType = {
  displayName: string
  id: string
  email: string
}

type SignCheckFBResponseCurrentUserType = {
  uid: string
  displayName: string
  email: string
}

async function signCheckFB(): Promise<SignCheckFBType> {
  const response: Firebase.User | any = await auth.currentUser

  const data = {
    id: response.uid,
    displayName: response.displayName,
    email: response.email,
  }

  return data
}

async function signOutFB() {
  const response = await auth.signOut()
  return response
}

function subscribeStateChangeFB(cb: (user: Firebase.User | any) => void) {
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
