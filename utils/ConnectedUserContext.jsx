import { createContext, useContext, useState } from 'react';

const ConnectedUserContext = createContext(null);

export function ConnectedUserContextProvider({ children }) {
  const [connectedUser, setConnectedUser] = useState(null)

  return (
    <ConnectedUserContext.Provider value={{ connectedUser, setConnectedUser }}>
      {children}
    </ConnectedUserContext.Provider>
  );
}

export function useConnectedUserContext() {
  return useContext(ConnectedUserContext);
}
