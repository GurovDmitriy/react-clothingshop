import React, { useState } from "react"
import { ThemeContextProps } from "./themeContext"
import { ThemeContextValue } from "./themeContextType"

const theme = {
  light: {
    background: "#ffffff",
    color: "#000000",
  },

  dark: {
    background: "#afafaf",
    color: "#000000",
  },

  themeValue: ThemeContextValue.light,

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle(): void {},
}

export const ThemeContext = React.createContext(theme)

function ThemeProvider(props: ThemeContextProps) {
  const { children } = props
  const [themeValue, setThemeValue] = useState(ThemeContextValue.light)

  function toggle(): void {
    if (themeValue === ThemeContextValue.light) {
      setThemeValue(ThemeContextValue.dark)
    } else {
      setThemeValue(ThemeContextValue.light)
    }
  }

  return (
    <ThemeContext.Provider value={{ ...theme, toggle, themeValue }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
