import React from "react"
import { Global } from "@emotion/react"
import { GlobalStyles } from "twin.macro"
import { stylesBase, ThemeToggle, Logo } from "./components"

const App = () => (
  <div>
    <GlobalStyles />
    <Global styles={stylesBase} />
    <div tw="h-screen flex flex-col items-center">
      <Logo />
      <div tw="h-full flex justify-center items-center">
        <ThemeToggle />
      </div>
      <a
        tw="mb-10 hover:underline"
        href="https://alexperronnet.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        @alexperronnet
      </a>
    </div>
  </div>
)

export default App