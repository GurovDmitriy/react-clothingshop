"use client"

import { TStatus } from "@/shared/lib/types/definitions"
import { useState } from "react"

export function useStateFetch<T>(cb: (...args: any[]) => Promise<T>) {
  const [data, setData] = useState<T | undefined>(undefined)
  const [status, setStatus] = useState<TStatus>("useless")
  const [error, setError] = useState<Error | null>(null)

  const useless = status === "useless"
  const pending = status === "pending"
  const success = status === "success"
  const failure = status === "failure"

  function resetError() {
    setError(null)
  }

  async function fetch(...args: any[]) {
    if (pending) return

    setError(null)
    setStatus("pending")

    try {
      const response = await cb(...args)
      setData(response)

      setStatus("success")
    } catch (error: any) {
      setError(error)
      setStatus("failure")
    }
  }

  return {
    fetch,
    resetError,
    data,
    status,
    useless,
    pending,
    success,
    failure,
    error,
  }
}
