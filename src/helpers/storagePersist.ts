function getItemLS(key: string) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return JSON.parse(localStorage.getItem(key))
  } catch (err) {
    console.error("Error get item from local storage", err)
  }
}

function setItemLS(key: string, data: any) {
  try {
    localStorage.setItem(key, JSON.stringify(data))
    return data
  } catch (err) {
    console.error("Error set item to local storage", err)
  }
}

function removeItemLS(key: string) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const data = JSON.parse(localStorage.getItem(key))
    localStorage.removeItem(key)
    return data
  } catch (err) {
    console.error("Error remove item from local storage", err)
  }
}

export { getItemLS, setItemLS, removeItemLS }
