import firebaseSDK from "../firebase"

/**
 * @param {string|number} payload.userId
 * @param {string|number} payload.id
 * @param {string} payload.name
 * @param {string} payload.imageUrl
 * @param {string} payload.count
 * @returns {Promise<undefined|void>}
 */
function createCartDocument(payload) {
  const data = {
    userId: payload.userId,
    id: payload.id,
    name: payload.name,
    imageUrl: payload.imageUrl,
    count: payload.count,
  }

  return firebaseSDK.cart.createCartDocumentFB(data)
}

/**
 * @param {string|number} payload.userId
 * @param {string|number} payload.id
 * @param {string} payload.name
 * @param {string} payload.imageUrl
 * @param {string} payload.count
 * @returns {Promise<undefined|void>}
 */
function updateCartDocument(payload) {
  const data = {
    userId: payload.userId,
    id: payload.id,
    name: payload.name,
    imageUrl: payload.imageUrl,
    count: payload.count,
  }

  return firebaseSDK.cart.updateCartDocumentFB(data)
}

/**
 * @param {string|number} payload.userId
 * @param {string|number} payload.id
 * @returns {Promise<undefined|void>}
 */
function deleteCartFieldDocument(payload) {
  const data = {
    userId: payload.userId,
    id: payload.id,
  }

  return firebaseSDK.cart.deleteCartFieldDocumentFB(data)
}

/**
 * @param {string|number} id
 * @returns {Promise<undefined|void>}
 */
function fetchCartDocument(id) {
  return firebaseSDK.cart.fetchCartDocumentFB(id)
}

export default {
  createCartDocument,
  updateCartDocument,
  deleteCartFieldDocument,
  fetchCartDocument,
}
