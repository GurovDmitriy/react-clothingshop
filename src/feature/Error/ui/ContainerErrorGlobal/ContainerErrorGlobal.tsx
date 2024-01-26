"use client"

import { IPropsErrorGlobal } from "@/shared/lib/types/definitions"
import { useEffect } from "react"

export function ContainerErrorGlobal(props: IPropsErrorGlobal) {
  useEffect(() => {
    console.error(props.error)
  }, [props.error])

  return (
    <html lang="en" data-testid="html-error">
      <body data-testid="body-error">
        <h2>Something went wrong!</h2>
        <button onClick={() => props.reset()}>Try again</button>
      </body>
    </html>
  )
}
