/**
 * @param {string} key
 * @returns {any}
 */
function getItemLS(key) {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    console.error("Error get item from local storage", err)
  }
}

/**
 * @param {string} key
 * @returns {any}
 */
function setItemLS(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data))
    return data
  } catch (err) {
    console.error("Error set item to local storage", err)
  }
}

/**
 * @param {string} key
 * @returns {any}
 */
function removeItemLS(key) {
  try {
    const data = JSON.parse(localStorage.getItem(key))
    localStorage.removeItem(key)
    return data
  } catch (err) {
    console.error("Error remove item from local storage", err)
  }
}

export { getItemLS, setItemLS, removeItemLS }
