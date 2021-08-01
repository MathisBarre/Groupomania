import Head from 'next/head'
import '../styles/globals.css'
import Header from "../components/Header"

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Head>
      <title>Groupomania</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Component {...pageProps} />
    </div>
  </div>
  )
}

export default MyApp
