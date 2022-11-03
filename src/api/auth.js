import firebaseSDK from "../firebase"

function createUser({ email, password }) {
  return firebaseSDK.auth.createUserFB({
    email,
    password,
  })
}

function signIn({ email, password }) {
  return firebaseSDK.auth.signInFB({ email, password })
}

function signInWithGoogle() {
  return firebaseSDK.auth.signInWithGoogleFB()
}

function createUserDocument({ id, email, displayName }) {
  return firebaseSDK.auth.createUserDocumentFB({
    createdAt: new Date(),
    id,
    email,
    displayName,
  })
}

function getUserDocument(id) {
  return firebaseSDK.auth.getUserDocumentFB(id)
}

function signOut() {
  return firebaseSDK.auth.signOutFB()
}

function subscribeStateChange(cb) {
  return firebaseSDK.auth.subscribeStateChangeFB(cb)
}

export default {
  createUser,
  signIn,
  signInWithGoogle,
  createUserDocument,
  getUserDocument,
  signOut,
  subscribeStateChange,
}
