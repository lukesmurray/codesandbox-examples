import React from "react"
import { GlobalStyles } from "twin.macro"
import { StylesBase, ThemeToggle, Logo } from "./components"

const App = () => (
  <div>
    <GlobalStyles />
    <StylesBase />
    <div tw="h-screen flex flex-col items-center">
      <a
        tw="mt-10 hover:underline"
        href="https://alexperronnet.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        @alexperronnet
      </a>
      <div tw="h-full flex justify-center items-center">
        <ThemeToggle />
      </div>
      <Logo />
    </div>
  </div>
)

export default App