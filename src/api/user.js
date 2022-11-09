import firebaseSDK from "../firebase"

/**
 * @param {string|number} payload.id
 * @param {string} payload.email
 * @param {string} payload.displayName
 * @param {string} payload.createdAt
 * @returns {Promise<undefined|void>}
 */
function createUserDocument(payload) {
  const data = {
    id: payload.id,
    email: payload.email,
    displayName: payload.displayName,
    createdAt: payload.createdAt,
  }

  return firebaseSDK.user.createUserDocumentFB(data)
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
