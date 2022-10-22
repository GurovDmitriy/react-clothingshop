import firebaseSDK from "../firebase"

function createUser({ email, password }) {
  return firebaseSDK.auth.createUserFB({ email, password })
}

export default {
  createUser,
}
