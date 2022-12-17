import React from "react"

export enum ThemeContextValue {
  light = "light",
  dark = "dark",
}

export type ThemeContextProps = {
  children: React.ReactNode
}
