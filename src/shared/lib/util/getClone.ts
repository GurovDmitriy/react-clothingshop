export function getClone<T>(obj: T): T {
  if (obj === undefined || obj === null) return obj

  return JSON.parse(JSON.stringify(obj))
}
