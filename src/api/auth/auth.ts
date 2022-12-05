import Firebase from "firebase/compat"
import {
  SignOutResponse,
  SignPayload,
  SignResponse,
  SignWithGoogleResponse,
  SubscribeStateChangePayload,
} from "../../firebaseSDK/auth/auth"
import firebaseSDK from "../../firebaseSDK/firebaseSDK"

function signUp(payload: SignPayload): SignResponse {
  const data = {
    email: payload.email,
    password: payload.password,
  }

  return firebaseSDK.auth.signUp(data)
}

function signIn(payload: SignPayload): SignResponse {
  const data = {
    email: payload.email,
    password: payload.password,
  }

  return firebaseSDK.auth.signIn(data)
}

function signInWithGoogle(): SignWithGoogleResponse {
  return firebaseSDK.auth.signInWithGoogle()
}

function signOut(): SignOutResponse {
  return firebaseSDK.auth.signOut()
}

type SignCheckResponse = Promise<{
  displayName: string
  id: string
  email: string
}>

function signCheck(): SignCheckResponse {
  return firebaseSDK.auth.signCheck()
}

type SubscribeStateChangeResponse = Firebase.Unsubscribe

function subscribeStateChange(
  cb: SubscribeStateChangePayload
): SubscribeStateChangeResponse {
  return firebaseSDK.auth.subscribeStateChange(cb)
}

export default {
  signUp,
  signIn,
  signInWithGoogle,
  signOut,
  subscribeStateChange,
  signCheck,
}
