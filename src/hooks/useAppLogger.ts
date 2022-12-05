function useAppLogger() {
  function logger() {
    console.log("logger")
  }

  return [logger]
}

export default useAppLogger
