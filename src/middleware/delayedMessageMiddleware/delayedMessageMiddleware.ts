const delayedMessageMiddleware =
  (storeAPI: any) => (next: any) => (action: any) => {
    if (action.type.includes("auth/signCheckAction")) {
      setTimeout(() => {
        console.log("sign check action")
      }, 1400)
    }

    return next(action)
  }

export default delayedMessageMiddleware
