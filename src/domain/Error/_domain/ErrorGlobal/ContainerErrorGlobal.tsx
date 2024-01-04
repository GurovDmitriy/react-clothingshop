"use client"

import { IPropsErrorGlobal } from "@/lib/types/definitions"
import { useEffect } from "react"

export function ContainerErrorGlobal(props: IPropsErrorGlobal) {
  useEffect(() => {
    console.error(props.error)
  }, [props.error])

  return (
    <html lang="en">
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => props.reset()}>Try again</button>
      </body>
    </html>
  )
}
