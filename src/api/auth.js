import firebaseSDK from "../firebase"

/**
 * @param {object} payload
 * @param {string} payload.email
 * @param {string} payload.password
 * @returns {Promise<*|undefined>}
 */
function signUp(payload) {
  return firebaseSDK.auth.signUpFB(payload)
}

/**
 * @param {object} payload
 * @param {string} payload.email
 * @param {string} payload.password
 * @returns {Promise<*|undefined>}
 */
function signIn(payload) {
  return firebaseSDK.auth.signInFB(payload)
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
 *
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
