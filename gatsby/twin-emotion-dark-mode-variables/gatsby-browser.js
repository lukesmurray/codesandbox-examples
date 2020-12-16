import React from "react"
import { ThemeProvider } from "./src/components"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
