import React, { useState } from "react"
import { ThemeContextProps, ThemeContextValue } from "./themeContextType"

const theme = {
  light: {
    background: "#ffffff",
    color: "#000000",
  },

  dark: {
    background: "#000000",
    color: "#ffffff",
  },

  themeValue: ThemeContextValue.light,

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggle(): ThemeContextValue {
    return ThemeContextValue.light
  },
}

export const ThemeContext = React.createContext<typeof theme>(theme)

function ThemeProvider(props: ThemeContextProps) {
  const { children } = props
  const [themeValue, setThemeValue] = useState(ThemeContextValue.light)

  function toggle(): ThemeContextValue {
    if (themeValue === ThemeContextValue.light) {
      setThemeValue(ThemeContextValue.dark)

      return ThemeContextValue.dark
    } else {
      setThemeValue(ThemeContextValue.light)

      return ThemeContextValue.light
    }

    return ThemeContextValue.light
  }

  return (
    <ThemeContext.Provider value={{ ...theme, toggle, themeValue }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
