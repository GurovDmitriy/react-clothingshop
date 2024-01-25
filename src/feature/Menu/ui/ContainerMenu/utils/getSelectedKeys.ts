export function getSelectedKeys<T extends { key: string }[]>(
  pathName: string,
  list: T,
  defaultKey: string,
) {
  const startPath = pathName ? pathName.split("/")[1] : ""
  const element = list.find((item) => item.key === startPath)?.key ?? defaultKey
  return [element]
}
