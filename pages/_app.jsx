import { useEffect, createContext, useState, useContext } from "react"
import Head from 'next/head'
import { useRouter } from 'next/router'
import '@/styles/globals.css'
import Header from "@/components/Header"

const ConnectedUserContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [connectedUser, setConnectedUser] = useState(null)
  
  return (
    <div>
      <Head>
        <title>Groupomania</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <ConnectedUserContext.Provider value={{ connectedUser, setConnectedUser }}>
            {(router.pathname === "/") ? "" : <Header />}
            <Component {...pageProps} />
          </ConnectedUserContext.Provider>
        </div>
    </div>
  )
}

export function useConnectedUserContext() {
  return useContext(ConnectedUserContext);
}

export default MyApp
