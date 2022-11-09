import firebaseSDK from "../firebase"

/**
 * @param {object} payload
 * @param {string} payload.email
 * @param {string} payload.password
 * @returns {Promise<*|undefined>}
 */
function signUp(payload) {
  const data = {
    email: payload.email,
    password: payload.password,
  }

  return firebaseSDK.auth.signUpFB(data)
}

/**
 * @param {object} payload
 * @param {string} payload.email
 * @param {string} payload.password
 * @returns {Promise<*|undefined>}
 */
function signIn(payload) {
  const data = {
    email: payload.email,
    password: payload.password,
  }

  return firebaseSDK.auth.signInFB(data)
}

/**
 * @returns {Promise<{user: User, token: string}|undefined>}
 */
function signInWithGoogle() {
  return firebaseSDK.auth.signInWithGoogleFB()
}

/**
 * @returns {Promise<*>}
 */
function signOut() {
  return firebaseSDK.auth.signOutFB()
}

/**
 * @returns {*}
 */
function signCheck() {
  return firebaseSDK.auth.signCheckFB()
}

/**
 * @param {function} cb - Callback
 * @returns {Unsubscribe}
 */
function subscribeStateChange(cb) {
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
