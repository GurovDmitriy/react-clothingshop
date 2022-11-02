import firebaseSDK from "../firebase"

function createUser({ email, password, displayName }) {
  return firebaseSDK.auth.createUserFB({
    email,
    password,
    displayName,
  })
}

function createUserDocument({ uid, email, displayName }) {
  return firebaseSDK.auth.createUserDocumentFB({
    createdAt: new Date(),
    id: uid,
    email,
    displayName,
  })
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
  createUserDocument,
}
