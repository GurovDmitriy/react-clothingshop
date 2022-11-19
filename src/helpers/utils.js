/**
 * @param obj - For copy simple arra or object
 * @returns {any}
 */
function getClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

export { getClone }
