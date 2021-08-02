import Head from 'next/head'
import { ConnectedUserContextProvider } from '../utils/ConnectedUserContext'
import '../styles/globals.css'
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Groupomania</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <ConnectedUserContextProvider>
            <Header />
            <Component {...pageProps} />
          </ConnectedUserContextProvider>
        </div>
    </div>
  )
}

export default MyApp
