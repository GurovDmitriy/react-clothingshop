import firebaseSDK from "../firebase"

function createUser({ email, password }) {
  return firebaseSDK.auth.createUserFB({ email, password })
}

function signInWithGoogleFB() {
  return firebaseSDK.auth.signInWithGoogleFB()
}

export default {
  createUser,
  signInWithGoogleFB,
}
