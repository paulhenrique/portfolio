import React from 'react';

interface GlobalProps {
  showDock: boolean;
  setShowDock: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = React.createContext({} as GlobalProps);

export function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  const [showDock, setShowDock] = React.useState(false);
  return (
    <GlobalContext.Provider value={{ showDock, setShowDock }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  return React.useContext(GlobalContext);
}