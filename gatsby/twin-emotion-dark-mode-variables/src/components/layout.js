import React from "react"
import { Global } from "@emotion/react"
import { GlobalStyles } from "twin.macro"

import { stylesBase } from "../components"

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <Global styles={stylesBase} />
    {children}
  </div>
)

export default Layout
