"use client"

import { IPropsError } from "@/lib/types/definitions"
import { useEffect } from "react"

export function ContainerError(props: IPropsError) {
  useEffect(() => {
    console.error(props.error)
  }, [props.error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => props.reset()}>Try again</button>
    </div>
  )
}
