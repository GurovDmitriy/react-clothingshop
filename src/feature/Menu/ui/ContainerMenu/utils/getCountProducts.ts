export function getCountProducts<T extends { count: number }[]>(arr: T) {
  return arr.reduce((prev, next) => prev + next.count, 0)
}
