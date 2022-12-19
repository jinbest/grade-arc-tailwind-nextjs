import React from "react"
import Document, { Html, Main, NextScript, Head } from "next/document"

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/logo.ico" />
          <link href="./static/font.css" rel="preload stylesheet" as="style" />
        </Head>

        <body>
          <Main />
        </body>

        <NextScript />
      </Html>
    )
  }
}
