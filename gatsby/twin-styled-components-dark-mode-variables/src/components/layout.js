import React from "react"
import { GlobalStyles } from "twin.macro"

import { StylesBase } from "../components"

const Home = ({ children }) => (
  <div>
    <GlobalStyles />
    <StylesBase />
    {children}
  </div>
)

export default Home
