import firebaseSDK from "../firebase"

/**
 * @param {string|number} payload.id
 * @param {string} payload.email
 * @param {string} payload.displayName
 * @param {string} payload.createdAt
 * @returns {Promise<undefined|void>}
 */
function createUserDocument(payload) {
  return firebaseSDK.user.createUserDocumentFB(payload)
}

/**
 * @param {string|number} id
 * @returns {Promise<undefined|void>}
 */
function getUserDocument(id) {
  return firebaseSDK.user.getUserDocumentFB(id)
}

export default {
  createUserDocument,
  getUserDocument,
}
