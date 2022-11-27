import Firebase from "firebase/compat"
import firebaseSDK from "../../firebaseSDK/firebaseSDK"

type signUpPayload = {
  email: string
  password: string
}

type SignUpResponse = Promise<Firebase.User>

function signUp(payload: signUpPayload): SignUpResponse {
  const data = {
    email: payload.email,
    password: payload.password,
  }

  return firebaseSDK.auth.signUpFB(data)
}

type signInPayload = {
  email: string
  password: string
}

type SignInResponse = Promise<Firebase.User>

function signIn(payload: signInPayload): SignInResponse {
  const data = {
    email: payload.email,
    password: payload.password,
  }

  return firebaseSDK.auth.signInFB(data)
}

type SignInWithGoogleResponse = Promise<{ user: Firebase.User; token: string }>

function signInWithGoogle(): SignInWithGoogleResponse {
  return firebaseSDK.auth.signInWithGoogleFB()
}

type SignOutResponse = Promise<void>

function signOut(): SignOutResponse {
  return firebaseSDK.auth.signOutFB()
}

type SignCheckResponse = Promise<{
  displayName: string
  id: string
  email: string
}>

function signCheck(): SignCheckResponse {
  return firebaseSDK.auth.signCheckFB()
}

type SubscribeStateChangeResponse = Firebase.Unsubscribe

type subscribeStateChangeCallBack = {
  (): void
}

function subscribeStateChange(
  cb: subscribeStateChangeCallBack
): SubscribeStateChangeResponse {
  return firebaseSDK.auth.subscribeStateChangeFB(cb)
}

export default {
  signUp,
  signIn,
  signInWithGoogle,
  signOut,
  subscribeStateChange,
  signCheck,
}
