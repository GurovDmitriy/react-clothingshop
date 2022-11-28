function getClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

export { getClone }
