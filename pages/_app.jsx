import { useEffect, createContext, useState, useContext } from "react"
import Head from 'next/head'
import { useRouter } from 'next/router'
import '@/styles/globals.css'
import Header from "@/components/Header"
import { useCookies } from "react-cookie"
import NextNprogress from 'nextjs-progressbar';

const ConnectedUserContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [ cookies ] = useCookies(["connectedUser"])

  const [connectedUser, setConnectedUser] = useState((!cookies.connectedUser) ? null : cookies.connectedUser)
  
  return (
    <div>
      <Head>
        <title>Groupomania</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <ConnectedUserContext.Provider value={{ connectedUser, setConnectedUser }}>
          {(router.pathname === "/" || router.pathname === "/admin") ? "" : <Header />}
            <div id="mycontainer" className="flex flex-col min-h-screen bg-gray-100">
              <NextNprogress
                color="#E11D48"
                startPosition={0.3}
                stopDelayMs={200}
                height={2}
                showOnShallow={true}
                options={{
                  parent: "#mycontainer"
                }}
              />
              <Component id="mycontainer" {...pageProps} />
            </div>
        </ConnectedUserContext.Provider>
    </div>
  )
}

export function useConnectedUserContext() {
  return useContext(ConnectedUserContext);
}

export default MyApp
