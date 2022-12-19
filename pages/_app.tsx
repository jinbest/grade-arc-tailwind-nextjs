import "../styles/globals.css"
import "tailwindcss/tailwind.css"
import type { AppProps } from "next/app"
import { Provider } from "mobx-react"
import Head from "next/head"
import { store } from "../store"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Grade Arc Dashboard</title>
      </Head>

      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
