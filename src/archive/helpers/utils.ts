function getClone(obj: object) {
  return JSON.parse(JSON.stringify(obj))
}

export { getClone }
