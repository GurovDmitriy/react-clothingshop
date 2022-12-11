export enum ThemeContextValue {
  light = "light",
  dark = "dark",
}

import React from "react"

export type ThemeContextProps = {
  children: React.ReactNode
}
