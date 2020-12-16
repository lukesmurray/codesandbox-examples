import React from "react"
import "twin.macro"

import { Layout, ThemeToggle, Logos } from "./../components"

const Home = () => (
  <Layout>
    <div tw="h-screen flex flex-col items-center">
      <Logos />
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
  </Layout>
)

export default Home
