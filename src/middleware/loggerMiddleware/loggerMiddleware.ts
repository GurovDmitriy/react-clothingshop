const loggerMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
  console.log("dispatching", action)
  const result = next(action)
  console.log("next state", storeAPI.getState())
  return result
}

export default loggerMiddleware
