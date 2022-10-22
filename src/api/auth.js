import firebaseSDK from "../firebase"

function createUser({ email, password }) {
  return firebaseSDK.auth.createUserFB({ email, password })
}

function signIn({ email, password }) {
  return firebaseSDK.auth.signInFB({ email, password })
}

function signInWithGoogle() {
  return firebaseSDK.auth.signInWithGoogleFB()
}

export default {
  createUser,
  signIn,
  signInWithGoogle,
}
