function useCustomLogger() {
  function logger() {
    console.log("logger")
  }

  return [logger]
}

export default useCustomLogger
