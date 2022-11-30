const setItemCO = (
  cookie: {
    set: (arg0: any, arg1: any, arg2: { path: string; maxAge: number }) => void
  },
  key: any,
  data: any
) => {
  try {
    const options = {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    }

    cookie.set(key, data, options)
  } catch (err) {
    return null
  }
}

const removeItemCO = (
  cookie: {
    remove: (
      arg0: any,
      arg1: any,
      arg2: { path: string; maxAge: number }
    ) => void
  },
  key: any,
  data: any
) => {
  try {
    const options = {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    }

    cookie.remove(key, data, options)
  } catch (err) {
    return null
  }
}

export { removeItemCO, setItemCO }
