import React from "react"
import ReactDOM from "react-dom"

import App from "./app"
import { ThemeProvider } from "./components"

const rootElement = document.getElementById("root")

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  rootElement
)
