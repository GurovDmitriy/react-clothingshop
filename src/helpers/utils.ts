function getClone(obj: any) {
  return JSON.parse(JSON.stringify(obj))
}

export { getClone }
